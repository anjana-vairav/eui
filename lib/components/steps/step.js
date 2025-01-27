"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiStep = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _title = require("../title");

var _step_number = require("./step_number");

var _i18n = require("../i18n");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EuiStep = function EuiStep(_ref) {
  var className = _ref.className,
      children = _ref.children,
      _ref$headingElement = _ref.headingElement,
      headingElement = _ref$headingElement === void 0 ? 'p' : _ref$headingElement,
      _ref$step = _ref.step,
      step = _ref$step === void 0 ? 1 : _ref$step,
      title = _ref.title,
      status = _ref.status,
      rest = _objectWithoutProperties(_ref, ["className", "children", "headingElement", "step", "title", "status"]);

  var classes = (0, _classnames.default)('euiStep', className);
  return _react.default.createElement("div", _extends({
    className: classes
  }, rest), _react.default.createElement("div", {
    className: "euiStep__titleWrapper"
  }, _react.default.createElement(_i18n.EuiI18n, {
    token: "euiStep.ariaLabel",
    default: function _default(_ref2) {
      var status = _ref2.status;
      if (status === 'incomplete') return 'Incomplete Step';
      return 'Step';
    },
    values: {
      status: status
    }
  }, function (ariaLabel) {
    return _react.default.createElement(_step_number.EuiStepNumber, {
      className: "euiStep__circle",
      "aria-label": "".concat(ariaLabel, " ").concat(step),
      number: step,
      status: status,
      isHollow: status === 'incomplete'
    });
  }), _react.default.createElement(_title.EuiTitle, {
    size: "s",
    className: "euiStep__title"
  }, _react.default.createElement(headingElement, null, title))), _react.default.createElement("div", {
    className: "euiStep__content"
  }, children));
};

exports.EuiStep = EuiStep;
EuiStep.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,
  children: _propTypes.default.node.isRequired,

  /**
     * The HTML tag used for the title
     */
  headingElement: _propTypes.default.string,

  /**
     * The number of the step in the list of steps
     */
  step: _propTypes.default.number,
  title: _propTypes.default.string.isRequired,

  /**
     * May replace the number provided in props.step with alternate styling.
     */
  status: _propTypes.default.oneOf(["complete", "incomplete", "warning", "danger", "disabled"])
};
EuiStep.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiStep",
  "props": {
    "headingElement": {
      "defaultValue": {
        "value": "'p'",
        "computed": false
      },
      "type": {
        "name": "string"
      },
      "required": false,
      "description": "The HTML tag used for the title"
    },
    "step": {
      "defaultValue": {
        "value": "1",
        "computed": false
      },
      "type": {
        "name": "number"
      },
      "required": false,
      "description": "The number of the step in the list of steps"
    },
    "className": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "aria-label": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "data-test-subj": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "children": {
      "type": {
        "name": "node"
      },
      "required": true,
      "description": ""
    },
    "title": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    },
    "status": {
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"complete\"",
          "computed": false
        }, {
          "value": "\"incomplete\"",
          "computed": false
        }, {
          "value": "\"warning\"",
          "computed": false
        }, {
          "value": "\"danger\"",
          "computed": false
        }, {
          "value": "\"disabled\"",
          "computed": false
        }]
      },
      "required": false,
      "description": "May replace the number provided in props.step with alternate styling."
    }
  }
};