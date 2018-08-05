import 'normalize.css';

import React from 'react';

import PropertyFactory from 'paraviewweb/src/React/Properties/PropertyFactory';
import Factory from './factory';
import HookManager from './HookManager';
import ListProperty from './CustomWidgets/ListProperty';

/* eslint-disable react/display-name */
/* eslint-disable react/no-multi-comp */
/* eslint-disable max-len */
const CustomFactoryMapping = {
  List: (prop, viewData, onChange) => (
    <ListProperty
      key={prop.data.id}
      data={prop.data}
      ui={prop.ui}
      viewData={viewData}
      show={prop.show}
      onChange={onChange || prop.onChange}
    />
  ),
};

/* eslint-disable import/prefer-default-export */
export function load(url, container) {
  Factory.createViewer(url, (viewer) => {
    if (!viewer) {
      console.log('The metadata format seems to be unsupported.');
      return;
    }

    Factory.createUI(viewer, container);
  });
}

export function updateWidgetMapping(type, reactFn) {
  PropertyFactory.updateWidgetMapping(type, reactFn);
}

export const { applyHook, registerHook } = HookManager;

PropertyFactory.updateWidgetMapping('List', CustomFactoryMapping.List);
