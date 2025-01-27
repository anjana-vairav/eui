function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
import { EuiRadio } from '../../form/radio';
import { EuiCheckbox } from '../../form/checkbox';
export var EuiCheckableCard = function EuiCheckableCard(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$checkableType = _ref.checkableType,
      checkableType = _ref$checkableType === void 0 ? 'radio' : _ref$checkableType,
      label = _ref.label,
      checked = _ref.checked,
      disabled = _ref.disabled,
      rest = _objectWithoutProperties(_ref, ["children", "className", "checkableType", "label", "checked", "disabled"]);

  var id = rest.id;
  var classes = classNames('euiCheckableCard', {
    'euiCheckableCard-isChecked': checked,
    'euiCheckableCard-isDisabled': disabled
  }, className);
  var checkableElement;

  if (checkableType === 'radio') {
    checkableElement = React.createElement(EuiRadio, _extends({
      checked: checked,
      disabled: disabled
    }, rest));
  } else {
    checkableElement = React.createElement(EuiCheckbox, _extends({
      checked: checked,
      disabled: disabled
    }, rest));
  }

  var labelClasses = classNames('euiCheckableCard__label', {
    'euiCheckableCard__label-isDisabled': disabled
  });
  return React.createElement("div", {
    className: classes
  }, React.createElement("div", {
    className: "euiCheckableCard__row"
  }, React.createElement("div", {
    className: "euiCheckableCard__control"
  }, checkableElement), React.createElement("label", {
    className: labelClasses,
    htmlFor: id,
    "aria-describedby": children ? "".concat(id, "-details") : undefined
  }, label)), children && React.createElement("div", {
    className: "euiCheckableCard__row"
  }, React.createElement("div", {
    className: "euiCheckableCard__control"
  }), React.createElement("div", {
    id: "".concat(id, "-details"),
    className: "euiCheckableCard__children"
  }, children)));
};
EuiCheckableCard.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.node.isRequired,

  /**
     * Whether the control is a radio button or checkbox
     */
  checkableType: PropTypes.oneOfType([PropTypes.oneOf(["checkbox"]), PropTypes.oneOf(["radio"])])
};
EuiCheckableCard.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiCheckableCard",
  "props": {
    "checkableType": {
      "defaultValue": {
        "value": "'radio'",
        "computed": false
      },
      "type": {
        "name": "union",
        "value": [{
          "name": "enum",
          "value": [{
            "value": "\"checkbox\"",
            "computed": false
          }]
        }, {
          "name": "enum",
          "value": [{
            "value": "\"radio\"",
            "computed": false
          }]
        }]
      },
      "required": false,
      "description": "Whether the control is a radio button or checkbox"
    },
    "id": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    },
    "label": {
      "type": {
        "name": "node"
      },
      "required": true,
      "description": ""
    }
  }
};