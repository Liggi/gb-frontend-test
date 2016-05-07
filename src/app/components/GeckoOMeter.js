import React from 'react';

class GeckoOMeter extends React.Component {
  render() {
    return (
      <div className="gecko-o-meter">
        <span className="gecko-o-meter__needle"></span>
        <span className="gecko-o-meter__current-value"></span>
        <span className="gecko-o-meter__min-value"></span>
        <span className="gecko-o-meter__max-value"></span>
      </div>
    );
  }

}

export default GeckoOMeter;
