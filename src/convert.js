import inpTemplate from './templates/inp.hbs';
import { fillSimulations } from './simModel';
import { defaultMaterialNameFromId } from './matModel';

// given an ID, return the name of the material
function materialIdToName(dataModel, id) {
  const materials = dataModel.data.Materials;
  let count = materials.length;
  while (count--) {
    if (materials[count].id === id || materials[count].id === +id) {
      return materials[count].name;
    }
  }
  if (dataModel.data.DefaultMaterials) {
    const defaultMaterials = dataModel.data.DefaultMaterials[0].defaultMaterial;
    const defaultMaterialsNames = Object.keys(defaultMaterials);
    let count = defaultMaterialsNames.length;
    while(count--) {
      if (defaultMaterials[defaultMaterialsNames[count]].id === id) {
        return defaultMaterialNameFromId(defaultMaterialsNames[count]);
      }
    }
  }
  if (dataModel.data.Fuels) {
    const fuels = dataModel.data.Fuels;
    let count = fuels.length;
    while (count--) {
      if (fuels[count].id === id || fuels[count].id === +id) {
        return fuels[count].name;
      }
    }
  }

  console.log('Missing material id', id);
  return null;
}

// from a grid array, extract IDs of all used items, except the emptyItem
function extractUsedItems(itemMap) {
  const usedMap = {};
  itemMap.grid.forEach((item) => {
    usedMap[+item] = true;
  });
  delete usedMap[+itemMap.emptyItem];
  return usedMap;
}

// from a list of rods, extract IDs of all used cells.
function extractUsedCells(rodList) {
  const usedMap = {};
  rodList.forEach((rod) => {
    rod.rodStack.rod.value[0].stack.forEach((item) => {
      usedMap[+item.cell] = true;
    });
  });
  return usedMap;
}

function getSymmetricMap(cellMap, symmetry) {
  const InpHelper = window.Simput.types.vera.helper.InpHelper;

  return InpHelper.getTextMap(
    {
      cell_map: cellMap,
      symmetry,
    },
    {
      numPins: Math.sqrt(cellMap.length),
      pad: '    ', // 4 space padding on left.
    }
  );
}
// get a text map, but stripped of empty items where coreTextMap is '0'
function getStrippedSymmetricMap(cellMap, symmetry, coreTextMap) {
  const InpHelper = window.Simput.types.vera.helper.InpHelper;
  let textMap = getSymmetricMap(cellMap, symmetry);
  textMap = InpHelper.stripCoreZeros(textMap, coreTextMap, '    ');
  return textMap;
}

const mapConfig = [
  {
    type: 'assembly',
    coreMapKey: 'CoreAssemblyMap',
    coreMapName: 'assm_map',
    index: 0,
  },
  {
    type: 'insert',
    coreMapKey: 'CoreControlInsertMap',
    coreMapName: 'insert_map',
    index: 1,
  },
  {
    type: 'control',
    coreMapKey: 'CoreControlInsertMap',
    coreMapName: 'crd_map',
    index: 1,
  },
  {
    type: 'detector',
    coreMapKey: 'CoreDetectorMap',
    coreMapName: 'det_map',
    index: 2,
  },
  {
    type: 'label',
    coreMapKey: 'LabelMap',
    coreMapName: 'crd_bank',
    index: 3,
  },
];

function getCrdBankMap(assemblyMap) {
  const itemMap = assemblyMap.stateMapLabels.labels.value;
  if (itemMap.every((item) => item === '')) return null;
  return itemMap.map((item) => (item === '' ? '-' : item));
}

function fillCoreMaps(model, dataModel) {
  const InpHelper = window.Simput.types.vera.helper.InpHelper;
  let coreShape = null;
  const coreTextMaps = {};
  mapConfig.forEach((config) => {
    if (!dataModel.data[config.coreMapKey]) return;
    const assemblyMap = dataModel.data[config.coreMapKey][config.index];
    // const title = assemblyMap.coreMapInfo.title.value[0];
    let labeledMap = null;
    let symmetry = 'none';
    if (config.type === 'label') {
      labeledMap = getCrdBankMap(assemblyMap);
      if (labeledMap) {
        const newMap = {
          cell_map: labeledMap,
        };
        InpHelper.setSymmetry(newMap, {
          numPins: Math.sqrt(labeledMap.length),
        });
        symmetry = newMap.symmetry;
      }
    } else {
      const itemMap = assemblyMap.coreMap.map.value[0];
      symmetry = itemMap.symmetry;
      const usedAssemblies = extractUsedItems(itemMap);
      const rodMaps = dataModel.data.Maps;
      let emptyMap = true;
      rodMaps.forEach((map) => {
        if (usedAssemblies[map.id]) {
          const mapType = map.mapInfo.type.value[0];
          // convert to a lookup.
          // control/insert needs to filter the other types of rod out.
          usedAssemblies[map.id] = mapType === config.type ? map.name : '-';
          if (mapType === config.type) emptyMap = false;
        }
      });
      if (emptyMap) return;

      usedAssemblies[+itemMap.emptyItem] = '-';
      labeledMap = itemMap.grid.map((id) => {
        const name = usedAssemblies[+id];
        return name !== undefined ? name : '-';
      });
    }
    if (!labeledMap) return;
    // assembly map is first,
    // defines the core_shape map. Always saved without symmetry.
    if (!coreShape) {
      coreShape = InpHelper.getCoreShape([{ cell_map: labeledMap }]);
      model.core.core_shape = getSymmetricMap(
        coreShape.cell_map,
        InpHelper.SymmetryModes.NONE
      );
      coreTextMaps[InpHelper.SymmetryModes.NONE] = model.core.core_shape;
    }

    if (!coreTextMaps[symmetry]) {
      coreTextMaps[symmetry] = getSymmetricMap(coreShape.cell_map, symmetry);
    }
    model.core[config.coreMapName] = getStrippedSymmetricMap(
      labeledMap,
      symmetry,
      coreTextMaps[symmetry]
    );
  });
}
function fillMaterials(model, dataModel) {
  const matSpec = dataModel.data.Materials;
  if (!matSpec || !matSpec.length) return;
  const materials = matSpec.map((item) => {
    const spec = item.material;
    const mat = {
      name: spec.name.value[0],
      density: spec.density.value[0],
    };
    if (!mat.name || !mat.density) return null;
    // thermal expansion, option, zero not valid.
    if (spec.thexp && spec.thexp.value[0]) {
      mat.thexp = spec.thexp.value[0];
    }
    if (spec.fractions && spec.fractions.value.length) {
      mat.fractions = [];
      spec.fractions.value.forEach((frac) => {
        mat.fractions.push(frac.name);
        if (frac.value) mat.fractions.push(frac.value);
      });
    }
    return mat;
  });
  model.core.materials = materials;
}

// Fuels are specific to the assembly block.
function fillFuels(model, dataModel, block) {
  const fueLspec = dataModel.data.Fuels;
  if (!fueLspec || !fueLspec.length) return;
  const fuels = fueLspec.map((item) => {
    const spec = item.fuel;
    const fuel = {
      name: spec.name.value[0],
      density: spec.density.value[0],
      thden: spec.thden.value[0],
      u235_enrichment: spec.u235_enrichment.value[0],
    };
    if (!fuel.name || !fuel.density || !fuel.thden || !fuel.u235_enrichment)
      return null;
    // gadolina oxide, option, zero not valid.
    if (
      spec.gad_material &&
      spec.gad_material.value[0] &&
      spec.gad_fraction &&
      spec.gad_fraction.value[0]
    ) {
      fuel.gad_material = materialIdToName(dataModel, spec.gad_material.value[0]);
      fuel.gad_fraction = spec.gad_fraction.value[0];
    }
    if (spec.enrichments && spec.enrichments.value.length) {
      fuel.enrichments = spec.enrichments.value.slice();
    }
    return fuel;
  });
  block.fuels = fuels.filter((f) => f !== null);
}

function fillCore(model, dataModel) {
  model.core = { cards: [] };
  const { coreSpec } = dataModel.data.Specifications[0];
  const addCard = (dataIn, name, comment = '') => {
    if (dataIn[name] && dataIn[name].value[0]) {
      model.core.cards.push({ name, params: [...dataIn[name].value, comment] });
    }
  };
  // global materials are part of the core section
  fillMaterials(model, dataModel);

  model.core.title = coreSpec.title.value[0];
  model.core.size = coreSpec.grid.value[0];
  model.core.apitch = coreSpec.apitch.value[0];
  model.core.height = coreSpec.height.value[0];
  addCard(coreSpec, 'reactor_type');
  addCard(coreSpec, 'rated');
  if (dataModel.data.CoreDefinition) {
    const {
      coreAdvancedSpec: advSpec,
      baffleSpec,
      padSpec,
      lowerPlateSpec,
      upperPlateSpec,
      vesselSpec,
    } = dataModel.data.CoreDefinition[0];
    addCard(advSpec, 'rcs_volume');
    addCard(advSpec, 'op_date');
    addCard(advSpec, 'unit');
    addCard(advSpec, 'cycle');
    addCard(advSpec, 'hole');
    addCard(advSpec, 'bc_sym', '   ! mir, rot');
    addCard(advSpec, 'bc_bot', '   ! reflecting, vacuum');
    addCard(advSpec, 'bc_top', '   ! reflecting, vacuum');
    addCard(advSpec, 'bc_rad', '   ! reflecting, vacuum');
    addCard(advSpec, 'label_format', '   ! x-y, y-x');
    addCard(advSpec, 'xlabel');
    addCard(advSpec, 'ylabel');
    addCard(advSpec, 'upper_ref');
    addCard(advSpec, 'lower_ref');
    addCard(advSpec, 'rotate_map');

    if (baffleSpec.thick.value[0] > 0) {
      model.core.baffle = [
        materialIdToName(dataModel, baffleSpec.material.value[0]),
        baffleSpec.gap.value[0],
        baffleSpec.thick.value[0],
      ];
    }
    if (
      padSpec.params.value[0] > 0 &&
      padSpec.params.value[1] > 0 &&
      padSpec.params.value[2] > 0
    ) {
      model.core.pad = [
        materialIdToName(dataModel, padSpec.material.value[0]),
      ].concat(padSpec.params.value, padSpec.positions.value);
    }
    if (lowerPlateSpec.thick.value[0] > 0) {
      model.core.lower_plate = [
        materialIdToName(dataModel, lowerPlateSpec.material.value[0]),
        lowerPlateSpec.thick.value[0],
        lowerPlateSpec.volfrac.value[0],
      ];
    }
    if (upperPlateSpec.thick.value[0] > 0) {
      model.core.upper_plate = [
        materialIdToName(dataModel, upperPlateSpec.material.value[0]),
        upperPlateSpec.thick.value[0],
        upperPlateSpec.volfrac.value[0],
      ];
    }
    if (vesselSpec.cell.value[0].radii.length) {
      model.core.vessel = [];
      const spec = vesselSpec.cell.value[0];
      spec.radii.forEach((radius, index) => {
        model.core.vessel.push(materialIdToName(dataModel, spec.mats[index]));
        model.core.vessel.push(radius);
      });
    }
  }
  fillCoreMaps(model, dataModel);
}

function getLatticeMaps(name, rodMap, usedRods, usedCellMap) {
  const lattices = [];
  let elevations = [];

  // extract elevations from each used rod
  usedRods.forEach((rod) => {
    let currentHeight = rod.rodInfo.offset.value[0];
    elevations.push(currentHeight);
    rod.rodStack.rod.value[0].stack.forEach((item) => {
      currentHeight += item.length;
      elevations.push(currentHeight);
    });
  });

  elevations.sort((a, b) => a - b);
  elevations = elevations.filter((v, i, a) => a[i - 1] !== v);

  // for each rod at each elevation, save which cell name it contains.
  const elevationCellMaps = elevations.map(() => ({}));
  usedRods.forEach((rod) => {
    let currentHeight = rod.rodInfo.offset.value[0];
    let currIndex = 0;
    while (elevations[currIndex] < currentHeight) currIndex += 1;
    rod.rodStack.rod.value[0].stack.forEach((item) => {
      currentHeight += item.length;
      while (elevations[currIndex] < currentHeight) {
        elevationCellMaps[currIndex][rod.id] = usedCellMap[+item.cell];
        currIndex += 1;
      }
    });
  });
  // console.log(elevationCellMaps);

  // each elevation range with cells is a lattice map, referencing cells.
  for (let i = 0; i < elevations.length - 1; i++) {
    // rodMap.grid contains a full-size array of the map, with rod IDs
    // rodMap.symmetry can be used to cut it down for output.
    const cellMap = rodMap.grid.map((id) => {
      const cell = elevationCellMaps[i][+id];
      return cell !== undefined ? cell : '-';
    });
    lattices.push({
      name: `${name}${i}`,
      cellMap: getSymmetricMap(cellMap, rodMap.symmetry),
    });
  }

  return { lattices, elevations };
}

// each rodmap represents a single axial card, comprised of several lattice maps.
function fillAssemblyMap(model, dataModel, map, config) {
  const { type } = config;
  // given a map, get used fuels, cells, rods
  const usedRodMap = extractUsedItems(map.rodMap.map.value[0]);
  // console.log('rods', usedRodMap);
  const rods = dataModel.data.Rods;
  const cells = dataModel.data.Cells;
  const usedRods = rods.filter((rod) => usedRodMap[rod.id]);
  const usedCellMap = extractUsedCells(usedRods);
  // console.log('cells', usedCellMap);
  const usedCells = cells.filter((cell) => usedCellMap[cell.id]);
  // use for name lookup.
  usedCells.forEach((cell) => {
    usedCellMap[cell.id] = cell.name;
  });
  model[type].cells = usedCells.map((item) => ({
    name: item.name,
    radii: item.cell.cell.value[0].radii,
    mats: item.cell.cell.value[0].mats.map((id) =>
      materialIdToName(dataModel, id)
    ),
  }));

  // extract a lattice for each layer in the rods
  const { lattices, elevations } = getLatticeMaps(
    map.name,
    map.rodMap.map.value[0],
    usedRods,
    usedCellMap
  );
  model[type].lattices = model[type].lattices.concat(lattices);
  const elevationMats = [];
  for (let i = 0; i < elevations.length; ++i) {
    elevationMats.push(elevations[i]);
    if (lattices[i]) elevationMats.push(lattices[i].name);
  }
  model[type].axials.push({ name: map.name, elevationMats });

  // specific to assembly maps.
  if (map.lowerNozzleSpec && map.lowerNozzleSpec.height.value[0] > 0) {
    model[type].lower_nozzle = [
      materialIdToName(dataModel, map.lowerNozzleSpec.material.value[0]),
      map.lowerNozzleSpec.height.value[0],
      map.lowerNozzleSpec.mass.value[0],
    ];
  }
  if (map.upperNozzleSpec && map.upperNozzleSpec.height.value[0] > 0) {
    model[type].upper_nozzle = [
      materialIdToName(dataModel, map.upperNozzleSpec.material.value[0]),
      map.upperNozzleSpec.height.value[0],
      map.upperNozzleSpec.mass.value[0],
    ];
  }
}

function fillAssembly(model, dataModel, config) {
  const { type, coreMapKey, index } = config;
  if (type === 'label') return;
  const newAssem = {};
  const assemblySpec = dataModel.data.Specifications[0].assemblySpec;
  newAssem.npin = assemblySpec.grid.value[0];
  newAssem.ppitch = assemblySpec.pitch.value[0];

  // grab the core map, see which assemblies are used
  if (dataModel.data[coreMapKey] && dataModel.data.Maps) {
    const assemblyMap = dataModel.data[coreMapKey][index];
    newAssem.title = assemblyMap.coreMapInfo.title.value[0];
    const coreMap = assemblyMap.coreMap.map.value[0];
    const usedAssemblies = extractUsedItems(coreMap);
    // empty map means no section.
    if (Object.keys(usedAssemblies).length === 0) return;
    model[type] = newAssem;
    const rodMaps = dataModel.data.Maps;
    model[type].lattices = [];
    model[type].axials = [];
    rodMaps.forEach((map) => {
      if (usedAssemblies[map.id]) {
        fillAssemblyMap(model, dataModel, map, config);
      }
    });
    if (type === 'assembly') {
      fillFuels(model, dataModel, model[type]);
    }
  }
}

function fillState(model, dataModel) {
  model.states = [];
  const stateList = dataModel.data.States;
  if (!dataModel.data.StateInitialization) return;
  const stateInit = dataModel.data.StateInitialization[0].stateInit;
  stateList.forEach((item, i) => {
    const info = item.stateInfo;
    const labelPos = item.stateLabelPositions;
    if (!info) return;
    const state = { cards: [], cardsWithZero: [] };
    const addCard = (dataIn, name, comment = '') => {
      if (dataIn[name] && dataIn[name].value[0]) {
        state.cards.push({ name, params: [...dataIn[name].value, comment] });
      }
    };
    const addCardZero = (dataIn, name, units = '', comment = '') => {
      if (
        dataIn[name] &&
        dataIn[name].value[0] !== undefined &&
        (!units || (dataIn[units] && dataIn[units].value[0] !== undefined))
      ) {
        // allow multiple values.
        const params = [...dataIn[name].value];
        if (units) params.push(...dataIn[units].value);
        if (comment) params.push(comment);
        state.cardsWithZero.push({
          name,
          params,
        });
      }
    };
    if (i === 0) {
      // title is separate because it needs quotes
      if (stateInit.title.value[0]) state.title = stateInit.title.value[0];
      addCard(stateInit, 'sym', '   ! qtr/full symmetry');
      addCard(stateInit, 'feedback');
      addCard(stateInit, 'xenon');
      addCard(stateInit, 'samar');
      addCard(stateInit, 'thexp');
      addCardZero(stateInit, 'thexp_tfuel', 'thexp_tfuel_units', '   ! K/C/F');
      addCardZero(stateInit, 'thexp_tclad', 'thexp_tclad_units', '   ! K/C/F');
      addCardZero(stateInit, 'thexp_tmod', 'thexp_tmod_units', '   ! K/C/F');
    }
    addCardZero(info, 'pressure', '', '   ! psia');
    // 0 is a valid power
    addCardZero(info, 'power', '', '   ! % rated');
    addCardZero(info, 'flow', '', '   ! % rated');
    addCardZero(info, 'bypass', '', '   ! % rated');
    addCardZero(info, 'tinlet', 'tinlet_units', '   ! K/C/F');
    addCardZero(info, 'tfuel', 'tfuel_units', '   ! K/C/F');
    addCard(info, 'modden', '   ! g/cc');
    addCard(info, 'rlx_xesm');
    addCard(info, 'boron', '   ! ppm');
    addCardZero(info, 'b10', 'b10_depl', '   ! atom percent, on/off');
    addCard(info, 'search', '   ! keff or boron');
    addCard(info, 'search_bank');
    addCard(info, 'kcrit', '   ! eigenvalue for boron search');
    // deplete, edit, restart_shuffle can have multiple values.
    addCardZero(info, 'deplete', 'deplete_vals');
    addCard(info, 'edit');
    // addCard(info, 'restart_shuffle');
    // custom handling for ui: map
    if (info.restart_shuffle && info.restart_shuffle.value[0]) {
      const val = info.restart_shuffle.value;
      const params = [];
      info.restart_shuffle.value.forEach((val) => {
        params.push(val.name, val.value);
      });
      state.cards.push({
        name: 'restart_shuffle',
        params,
      });
    }
    addCard(info, 'restart_write');
    addCard(info, 'restart_read');

    if (labelPos && labelPos.rodbank.value[0]) {
      // a list of label, position pairs.
      const vals = labelPos.rodbank.value[0];
      const rodbank = [];
      Object.keys(vals).forEach((label) => {
        rodbank.push(label);
        rodbank.push(vals[label]);
      });
      if (rodbank.length) state.rodbank = rodbank;
    }

    // did we find anything?
    if (
      Object.keys(state).length > 2 ||
      state.cards.length ||
      state.cardsWithZero.length
    ) {
      model.states.push(state);
    }
  });
}

module.exports = function convert(dataModel) {
  const results = {};
  const model = {};
  fillCore(model, dataModel);
  mapConfig.forEach((config) => fillAssembly(model, dataModel, config));
  fillState(model, dataModel);
  fillSimulations(model, dataModel);

  results['simput.inp'] = inpTemplate(model);
  return { results, model: dataModel };
};
