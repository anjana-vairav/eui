"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyleSelector = exports.startingStyles = void 0;

var _react = _interopRequireWildcard(require("react"));

var _i18n = require("../i18n");

var _popover = require("../popover");

var _button = require("../button");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var startingStyles = {
  cellPadding: 'm',
  fontSize: 'm',
  border: 'all',
  stripes: false,
  rowHover: 'highlight',
  header: 'shade'
};
exports.startingStyles = startingStyles;
var densityStyles = {
  expanded: {
    fontSize: 'l',
    cellPadding: 'l'
  },
  normal: {
    fontSize: 'm',
    cellPadding: 'm'
  },
  compact: {
    fontSize: 's',
    cellPadding: 's'
  }
};

var useStyleSelector = function useStyleSelector(initialStyles) {
  // track styles specified by the user at run time
  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      userGridStyles = _useState2[0],
      setUserGridStyles = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isOpen = _useState4[0],
      setIsOpen = _useState4[1]; // These are the available options. They power the gridDensity hook and also the options in the render


  var densityOptions = ['expanded', 'normal', 'compact']; // Normal is the default density

  var _useState5 = (0, _react.useState)(densityOptions[1]),
      _useState6 = _slicedToArray(_useState5, 2),
      gridDensity = _useState6[0],
      _setGridDensity = _useState6[1];

  var setGridDensity = function setGridDensity(density) {
    _setGridDensity(density);

    setUserGridStyles(densityStyles[density]);
  }; // merge the developer-specified styles with any user overrides


  var gridStyles = _objectSpread({}, initialStyles, userGridStyles);

  var styleSelector = _react.default.createElement(_popover.EuiPopover, {
    "data-test-subj": "dataGridStyleSelectorPopover",
    isOpen: isOpen,
    closePopover: function closePopover() {
      return setIsOpen(false);
    },
    anchorPosition: "downCenter",
    ownFocus: true,
    panelPaddingSize: "s",
    panelClassName: "euiDataGridColumnSelectorPopover",
    button: _react.default.createElement(_button.EuiButtonEmpty, {
      size: "xs",
      iconType: "tableDensityExpanded",
      className: "euiDataGrid__controlBtn",
      color: "text",
      "data-test-subj": "dataGridStyleSelectorButton",
      onClick: function onClick() {
        return setIsOpen(!isOpen);
      }
    }, _react.default.createElement(_i18n.EuiI18n, {
      token: "euiStyleSelector.buttonText",
      default: "Density"
    }))
  }, _react.default.createElement(_i18n.EuiI18n, {
    tokens: ['euiStyleSelector.buttonLegend', 'euiStyleSelector.labelExpanded', 'euiStyleSelector.labelNormal', 'euiStyleSelector.labelCompact'],
    defaults: ['Select the display density for the data grid', 'Expanded density', 'Normal density', 'Compact density']
  }, function (_ref) {
    var _ref2 = _slicedToArray(_ref, 4),
        buttonLegend = _ref2[0],
        labelExpanded = _ref2[1],
        labelNormal = _ref2[2],
        labelCompact = _ref2[3];

    return _react.default.createElement(_button.EuiButtonGroup, {
      legend: buttonLegend,
      name: "density",
      className: "eui-displayInlineBlock",
      buttonSize: "compressed",
      options: [{
        id: densityOptions[0],
        label: labelExpanded,
        iconType: 'tableDensityExpanded'
      }, {
        id: densityOptions[1],
        label: labelNormal,
        iconType: 'tableDensityNormal'
      }, {
        id: densityOptions[2],
        label: labelCompact,
        iconType: 'tableDensityCompact'
      }],
      onChange: setGridDensity,
      idSelected: gridDensity,
      isIconOnly: true
    });
  }));

  return [styleSelector, gridStyles];
};

exports.useStyleSelector = useStyleSelector;