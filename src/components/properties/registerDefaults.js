import CellProperty from 'simput/src/components/properties/CellProperty';
import EnumProperty from 'simput/src/components/properties/EnumProperty';
import CheckboxProperty from 'simput/src/components/properties/CheckboxProperty';
import MapProperty from 'simput/src/components/properties/MapProperty';
import ListProperty from 'simput/src/components/properties/ListProperty';
import ColorProperty from 'simput/src/components/properties/ColorProperty';

export default function registerDefaults(registerFn) {
  registerFn('cell', CellProperty);
  registerFn('enum', EnumProperty);
  registerFn('checkbox', CheckboxProperty);
  registerFn('map', MapProperty);
  registerFn('list', ListProperty);
  registerFn('color', ColorProperty);
}
