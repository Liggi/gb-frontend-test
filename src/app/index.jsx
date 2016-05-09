import React from 'react';
import { render } from 'react-dom';
import GeckoOMeter from './components/GeckoOMeter';
import meterData from './modules/gecko-o-meter-api.js';

class App extends React.Component {
  render() {
    return (
      <GeckoOMeter dataSource={meterData.get} />
    );
  }
}

render(<App/>, document.getElementById('app'));
