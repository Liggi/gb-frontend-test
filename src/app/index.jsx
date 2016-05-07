import React from 'react';
import { render } from 'react-dom';
import GeckoOMeter from './components/GeckoOMeter';

class App extends React.Component {
  render() {
    return (
      <div>
        <GeckoOMeter />
        Hello, world!
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
