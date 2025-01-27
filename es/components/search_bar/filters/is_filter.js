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
export var IsFilterConfigType = PropTypes.shape({
  type: EuiPropTypes.is('is').isRequired,
  field: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  negatedName: PropTypes.string,
  available: PropTypes.func // () => boolean

});
var IsFilterPropTypes = {
  index: PropTypes.number.isRequired,
  config: IsFilterConfigType.isRequired,
  query: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired // (value: boolean) => void

};
export var IsFilter =
/*#__PURE__*/
function (_Component) {
  _inherits(IsFilter, _Component);

  function IsFilter(props) {
    _classCallCheck(this, IsFilter);

    return _possibleConstructorReturn(this, _getPrototypeOf(IsFilter).call(this, props));
  }

  _createClass(IsFilter, [{
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
    value: function valueChanged(field, checked) {
      var query = checked ? this.props.query.removeIsClause(field) : this.props.query.addMustIsClause(field);
      this.props.onChange(query);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          query = _this$props.query,
          config = _this$props.config;
      var clause = query.getIsClause(config.field);
      var checked = !isNil(clause);

      var _this$resolveDisplay = this.resolveDisplay(clause),
          hasActiveFilters = _this$resolveDisplay.hasActiveFilters,
          name = _this$resolveDisplay.name;

      var onClick = function onClick() {
        _this.valueChanged(config.field, checked);
      };

      return React.createElement(EuiFilterButton, {
        onClick: onClick,
        hasActiveFilters: hasActiveFilters,
        "aria-pressed": !!hasActiveFilters
      }, name);
    }
  }]);

  return IsFilter;
}(Component);

_defineProperty(IsFilter, "propTypes", IsFilterPropTypes);

IsFilter.__docgenInfo = {
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
      "name": "field",
      "type": null
    }, {
      "name": "checked",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "IsFilter",
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
        "raw": "IsFilterConfigType.isRequired"
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