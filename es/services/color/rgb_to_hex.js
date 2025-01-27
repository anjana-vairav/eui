function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asHex(value) {
  var hex = parseInt(value, 10).toString(16);
  return hex.length === 1 ? "0".concat(hex) : hex;
}

export function rgbToHex(rgb) {
  var withoutWhitespace = rgb.replace(/\s+/g, '');
  var rgbMatch = withoutWhitespace.match(/^rgba?\((\d+),(\d+),(\d+)(?:,(?:1(?:\.0*)?|0(?:\.\d+)?))?\)$/i);

  if (!rgbMatch) {
    return '';
  }

  var _rgbMatch = _slicedToArray(rgbMatch, 4),
      r = _rgbMatch[1],
      g = _rgbMatch[2],
      b = _rgbMatch[3];

  return "#".concat(asHex(r)).concat(asHex(g)).concat(asHex(b));
}