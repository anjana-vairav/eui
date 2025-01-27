import { Comparators } from './comparators';
import { Random } from '../random';
import { SortDirection } from './sort_direction';
describe('comparators - default', function () {
  test('asc', function () {
    expect(Comparators.default(SortDirection.ASC)(5, 10)).toBeLessThan(0);
  });
  test('desc', function () {
    expect(Comparators.default(SortDirection.DESC)(5, 10)).toBeGreaterThan(0);
  });
  test('asc/desc when the two values equal', function () {
    var dir = new Random().oneOf([SortDirection.ASC, SortDirection.DESC]);
    expect(Comparators.default(dir)(5, 5)).toBe(0);
  });
});
describe('comparators - reverse', function () {
  var comparator = jest.fn();
  test('proper delegation to provided comparator', function () {
    var reverseComparator = Comparators.reverse(comparator);
    reverseComparator('v1', 'v2');
    expect(comparator.mock.calls.length).toBe(1);
    expect(comparator.mock.calls[0][0]).toBe('v2');
    expect(comparator.mock.calls[0][1]).toBe('v1');
  });
});
describe('comparators - property', function () {
  test('proper delegation to provided comparator', function () {
    var comparator = jest.fn();
    var propComparator = Comparators.property('name', comparator);
    propComparator({
      name: 'n1'
    }, {
      name: 'n2'
    });
    expect(comparator.mock.calls.length).toBe(1);
    expect(comparator.mock.calls[0][0]).toBe('n1');
    expect(comparator.mock.calls[0][1]).toBe('n2');
  });
  test('resolving nested props', function () {
    var comparator = jest.fn();
    var propComparator = Comparators.property('person.name', comparator);
    propComparator({
      person: {
        name: 'n1'
      }
    }, {
      person: {
        name: 'n2'
      }
    });
    expect(comparator.mock.calls.length).toBe(1);
    expect(comparator.mock.calls[0][0]).toBe('n1');
    expect(comparator.mock.calls[0][1]).toBe('n2');
  });
});
describe('default comparator', function () {
  test('null/undefined values are sorted to the end', function () {
    var sorted = [undefined, '7', 3, null, 5, undefined].sort(Comparators.default());
    expect(sorted).toEqual([3, 5, '7', null, undefined, undefined]);
  });
});