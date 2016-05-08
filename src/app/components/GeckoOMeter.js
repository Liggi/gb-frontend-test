import React from 'react';
import meterData from '../modules/gecko-o-meter-api.js';

class GeckoOMeter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      current_value: "--",
      min_value: "--",
      max_value: "--",
      needle_css: {}
    };
  }

  _updateCurrentValue(value) {
    this.setState({ current_value: value });
  }

  _updateMinimumValue(value) {
    this.setState({ min_value: value });
  }

  _updateMaximumValue(value) {
    this.setState({ max_value: value });
  }

  _setValues(data) {
    this._updateCurrentValue(data.value);
    this._updateMinimumValue(data.min);
    this._updateMaximumValue(data.max);

    this._setNeedlePosition(data.value, data.min, data.max);
  }

  _setNeedlePosition(value, min, max) {
    let base_max = max - min,
        base_value = value - min,
        degrees = (base_value / base_max) * 180;

    if(degrees < 0)
      degrees = 0;

    if(degrees > 180)
      degrees = 180;

    this.setState({
      needle_css: {
        transform: "rotate(" + degrees + "deg)"
      }
    });
  }

  loadData() {
    let component = this;

    meterData.get().then(function (data) {
      component._setValues(data);
    });
  }

  componentDidMount() {
    this.loadData();
  }

  render() {
    return (
      <div className="gecko-o-meter">
        <span className="gecko-o-meter__current-value">£{ this.state.current_value }</span>

        <div className="gecko-o-meter__semi-circle">
          <div className="gecko-o-meter__needle" style={ this.state.needle_css }></div>
        </div>

        <span className="gecko-o-meter__min-value">£{ this.state.min_value }</span>
        <span className="gecko-o-meter__max-value">£{ this.state.max_value }</span>

        <a onClick={ this.loadData.bind(this) } className="gecko-o-meter__refresh">Refresh</a>
      </div>
    );
  }

}

export default GeckoOMeter;
