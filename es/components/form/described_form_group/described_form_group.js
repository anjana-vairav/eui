function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { EuiTitle, TITLE_SIZES } from '../../title/title';
import { EuiText } from '../../text/text';
import { EuiFlexGroup, EuiFlexItem } from '../../flex';
import { GUTTER_SIZES } from '../../flex/flex_group';
import makeId from '../form_row/make_id';
var paddingSizeToClassNameMap = {
  xxxs: 'euiDescribedFormGroup__fieldPadding--xxxsmall',
  xxs: 'euiDescribedFormGroup__fieldPadding--xxsmall',
  xs: 'euiDescribedFormGroup__fieldPadding--xsmall',
  s: 'euiDescribedFormGroup__fieldPadding--small',
  m: 'euiDescribedFormGroup__fieldPadding--medium',
  l: 'euiDescribedFormGroup__fieldPadding--large'
};
export var EuiDescribedFormGroup =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiDescribedFormGroup, _Component);

  function EuiDescribedFormGroup(props) {
    var _this;

    _classCallCheck(this, EuiDescribedFormGroup);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EuiDescribedFormGroup).call(this, props));
    _this.ariaId = props.idAria || makeId();
    return _this;
  }

  _createClass(EuiDescribedFormGroup, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          gutterSize = _this$props.gutterSize,
          fullWidth = _this$props.fullWidth,
          titleSize = _this$props.titleSize,
          title = _this$props.title,
          description = _this$props.description,
          userAriaId = _this$props.idAria,
          rest = _objectWithoutProperties(_this$props, ["children", "className", "gutterSize", "fullWidth", "titleSize", "title", "description", "idAria"]);

      var ariaId = this.ariaId;
      var classes = classNames('euiDescribedFormGroup', {
        'euiDescribedFormGroup--fullWidth': fullWidth
      }, className);
      var fieldClasses = classNames('euiDescribedFormGroup__fields', paddingSizeToClassNameMap[titleSize]);
      var ariaProps = {
        'aria-labelledby': "".concat(ariaId, "-title")
      };
      var renderedDescription;

      if (description) {
        renderedDescription = React.createElement(EuiText, {
          id: ariaId,
          size: "s",
          color: "subdued",
          className: "euiDescribedFormGroup__description"
        }, description); // If user has defined an aria ID, assume they have passed the ID to
        // the form row describedByIds and skip describedby here.

        ariaProps['aria-describedby'] = userAriaId ? null : ariaId;
      }

      return React.createElement("div", _extends({
        role: "group",
        className: classes
      }, ariaProps, rest), React.createElement(EuiFlexGroup, {
        gutterSize: gutterSize
      }, React.createElement(EuiFlexItem, null, React.createElement(EuiTitle, {
        id: "".concat(ariaId, "-title"),
        size: titleSize,
        className: "euiDescribedFormGroup__title"
      }, title), renderedDescription), React.createElement(EuiFlexItem, {
        className: fieldClasses
      }, children)));
    }
  }]);

  return EuiDescribedFormGroup;
}(Component);
EuiDescribedFormGroup.propTypes = {
  /**
   * One or more `EuiFormRow`s
   */
  children: PropTypes.node,
  className: PropTypes.string,

  /**
   * Passed to `EuiFlexGroup`
   */
  gutterSize: PropTypes.oneOf(GUTTER_SIZES),
  fullWidth: PropTypes.bool,
  titleSize: PropTypes.oneOf(TITLE_SIZES),
  title: PropTypes.node.isRequired,
  description: PropTypes.node,
  idAria: PropTypes.string
};
EuiDescribedFormGroup.defaultProps = {
  gutterSize: 'l',
  titleSize: 'xs',
  fullWidth: false
};
EuiDescribedFormGroup.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiDescribedFormGroup",
  "props": {
    "gutterSize": {
      "defaultValue": {
        "value": "'l'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "computed": true,
        "value": "GUTTER_SIZES"
      },
      "required": false,
      "description": "Passed to `EuiFlexGroup`"
    },
    "titleSize": {
      "defaultValue": {
        "value": "'xs'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "computed": true,
        "value": "TITLE_SIZES"
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
    "children": {
      "type": {
        "name": "node"
      },
      "required": false,
      "description": "One or more `EuiFormRow`s"
    },
    "className": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "title": {
      "type": {
        "name": "node"
      },
      "required": true,
      "description": ""
    },
    "description": {
      "type": {
        "name": "node"
      },
      "required": false,
      "description": ""
    },
    "idAria": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    }
  }
};