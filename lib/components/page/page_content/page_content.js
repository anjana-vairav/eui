"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiPageContent = exports.HORIZONTAL_POSITIONS = exports.VERTICAL_POSITIONS = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _panel = require("../../panel/panel");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var verticalPositionToClassNameMap = {
  center: 'euiPageContent--verticalCenter'
};
var horizontalPositionToClassNameMap = {
  center: 'euiPageContent--horizontalCenter'
};
var VERTICAL_POSITIONS = Object.keys(verticalPositionToClassNameMap);
exports.VERTICAL_POSITIONS = VERTICAL_POSITIONS;
var HORIZONTAL_POSITIONS = Object.keys(horizontalPositionToClassNameMap);
exports.HORIZONTAL_POSITIONS = HORIZONTAL_POSITIONS;

var EuiPageContent = function EuiPageContent(_ref) {
  var verticalPosition = _ref.verticalPosition,
      horizontalPosition = _ref.horizontalPosition,
      panelPaddingSize = _ref.panelPaddingSize,
      children = _ref.children,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["verticalPosition", "horizontalPosition", "panelPaddingSize", "children", "className"]);

  var classes = (0, _classnames.default)('euiPageContent', verticalPositionToClassNameMap[verticalPosition], horizontalPositionToClassNameMap[horizontalPosition], className);
  return _react.default.createElement(_panel.EuiPanel, _extends({
    className: classes,
    paddingSize: panelPaddingSize
  }, rest), children);
};

exports.EuiPageContent = EuiPageContent;
EuiPageContent.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  panelPaddingSize: _propTypes.default.oneOf(_panel.SIZES),
  verticalPosition: _propTypes.default.oneOf(VERTICAL_POSITIONS),
  horizontalPosition: _propTypes.default.oneOf(HORIZONTAL_POSITIONS)
};
EuiPageContent.defaultProps = {
  panelPaddingSize: 'l'
};
EuiPageContent.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiPageContent",
  "props": {
    "panelPaddingSize": {
      "defaultValue": {
        "value": "'l'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "computed": true,
        "value": "SIZES"
      },
      "required": false,
      "description": ""
    },
    "children": {
      "type": {
        "name": "node"
      },
      "required": false,
      "description": ""
    },
    "className": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "verticalPosition": {
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"center\"",
          "computed": false
        }]
      },
      "required": false,
      "description": ""
    },
    "horizontalPosition": {
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"center\"",
          "computed": false
        }]
      },
      "required": false,
      "description": ""
    }
  }
};