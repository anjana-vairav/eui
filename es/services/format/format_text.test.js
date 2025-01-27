import { formatText } from './format_text';
describe('formatText', function () {
  test('no config - not nil value', function () {
    expect(formatText('abc')).toBe('abc');
    expect(formatText(1)).toBe('1');
    var now = Date.now();
    expect(formatText(new Date(now))).toBe(new Date(now).toString());
    expect(formatText({
      /* simple object */
    })).toBe('[object Object]');
  });
  test('no config - nil value', function () {
    expect(formatText()).toBe('');
    expect(formatText(null)).toBe('');
  });
  test('with config - nil value', function () {
    expect(formatText(undefined, {
      nil: '-'
    })).toBe('-');
    expect(formatText(null, {
      nil: '-'
    })).toBe('-');
  });
});