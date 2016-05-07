import React from 'react';

class GeckoOMeter extends React.Component {
  render() {
    return (
      <div className="gecko-o-meter">
        <span className="gecko-o-meter__current-value">£0</span>

        <div className="gecko-o-meter__semi-circle">
          <div className="gecko-o-meter__needle"></div>
        </div>

        <span className="gecko-o-meter__min-value">£0</span>
        <span className="gecko-o-meter__max-value">£0</span>

        <a className="gecko-o-meter__refresh">Refresh</a>
      </div>
    );
  }

}

export default GeckoOMeter;
