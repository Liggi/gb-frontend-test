jest.unmock('../src/app/components/GeckoOMeter');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import GeckoOMeter from '../src/app/components/GeckoOMeter';

function has_child_with_class(children, className) {
  return children.some(c => c.props.className == className);
}

describe('Gecko-O-Meter',() => {
  let mockPromise = new Promise(function(resolve, reject) {
    resolve({ value: 10, min: 1, max: 20 });
  });

  let mockData = jest.genMockFunction().mockReturnValue(mockPromise);

  let component = (<GeckoOMeter dataSource={mockData} />);
  let result;
 
  beforeEach(() => {
    let shallowRenderer = TestUtils.createRenderer();
    shallowRenderer.render(component);
    result = shallowRenderer.getRenderOutput();
  });

  it('should exist', () => {
    expect(result.props.className).toEqual('gecko-o-meter');
  });

  it('has markup for dial', () => {
    expect(has_child_with_class(result.props.children, "gecko-o-meter__semi-circle")).toBeTruthy();
  });

  it('has markup for a current value', () => {
    expect(has_child_with_class(result.props.children, "gecko-o-meter__current-value")).toBeTruthy();
  });

  it('has markup for a min value', () => {
    expect(has_child_with_class(result.props.children, "gecko-o-meter__min-value")).toBeTruthy();
  });

  it('has markup for a max value', () => {
    expect(has_child_with_class(result.props.children, "gecko-o-meter__max-value")).toBeTruthy();
  });

  it('has markup for a refresh button', () => {
    expect(has_child_with_class(result.props.children, "gecko-o-meter__refresh")).toBeTruthy();
  });

  pit('sets values', (done) => {
    let meter = TestUtils.renderIntoDocument(component);
    let renderedDom = ReactDOM.findDOMNode(meter);

    return (new Promise(function(resolve) { resolve(); }).then(function () {
      expect(mockData.mock.calls.length).toBe(1);

      expect(meter.state.current_value).toBe(10);
      expect(meter.state.min_value).toBe(1);
      expect(meter.state.max_value).toBe(20);

      let current_value = renderedDom.querySelectorAll('.gecko-o-meter__current-value')[0].textContent,
          min_value = renderedDom.querySelectorAll('.gecko-o-meter__min-value')[0].textContent,
          max_value = renderedDom.querySelectorAll('.gecko-o-meter__max-value')[0].textContent;

      expect(current_value).toBe('£10');
      expect(min_value).toBe('£1');
      expect(max_value).toBe('£20');
    }));
  });

  pit('has a needle angled correctly on the dial', (done) => {
    let meter = TestUtils.renderIntoDocument(component);
    let renderedDom = ReactDOM.findDOMNode(meter);

    return (new Promise(function(resolve) { resolve(); }).then(function () {
      let needle = renderedDom.querySelectorAll('.gecko-o-meter__needle')[0];
      let transform_angle = needle.style.transform;

      expect(needle.style.transform).toBe('rotate(85deg)');
    }));

  });
});
