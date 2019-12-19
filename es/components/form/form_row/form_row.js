function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

import React, { cloneElement, Component, Children } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { get } from '../../../services/objects';
import { withRequiredProp } from '../../../utils/prop_types/with_required_prop';
import { EuiFormHelpText } from '../form_help_text';
import { EuiFormErrorText } from '../form_error_text';
import { EuiFormLabel } from '../form_label';
import makeId from './make_id';
var displayToClassNameMap = {
  row: null,
  rowCompressed: 'euiFormRow--compressed',
  columnCompressed: 'euiFormRow--compressed euiFormRow--horizontal',
  center: null,
  centerCompressed: 'euiFormRow--compressed',
  columnCompressedSwitch: 'euiFormRow--compressed euiFormRow--horizontal euiFormRow--hasSwitch'
};
export var DISPLAYS = Object.keys(displayToClassNameMap);
export var EuiFormRow =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiFormRow, _Component);

  function EuiFormRow(props) {
    var _this;

    _classCallCheck(this, EuiFormRow);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EuiFormRow).call(this, props));
    _this.state = {
      isFocused: false,
      id: props.id || makeId()
    };
    _this.onFocus = _this.onFocus.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(EuiFormRow, [{
    key: "onFocus",
    value: function onFocus() {
      // Doing this to allow onFocus to be called correctly from the child input element as this component overrides it
      var onChildFocus = get(this.props, 'children.props.onFocus');

      if (onChildFocus) {
        onChildFocus.apply(void 0, arguments);
      }

      this.setState({
        isFocused: true
      });
    }
  }, {
    key: "onBlur",
    value: function onBlur() {
      // Doing this to allow onBlur to be called correctly from the child input element as this component overrides it
      var onChildBlur = get(this.props, 'children.props.onBlur');

      if (onChildBlur) {
        onChildBlur.apply(void 0, arguments);
      }

      this.setState({
        isFocused: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          helpText = _this$props.helpText,
          isInvalid = _this$props.isInvalid,
          error = _this$props.error,
          label = _this$props.label,
          labelType = _this$props.labelType,
          labelAppend = _this$props.labelAppend,
          hasEmptyLabelSpace = _this$props.hasEmptyLabelSpace,
          fullWidth = _this$props.fullWidth,
          className = _this$props.className,
          describedByIds = _this$props.describedByIds,
          compressed = _this$props.compressed,
          display = _this$props.display,
          displayOnly = _this$props.displayOnly,
          hasChildLabel = _this$props.hasChildLabel,
          propsId = _this$props.id,
          rest = _objectWithoutProperties(_this$props, ["children", "helpText", "isInvalid", "error", "label", "labelType", "labelAppend", "hasEmptyLabelSpace", "fullWidth", "className", "describedByIds", "compressed", "display", "displayOnly", "hasChildLabel", "id"]);

      var id = this.state.id;
      /**
       * Remove when `compressed` is deprecated
       */

      var shimDisplay;

      if (compressed && display === 'row') {
        shimDisplay = 'rowCompressed';
      } else {
        shimDisplay = display;
      }
      /**
       * Remove when `displayOnly` is deprecated
       */


      if (compressed && displayOnly) {
        shimDisplay = 'centerCompressed';
      } else if (displayOnly && display === 'row') {
        shimDisplay = 'center';
      }

      var classes = classNames('euiFormRow', {
        'euiFormRow--hasEmptyLabelSpace': hasEmptyLabelSpace,
        'euiFormRow--fullWidth': fullWidth
      }, displayToClassNameMap[shimDisplay], className);
      var optionalHelpText;

      if (helpText) {
        optionalHelpText = React.createElement(EuiFormHelpText, {
          id: "".concat(id, "-help"),
          className: "euiFormRow__text"
        }, helpText);
      }

      var optionalErrors;

      if (error && isInvalid) {
        var errorTexts = Array.isArray(error) ? error : [error];
        optionalErrors = errorTexts.map(function (error, i) {
          var key = typeof error === 'string' ? error : i;
          return React.createElement(EuiFormErrorText, {
            key: key,
            id: "".concat(id, "-error-").concat(i),
            className: "euiFormRow__text"
          }, error);
        });
      }

      var optionalLabel;
      var isLegend = label && labelType === 'legend' ? true : false;

      if (label || labelAppend) {
        optionalLabel = React.createElement("div", {
          className: "euiFormRow__labelWrapper"
        }, React.createElement(EuiFormLabel, {
          className: "euiFormRow__label",
          isFocused: !isLegend && this.state.isFocused,
          isInvalid: isInvalid,
          "aria-invalid": isInvalid,
          htmlFor: !isLegend && hasChildLabel ? id : undefined,
          type: labelType
        }, label), labelAppend && ' ', labelAppend);
      }

      var optionalProps = {};

      var describingIds = _toConsumableArray(describedByIds);

      if (optionalHelpText) {
        describingIds.push(optionalHelpText.props.id);
      }

      if (optionalErrors) {
        optionalErrors.forEach(function (error) {
          return describingIds.push(error.props.id);
        });
      }

      if (describingIds.length > 0) {
        optionalProps['aria-describedby'] = describingIds.join(' ');
      }

      var field = cloneElement(Children.only(children), _objectSpread({
        id: id,
        onFocus: this.onFocus,
        onBlur: this.onBlur
      }, optionalProps));
      var fieldWrapperClasses = classNames('euiFormRow__fieldWrapper', {
        euiFormRow__fieldWrapperDisplayOnly: displayOnly || display.startsWith('center')
      });
      var Element = labelType === 'legend' ? 'fieldset' : 'div';
      return React.createElement(Element, _extends({
        className: classes,
        id: "".concat(id, "-row")
      }, rest), optionalLabel, React.createElement("div", {
        className: fieldWrapperClasses
      }, field, optionalErrors, optionalHelpText));
    }
  }]);

  return EuiFormRow;
}(Component);
EuiFormRow.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,

  /**
   * Escape hatch to not render duplicate labels if the child also renders a label
   */
  hasChildLabel: PropTypes.bool,
  label: PropTypes.node,

  /**
   * Sets the type of html element the label should be based
   * on the form row contents. For instance checkbox groups
   * should use 'legend' instead of the default 'label'
   */
  labelType: PropTypes.oneOf(['label', 'legend']),

  /**
   * Adds an extra node to the right of the form label without
   * being contained inside the form label. Good for things
   * like documentation links.
   */
  labelAppend: withRequiredProp(PropTypes.node, 'label', 'appending to the label requires that the label also exists'),
  id: PropTypes.string,
  isInvalid: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  helpText: PropTypes.node,
  hasEmptyLabelSpace: PropTypes.bool,
  fullWidth: PropTypes.bool,

  /**
   * IDs of additional elements that should be part of children's `aria-describedby`
   */
  describedByIds: PropTypes.array,

  /**
   * **DEPRECATED: use `display: rowCompressed` instead.**
   * When `true`, tightens up the spacing.
   */
  compressed: PropTypes.bool,

  /**
   * When `rowCompressed`, just tightens up the spacing;
   * Set to `columnCompressed` if compressed
   * and horizontal layout is needed.
   * Set to `center` or `centerCompressed` to align non-input
   * content better with inline rows.
   * Set to `columnCompressedSwitch` if the form control being passed
   * as the child is a switch.
   */
  display: PropTypes.oneOf(DISPLAYS),

  /**
   * **DEPRECATED: use `display: center` instead.**
   * Vertically centers non-input style content so it aligns
   * better with input style content.
   */
  displayOnly: PropTypes.bool
};
EuiFormRow.defaultProps = {
  display: 'row',
  hasEmptyLabelSpace: false,
  fullWidth: false,
  describedByIds: [],
  labelType: 'label',
  hasChildLabel: true
};
EuiFormRow.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "onFocus",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "...args",
      "type": null
    }],
    "returns": null
  }, {
    "name": "onBlur",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "...args",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "EuiFormRow",
  "props": {
    "display": {
      "defaultValue": {
        "value": "'row'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"row\"",
          "computed": false
        }, {
          "value": "\"rowCompressed\"",
          "computed": false
        }, {
          "value": "\"columnCompressed\"",
          "computed": false
        }, {
          "value": "\"center\"",
          "computed": false
        }, {
          "value": "\"centerCompressed\"",
          "computed": false
        }, {
          "value": "\"columnCompressedSwitch\"",
          "computed": false
        }]
      },
      "required": false,
      "description": "When `rowCompressed`, just tightens up the spacing;\nSet to `columnCompressed` if compressed\nand horizontal layout is needed.\nSet to `center` or `centerCompressed` to align non-input\ncontent better with inline rows.\nSet to `columnCompressedSwitch` if the form control being passed\nas the child is a switch."
    },
    "hasEmptyLabelSpace": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "fullWidth": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "describedByIds": {
      "defaultValue": {
        "value": "[]",
        "computed": false
      },
      "type": {
        "name": "array"
      },
      "required": false,
      "description": "IDs of additional elements that should be part of children's `aria-describedby`"
    },
    "labelType": {
      "defaultValue": {
        "value": "'label'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "'label'",
          "computed": false
        }, {
          "value": "'legend'",
          "computed": false
        }]
      },
      "required": false,
      "description": "Sets the type of html element the label should be based\non the form row contents. For instance checkbox groups\nshould use 'legend' instead of the default 'label'"
    },
    "hasChildLabel": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Escape hatch to not render duplicate labels if the child also renders a label"
    },
    "children": {
      "type": {
        "name": "element"
      },
      "required": true,
      "description": ""
    },
    "className": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "label": {
      "type": {
        "name": "node"
      },
      "required": false,
      "description": ""
    },
    "labelAppend": {
      "type": {
        "name": "custom",
        "raw": "withRequiredProp(\n  PropTypes.node,\n  'label',\n  'appending to the label requires that the label also exists'\n)"
      },
      "required": false,
      "description": "Adds an extra node to the right of the form label without\nbeing contained inside the form label. Good for things\nlike documentation links."
    },
    "id": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "isInvalid": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "error": {
      "type": {
        "name": "union",
        "value": [{
          "name": "node"
        }, {
          "name": "arrayOf",
          "value": {
            "name": "node"
          }
        }]
      },
      "required": false,
      "description": ""
    },
    "helpText": {
      "type": {
        "name": "node"
      },
      "required": false,
      "description": ""
    },
    "compressed": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "**DEPRECATED: use `display: rowCompressed` instead.**\nWhen `true`, tightens up the spacing."
    },
    "displayOnly": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "**DEPRECATED: use `display: center` instead.**\nVertically centers non-input style content so it aligns\nbetter with input style content."
    }
  }
};