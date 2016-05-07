jest.unmock('../src/app/components/GeckoOMeter');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import GeckoOMeter from '../src/app/components/GeckoOMeter';

describe('Gecko-O-Meter',() => {
  let component = (<GeckoOMeter />);
  let result;
 
  beforeEach(() => {
    let shallowRenderer = TestUtils.createRenderer();
    shallowRenderer.render(component);
    result = shallowRenderer.getRenderOutput();
  });

  it('should exist', () => {
    expect(result.props.className).toEqual('gecko-o-meter');
  });

});
