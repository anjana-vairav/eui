"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiRangeSlider = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EuiRangeSlider = (0, _react.forwardRef)(function (_ref, ref) {
  var className = _ref.className,
      disabled = _ref.disabled,
      id = _ref.id,
      max = _ref.max,
      min = _ref.min,
      name = _ref.name,
      step = _ref.step,
      onChange = _ref.onChange,
      tabIndex = _ref.tabIndex,
      value = _ref.value,
      style = _ref.style,
      showTicks = _ref.showTicks,
      showRange = _ref.showRange,
      hasFocus = _ref.hasFocus,
      compressed = _ref.compressed,
      rest = _objectWithoutProperties(_ref, ["className", "disabled", "id", "max", "min", "name", "step", "onChange", "tabIndex", "value", "style", "showTicks", "showRange", "hasFocus", "compressed"]);

  var classes = (0, _classnames.default)('euiRangeSlider', {
    'euiRangeSlider--hasTicks': showTicks,
    'euiRangeSlider--hasFocus': hasFocus,
    'euiRangeSlider--hasRange': showRange,
    'euiRangeSlider--compressed': compressed
  }, className);
  return _react.default.createElement("input", _extends({
    ref: ref,
    type: "range",
    id: id,
    name: name,
    className: classes,
    min: min,
    max: max,
    step: step,
    value: value,
    disabled: disabled,
    onChange: onChange,
    style: style,
    tabIndex: tabIndex
  }, rest));
});
exports.EuiRangeSlider = EuiRangeSlider;
EuiRangeSlider.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,
  id: _propTypes.default.string,
  name: _propTypes.default.string,
  min: _propTypes.default.number.isRequired,
  max: _propTypes.default.number.isRequired,
  step: _propTypes.default.number,
  compressed: _propTypes.default.bool,
  hasFocus: _propTypes.default.bool,
  showRange: _propTypes.default.bool,
  showTicks: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  tabIndex: _propTypes.default.number,
  onChange: _propTypes.default.any
};