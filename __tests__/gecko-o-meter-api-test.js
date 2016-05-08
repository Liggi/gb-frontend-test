jest.unmock('../src/app/modules/gecko-o-meter-api.js');

import meterData from '../src/app/modules/gecko-o-meter-api.js';

describe('Gecko-O-Meter API',() => {

  pit('should return data', () => {
    return meterData.get().then(function (data) {
      expect(data).not.toBe(null);
    });
  });


});
