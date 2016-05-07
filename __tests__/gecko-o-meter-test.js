jest.unmock('../src/app/components/GeckoOMeter');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import GeckoOMeter from '../src/app/components/GeckoOMeter';

function has_child_with_class(children, className) {
  return children.some(c => c.props.className == className);
}

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

  it('have markup for a needle', () => {
    expect(has_child_with_class(result.props.children, "gecko-o-meter__needle")).toBeTruthy();
  });

  it('have markup for a current value', () => {
    expect(has_child_with_class(result.props.children, "gecko-o-meter__current-value")).toBeTruthy();
  });

  it('have markup for a min value', () => {
    expect(has_child_with_class(result.props.children, "gecko-o-meter__min-value")).toBeTruthy();
  });

  it('have markup for a max value', () => {
    expect(has_child_with_class(result.props.children, "gecko-o-meter__max-value")).toBeTruthy();
  });

});
