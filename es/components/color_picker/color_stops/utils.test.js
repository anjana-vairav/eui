import { addStop, addDefinedStop, removeStop, isInvalid } from './utils';
var colorStops = [{
  stop: 0,
  color: '#FF0000'
}, {
  stop: 25,
  color: '#00FF00'
}, {
  stop: 35,
  color: '#0000FF'
}];
describe('isInvalid', function () {
  test('Should not mark valid colorStops as invalid', function () {
    expect(isInvalid(colorStops)).toBe(false);
  });
  test('Should mark colorStops missing color as invalid', function () {
    var colorStops = [{
      stop: 0,
      color: ''
    }];
    expect(isInvalid(colorStops)).toBe(true);
  });
  test('Should mark colorStops with invalid color as invalid', function () {
    var colorStops = [{
      stop: 0,
      color: 'not color'
    }];
    expect(isInvalid(colorStops)).toBe(true);
  });
  test('Should mark colorStops missing stop as invalid', function () {
    var colorStops = [{
      stop: null,
      color: '#FF0000'
    }]; // Intentionally wrong
    // @ts-ignore

    expect(isInvalid(colorStops)).toBe(true);
  });
  test('Should mark colorStops with invalid stop as invalid', function () {
    var colorStops = [{
      stop: 'I am not a number',
      color: '#FF0000'
    }]; // Intentionally wrong
    // @ts-ignore

    expect(isInvalid(colorStops)).toBe(true);
  });
});
describe('addStop', function () {
  test('Should add stop when there is only a single stop', function () {
    var colorStops = [{
      stop: 0,
      color: '#FF0000'
    }];
    expect(addStop(colorStops, '#FF0000', 100)).toEqual([{
      stop: 0,
      color: '#FF0000'
    }, {
      stop: 1,
      color: '#FF0000'
    }]);
  });
  test('Should add stop to end of list', function () {
    expect(addStop(colorStops, '#FF0000', 100)).toEqual([{
      stop: 0,
      color: '#FF0000'
    }, {
      stop: 25,
      color: '#00FF00'
    }, {
      stop: 35,
      color: '#0000FF'
    }, {
      stop: 45,
      color: '#FF0000'
    }]);
  });
  test('Should add stop below the max if max is taken', function () {
    expect(addStop([{
      stop: 0,
      color: '#FF0000'
    }, {
      stop: 100,
      color: '#FF0000'
    }], '#FF0000', 100)).toEqual([{
      stop: 0,
      color: '#FF0000'
    }, {
      stop: 100,
      color: '#FF0000'
    }, {
      stop: 99,
      color: '#FF0000'
    }]);
  });
});
describe('addDefinedStop', function () {
  var colorStops = [{
    stop: 0,
    color: '#FF0000'
  }];
  test('Should add stop', function () {
    expect(addDefinedStop(colorStops, 1)).toEqual([{
      stop: 0,
      color: '#FF0000'
    }, {
      stop: 1,
      color: '#3185FC'
    }]);
  });
  test('Should add stop with a specified color', function () {
    expect(addDefinedStop(colorStops, 1, '#FFFFFF')).toEqual([{
      stop: 0,
      color: '#FF0000'
    }, {
      stop: 1,
      color: '#FFFFFF'
    }]);
  });
});
describe('removeStop', function () {
  test('Should not remove only stop', function () {
    var colorStops = [{
      stop: 0,
      color: '#FF0000'
    }];
    expect(removeStop(colorStops, 0)).toEqual(colorStops);
  });
  test('Should remove stop at index', function () {
    var colorStops = [{
      stop: 0,
      color: '#FF0000'
    }, {
      stop: 25,
      color: '#00FF00'
    }, {
      stop: 35,
      color: '#0000FF'
    }];
    expect(removeStop(colorStops, 1)).toEqual([{
      stop: 0,
      color: '#FF0000'
    }, {
      stop: 35,
      color: '#0000FF'
    }]);
  });
});