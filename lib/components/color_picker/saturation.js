"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiSaturation = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _services = require("../../services");

var _predicate = require("../../services/predicate");

var _accessibility = require("../accessibility");

var _i18n = require("../i18n");

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EuiSaturation = (0, _react.forwardRef)(function (_ref, ref) {
  var className = _ref.className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? {
    h: 1,
    s: 0,
    v: 0
  } : _ref$color,
      _ref$dataTestSubj = _ref['data-test-subj'],
      dataTestSubj = _ref$dataTestSubj === void 0 ? 'euiSaturation' : _ref$dataTestSubj,
      hex = _ref.hex,
      id = _ref.id,
      onChange = _ref.onChange,
      _ref$tabIndex = _ref.tabIndex,
      tabIndex = _ref$tabIndex === void 0 ? 0 : _ref$tabIndex,
      rest = _objectWithoutProperties(_ref, ["className", "color", "data-test-subj", "hex", "id", "onChange", "tabIndex"]);

  var _useState = (0, _react.useState)({
    left: 0,
    top: 0
  }),
      _useState2 = _slicedToArray(_useState, 2),
      indicator = _useState2[0],
      setIndicator = _useState2[1];

  var _useState3 = (0, _react.useState)({}),
      _useState4 = _slicedToArray(_useState3, 2),
      lastColor = _useState4[0],
      setlastColor = _useState4[1];

  var boxRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    // Mimics `componentDidMount` and `componentDidUpdate`
    var s = color.s,
        v = color.v;

    if (!(0, _predicate.isNil)(boxRef.current) && Object.values(lastColor).join() !== Object.values(color).join()) {
      var _boxRef$current$getBo = boxRef.current.getBoundingClientRect(),
          height = _boxRef$current$getBo.height,
          width = _boxRef$current$getBo.width;

      setIndicator({
        left: s * width,
        top: (1 - v) * height
      });
    }
  }, [color, lastColor]);

  var calculateColor = function calculateColor(_ref2) {
    var top = _ref2.top,
        height = _ref2.height,
        left = _ref2.left,
        width = _ref2.width;
    var h = color.h;
    var s = left / width;
    var v = 1 - top / height;
    return {
      h: h,
      s: s,
      v: v
    };
  };

  var handleUpdate = function handleUpdate(box) {
    var left = box.left,
        top = box.top;
    setIndicator({
      left: left,
      top: top
    });
    var newColor = calculateColor(box);
    setlastColor(newColor);
    onChange(newColor);
  };

  var handleChange = function handleChange(location) {
    if ((0, _predicate.isNil)(boxRef) || (0, _predicate.isNil)(boxRef.current)) {
      return;
    }

    var box = (0, _utils.getEventPosition)(location, boxRef.current);
    handleUpdate(box);
  };

  var _useMouseMove = (0, _utils.useMouseMove)(handleChange, boxRef.current),
      _useMouseMove2 = _slicedToArray(_useMouseMove, 2),
      handleMouseDown = _useMouseMove2[0],
      handleInteraction = _useMouseMove2[1];

  var handleKeyDown = function handleKeyDown(e) {
    if ((0, _predicate.isNil)(boxRef) || (0, _predicate.isNil)(boxRef.current)) {
      return;
    }

    var _boxRef$current$getBo2 = boxRef.current.getBoundingClientRect(),
        height = _boxRef$current$getBo2.height,
        width = _boxRef$current$getBo2.width;

    var left = indicator.left,
        top = indicator.top;
    var heightScale = height / 100;
    var widthScale = width / 100;
    var newLeft = left;
    var newTop = top;

    switch (e.keyCode) {
      case _services.keyCodes.DOWN:
        e.preventDefault();
        newTop = top < height ? top + heightScale : height;
        break;

      case _services.keyCodes.LEFT:
        e.preventDefault();
        newLeft = left > 0 ? left - widthScale : 0;
        break;

      case _services.keyCodes.UP:
        e.preventDefault();
        newTop = top > 0 ? top - heightScale : 0;
        break;

      case _services.keyCodes.RIGHT:
        e.preventDefault();
        newLeft = left < width ? left + widthScale : width;
        break;

      default:
        return;
    }

    var newPosition = {
      left: newLeft,
      top: newTop
    };
    setIndicator(newPosition);
    var newColor = calculateColor(_objectSpread({
      width: width,
      height: height
    }, newPosition));
    onChange(newColor);
  };

  var classes = (0, _classnames.default)('euiSaturation', className);
  return _react.default.createElement(_i18n.EuiI18n, {
    token: "euiSaturation.roleDescription",
    default: "HSV color mode saturation and value selection"
  }, function (roleDescription) {
    return (// Unsure why this element causes errors as `tabIndex` and focus/interactivity (by extension) are accounted for.
      // eslint-disable-next-line jsx-a11y/aria-activedescendant-has-tabindex, jsx-a11y/no-noninteractive-element-interactions
      _react.default.createElement("div", _extends({
        role: "application",
        "aria-roledescription": roleDescription,
        "aria-describedby": "".concat(id, "-saturationDescription"),
        "aria-activedescendant": "".concat(id, "-saturationIndicator"),
        onMouseDown: handleMouseDown,
        onTouchStart: handleInteraction,
        onTouchMove: handleInteraction,
        onKeyDown: handleKeyDown,
        ref: ref,
        tabIndex: tabIndex,
        className: classes,
        "data-test-subj": dataTestSubj,
        style: {
          background: "hsl(".concat(color.h, ", 100%, 50%)")
        }
      }, rest), _react.default.createElement(_accessibility.EuiScreenReaderOnly, null, _react.default.createElement("p", null, _react.default.createElement(_i18n.EuiI18n, {
        token: "euiSaturation.screenReaderAnnouncement",
        default: "Use the arrow keys to navigate the square color gradient. The coordinates resulting from each key press will be used to calculate HSV color mode 'saturation' and 'value' numbers, in the range of 0 to 1. Left and right decrease and increase (respectively) the 'saturation' value. Up and down decrease and increase (respectively) the 'value' value."
      }))), _react.default.createElement(_accessibility.EuiScreenReaderOnly, null, _react.default.createElement("p", {
        "aria-live": "polite"
      }, hex)), _react.default.createElement("div", {
        className: "euiSaturation__lightness",
        ref: boxRef
      }, _react.default.createElement("div", {
        className: "euiSaturation__saturation"
      })), _react.default.createElement("div", {
        id: "".concat(id, "-saturationIndicator"),
        className: "euiSaturation__indicator",
        style: _objectSpread({}, indicator)
      }))
    );
  });
});
exports.EuiSaturation = EuiSaturation;
EuiSaturation.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,
  color: _propTypes.default.shape({
    h: _propTypes.default.number.isRequired,
    s: _propTypes.default.number.isRequired,
    v: _propTypes.default.number.isRequired
  }),
  onChange: _propTypes.default.func.isRequired,
  hex: _propTypes.default.string
};