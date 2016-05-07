jest.unmock('../src/app/components/GeckoOMeter');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import GeckoOMeter from '../src/app/components/GeckoOMeter';

let component;

describe('Gecko-O-Meter',() => {

  beforeEach(() => {
    component = TestUtils.renderIntoDocument( <GeckoOMeter /> );
  });

  it('should exist', () => {
    expect(TestUtils.isCompositeComponent(component)).toBeTruthy();
  });

});
