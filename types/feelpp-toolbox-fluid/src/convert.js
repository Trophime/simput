
/*const simputConvert = require('/Users/chabannes/test_simput/simput/bin/runtime-utils');
const output = {};
output['data.json'] = (m) => JSON.stringify(m, null, 2);
module.exports = function(dataModel) {
const mapping = {};
return simputConvert(dataModel, mapping, output);
};
*/

console.log('Feelpp-toolbox-fluid', 'convert.js');

var template = require('./templates/cfg.hbs');

function initJsonSection( section, subsection, jsonInOut )
{
    if ( !jsonInOut[section] )
        jsonInOut[section] = {};
    if ( !jsonInOut[section][subsection] )
        jsonInOut[section][subsection] = {};
}

function displayField(item, fieldName)
{
    const value = attributes.models[fieldName].value;
    if (value.length === 1) {
	model_attr[fieldName] = value[0];
    } else {
	model_attr[fieldName] = value;
    }
}

function displayAttributes(item)
{
    console.log('displayAttributes:')
    console.log(item)
    // const model_att = {};
    Object.keys(item).forEach((fieldName) => {
	const value = item[fieldName].value;
	console.log('fieldName:', fieldName);
	console.log('value:', value);
	// if (value.length === 1) {
	//     model_attr[fieldName] = value[0];
	// } else {
	//     model_attr[fieldName] = value;
	// }
    });
    // console.log(model_attr);
}

module.exports = function(dataModel) {

    //const output = {};
    //output['myvvdata.json'] = (m) => JSON.stringify(m, null, 2);

    console.log('dataModel:' + JSON.stringify(dataModel) );
    console.dir(dataModel, {depth: null, colors: true});

    //var mjson = { models: { name:dataModel.data.models[0].models.name.value[0] } };
    if ( dataModel.data.discretization )
    {
	console.log('dataModel.data.discretization:');
	console.log(dataModel.data.discretization);
	console.log('dataModel.data.discretization attributes');
	dataModel.data.models.forEach(displayAttributes);	
    }
    if ( dataModel.data.models )
    {
	console.log('dataModel.data.models:')
	console.log(dataModel.data.discretization);
	console.log('dataModel.data.models attributes');
	dataModel.data.models.forEach(displayAttributes);	
    }
    
    var jsonSectionModels = {};
    if ( dataModel.data.models )
    {
        jsonSectionModels.equations = dataModel.data.models[0].models.name.value[0];
    }
    else
        jsonSectionModels.equations = "Navier-Stokes";
    console.log('jsonSectionModels:', jsonSectionModels);

    var jsonSectionParameters = {};
    if ( dataModel.data.parameters ) {
        for (let i = 0; i < dataModel.data.parameters.length; i++) {
            const paramList = dataModel.data.parameters[i].parameters['parameters.map'].value;
            for ( let j = 0; j < paramList.length; j++ ) {
                jsonSectionParameters[paramList[j].name] = paramList[j].value;
            }
        }
    }
    console.log('jsonSectionParameters:', jsonSectionParameters);
    
    var jsonSectionMaterials = {};
    if ( dataModel.data.materials ) {
        for (let i = 0; i < dataModel.data.materials.length; i++) {
            if ( !dataModel.data.materials[i].name )
                continue;
            const matView = dataModel.data.materials[i];
            const matName = matView.name;
            const matPropertiesObject = matView.materials_properties;
            var jsonCurrentMaterial = {}
            if ( matPropertiesObject.density && matPropertiesObject.density.value.length )
                jsonCurrentMaterial.rho = matPropertiesObject.density.value[0];

            if ( matPropertiesObject.viscosity_law && matPropertiesObject.viscosity_law.value.length )
            {
                const viscosityLaw = matPropertiesObject.viscosity_law.value[0];
                if ( viscosityLaw === "newtonian" && matView.materials_viscosity_newtonian )
                {
                    const viscosityNewtonian = matView.materials_viscosity_newtonian;
                    if ( viscosityNewtonian.mu && viscosityNewtonian.mu.value.length )
                        jsonCurrentMaterial.mu = viscosityNewtonian.mu.value[0];
                }
            }

            jsonSectionMaterials[matName] = jsonCurrentMaterial;        
        }
    }
    console.log('jsonSectionMaterials:', jsonSectionMaterials);

    var jsonSectionBoundaryConditions = {};
    if ( dataModel.data.boundaryconditions ) {
        for (let i = 0; i < dataModel.data.boundaryconditions.length; i++) {
            const bcView = dataModel.data.boundaryconditions[i];
            if ( !bcView.name )
                continue;
            const bcName = bcView.name;
            const bcType = bcView.boundaryconditions.type.value[0];
            if ( bcType === "Velocity_Imposed" && bcView.boundaryconditions_velocityImposed )
            {
                const bcVelocityImposed = bcView.boundaryconditions_velocityImposed;
                if ( !bcVelocityImposed.expr.value[0] )
                    continue;
                var jsonCurrentBC = {};
                jsonCurrentBC.expr = bcVelocityImposed.expr.value[0];

                initJsonSection("velocity","Dirichlet",jsonSectionBoundaryConditions);
                jsonSectionBoundaryConditions["velocity"]["Dirichlet"][bcName] = jsonCurrentBC;
            }
            else if ( bcType === "Inlet" && bcView.boundaryconditions_inlet )
            {

            }
            else if ( bcType === "Outlet" && bcView.boundaryconditions_outlet )
            {
                const bcOutlet = bcView.boundaryconditions_outlet;
                if ( bcOutlet.model.value[0] === "Free" )
                {
                    var jsonCurrentBC = { "model":"free","expr":"0" };
                    initJsonSection("fluid","outlet",jsonSectionBoundaryConditions);
                    jsonSectionBoundaryConditions["fluid"]["outlet"][bcName] = jsonCurrentBC;
                }
                else if ( bcOutlet.model.value[0] === "Windkessel" && bcView.boundaryconditions_outlet_windkessel )
                {
                    var jsonCurrentBC = { "model":"windkessel" }
                    const bcOutletWindkessel = bcView.boundaryconditions_outlet_windkessel;
                    jsonCurrentBC["windkessel_Rd"] = bcOutletWindkessel.Rd.value[0];
                    jsonCurrentBC["windkessel_Rp"] = bcOutletWindkessel.Rp.value[0];
                    jsonCurrentBC["windkessel_Cd"] = bcOutletWindkessel.Cd.value[0];
                    jsonCurrentBC["windkessel_coupling"] = bcOutletWindkessel.coupling.value[0];

                    initJsonSection("fluid","outlet",jsonSectionBoundaryConditions);
                    jsonSectionBoundaryConditions["fluid"]["outlet"][bcName] = jsonCurrentBC;
                }
            }
        }
    }
    console.log('jsonBoundaryConditions:', jsonSectionBoundaryConditions);

    var jsonSectionPostProcess = {};

    
    var jsonAllSections =  { Models:jsonSectionModels,
                             Parameters:jsonSectionParameters,
                             Materials:jsonSectionMaterials,
                             BoundaryConditions:jsonSectionBoundaryConditions,
                             PostProcess:jsonSectionPostProcess
                           } ;
    
    console.log('jsonAllSections:', jsonAllSections);
    console.log('output cfg:', template({ models: { name:jsonSectionModels.equations } }) );
    console.log('output json:', JSON.stringify(jsonAllSections, null, 2) );

    
    return {
        errors: null,//templateData.errors,
        model: dataModel,
        results: {
            'fluid.cfg': template({ models: { name:jsonSectionModels.equations } } ),
            'fluid.json':JSON.stringify(jsonAllSections, null, 2)
        }
    }
}
