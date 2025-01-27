function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { EuiFilterButton } from '../../filter_group';
import { isNil } from '../../../services/predicate';
import { EuiPropTypes } from '../../../utils/prop_types';
import { Query } from '../query';
export var FieldValueToggleFilterConfigType = PropTypes.shape({
  type: EuiPropTypes.is('field_value_toggle').isRequired,
  field: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]).isRequired,
  name: PropTypes.string.isRequired,
  negatedName: PropTypes.string,
  available: PropTypes.func,
  // () => boolean
  operator: PropTypes.oneOf(['eq', 'exact', 'gt', 'gte', 'lt', 'lte'])
});
var FieldValueToggleFilterPropTypes = {
  index: PropTypes.number.isRequired,
  config: FieldValueToggleFilterConfigType.isRequired,
  query: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired // (value: boolean) => void

};
export var FieldValueToggleFilter =
/*#__PURE__*/
function (_Component) {
  _inherits(FieldValueToggleFilter, _Component);

  function FieldValueToggleFilter(props) {
    _classCallCheck(this, FieldValueToggleFilter);

    return _possibleConstructorReturn(this, _getPrototypeOf(FieldValueToggleFilter).call(this, props));
  }

  _createClass(FieldValueToggleFilter, [{
    key: "resolveDisplay",
    value: function resolveDisplay(clause) {
      var _this$props$config = this.props.config,
          name = _this$props$config.name,
          negatedName = _this$props$config.negatedName;

      if (isNil(clause)) {
        return {
          hasActiveFilters: false,
          name: name
        };
      }

      return Query.isMust(clause) ? {
        hasActiveFilters: true,
        name: name
      } : {
        hasActiveFilters: true,
        name: negatedName ? negatedName : "Not ".concat(name)
      };
    }
  }, {
    key: "valueChanged",
    value: function valueChanged(checked) {
      var _this$props$config2 = this.props.config,
          field = _this$props$config2.field,
          value = _this$props$config2.value,
          operator = _this$props$config2.operator;
      var query = checked ? this.props.query.removeSimpleFieldValue(field, value) : this.props.query.addSimpleFieldValue(field, value, true, operator);
      this.props.onChange(query);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          query = _this$props.query,
          config = _this$props.config;
      var clause = query.getSimpleFieldClause(config.field, config.value);
      var checked = !isNil(clause);

      var _this$resolveDisplay = this.resolveDisplay(clause),
          hasActiveFilters = _this$resolveDisplay.hasActiveFilters,
          name = _this$resolveDisplay.name;

      var onClick = function onClick() {
        _this.valueChanged(checked);
      };

      return React.createElement(EuiFilterButton, {
        onClick: onClick,
        hasActiveFilters: hasActiveFilters,
        "aria-pressed": !!hasActiveFilters
      }, name);
    }
  }]);

  return FieldValueToggleFilter;
}(Component);

_defineProperty(FieldValueToggleFilter, "propTypes", FieldValueToggleFilterPropTypes);

FieldValueToggleFilter.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "resolveDisplay",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "clause",
      "type": null
    }],
    "returns": null
  }, {
    "name": "valueChanged",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "checked",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "FieldValueToggleFilter",
  "props": {
    "index": {
      "type": {
        "name": "number"
      },
      "required": true,
      "description": ""
    },
    "config": {
      "type": {
        "name": "custom",
        "raw": "FieldValueToggleFilterConfigType.isRequired"
      },
      "required": false,
      "description": ""
    },
    "query": {
      "type": {
        "name": "any"
      },
      "required": true,
      "description": ""
    },
    "onChange": {
      "type": {
        "name": "func"
      },
      "required": true,
      "description": ""
    }
  }
};