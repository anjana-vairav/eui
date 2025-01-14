"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldValueSelectionFilter = exports.FieldValueSelectionFilterConfigType = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _predicate = require("../../../services/predicate");

var _services = require("../../../services");

var _prop_types = require("../../../utils/prop_types");

var _popover = require("../../popover/popover");

var _popover_title = require("../../popover/popover_title");

var _field_search = require("../../form/field_search/field_search");

var _filter_group = require("../../filter_group");

var _loading_chart = require("../../loading/loading_chart");

var _spacer = require("../../spacer/spacer");

var _icon = require("../../icon/icon");

var _query3 = require("../query");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FieldValueOptionType = _propTypes.default.shape({
  field: _propTypes.default.string,
  value: _propTypes.default.any.isRequired,
  name: _propTypes.default.string,
  view: _propTypes.default.node
});

var FieldValueOptionsType = _propTypes.default.oneOfType([_propTypes.default.func, // (query) => Promise<FieldValueOptionType[]>
_propTypes.default.arrayOf(FieldValueOptionType)]);

var FieldValueSelectionFilterConfigType = _propTypes.default.shape({
  type: _prop_types.EuiPropTypes.is('field_value_selection').isRequired,
  field: _propTypes.default.string,
  autoClose: _propTypes.default.boolean,
  name: _propTypes.default.string.isRequired,
  options: FieldValueOptionsType.isRequired,
  filterWith: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.oneOf(['prefix', 'includes'])]),
  cache: _propTypes.default.number,
  multiSelect: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.oneOf(['and', 'or'])]),
  loadingMessage: _propTypes.default.string,
  noOptionsMessage: _propTypes.default.string,
  searchThreshold: _propTypes.default.number,
  available: _propTypes.default.func // () => boolean

});

exports.FieldValueSelectionFilterConfigType = FieldValueSelectionFilterConfigType;
var FieldValueSelectionFilterPropTypes = {
  index: _propTypes.default.number.isRequired,
  config: FieldValueSelectionFilterConfigType.isRequired,
  query: _propTypes.default.any.isRequired,
  onChange: _propTypes.default.func.isRequired // (value) => void

};
var defaults = {
  config: {
    multiSelect: true,
    filterWith: 'prefix',
    loadingMessage: 'Loading...',
    noOptionsMessage: 'No options found',
    searchThreshold: 10
  }
};

var FieldValueSelectionFilter =
/*#__PURE__*/
function (_Component) {
  _inherits(FieldValueSelectionFilter, _Component);

  function FieldValueSelectionFilter(props) {
    var _this;

    _classCallCheck(this, FieldValueSelectionFilter);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FieldValueSelectionFilter).call(this, props));
    var options = props.config.options;
    var preloadedOptions = (0, _predicate.isArray)(options) ? {
      all: options,
      shown: options
    } : null;
    _this.selectItems = [];
    _this.state = {
      popoverOpen: false,
      error: null,
      options: preloadedOptions
    };
    return _this;
  }

  _createClass(FieldValueSelectionFilter, [{
    key: "closePopover",
    value: function closePopover() {
      this.setState({
        popoverOpen: false
      });
    }
  }, {
    key: "onButtonClick",
    value: function onButtonClick() {
      var _this2 = this;

      this.setState(function (prevState) {
        if (!prevState.popoverOpen) {
          // loading options updates the state, so we'll do that in the animation frame
          window.requestAnimationFrame(function () {
            _this2.loadOptions();
          });
        }

        return {
          options: null,
          error: null,
          popoverOpen: !prevState.popoverOpen
        };
      });
    }
  }, {
    key: "loadOptions",
    value: function loadOptions() {
      var _this3 = this;

      var loader = this.resolveOptionsLoader();
      this.setState({
        options: null,
        error: null
      });
      loader().then(function (options) {
        _this3.setState({
          error: null,
          options: {
            all: options,
            shown: options
          }
        });
      }).catch(function () {
        _this3.setState({
          options: null,
          error: 'Could not load options'
        });
      });
    }
  }, {
    key: "filterOptions",
    value: function filterOptions() {
      var _this4 = this;

      var q = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.setState(function (prevState) {
        if ((0, _predicate.isNil)(prevState.options)) {
          return {};
        }

        var predicate = _this4.getOptionFilter();

        return {
          options: _objectSpread({}, prevState.options, {
            shown: prevState.options.all.filter(function (option, i, options) {
              var name = _this4.resolveOptionName(option).toLowerCase();

              var query = q.toLowerCase();
              return predicate(name, query, options);
            })
          })
        };
      });
    }
  }, {
    key: "getOptionFilter",
    value: function getOptionFilter() {
      var filterWith = this.props.config.filterWith || defaults.config.filterWith;

      if (typeof filterWith === 'function') {
        return filterWith;
      }

      if (filterWith === 'includes') {
        return function (name, query) {
          return name.includes(query);
        };
      }

      return function (name, query) {
        return name.startsWith(query);
      };
    }
  }, {
    key: "resolveOptionsLoader",
    value: function resolveOptionsLoader() {
      var _this5 = this;

      var options = this.props.config.options;

      if ((0, _predicate.isArray)(options)) {
        return function () {
          return Promise.resolve(options);
        };
      }

      if ((0, _predicate.isNil)(this.props.config.cache) || this.props.config.cache <= 0) {
        return options;
      }

      return function () {
        var cachedOptions = _this5.state.cachedOptions;

        if (cachedOptions) {
          return Promise.resolve(cachedOptions);
        }

        if (_this5.props.config.cache > 0) {
          return new Promise(function (resolve, reject) {
            return options().then(function (opts) {
              _this5.setState({
                cachedOptions: opts
              });

              _this5.timeoutId = setTimeout(function () {
                _this5.setState({
                  cachedOptions: null
                });
              }, _this5.props.config.cache);
              resolve(opts);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      };
    }
  }, {
    key: "resolveOptionName",
    value: function resolveOptionName(option) {
      return option.name || option.value.toString();
    }
  }, {
    key: "onOptionClick",
    value: function onOptionClick(field, value, checked) {
      var multiSelect = this.resolveMultiSelect();
      var autoClose = this.props.autoClose; // we're closing popover only if the user can only select one item... if the
      // user can select more, we'll leave it open so she can continue selecting

      if (!multiSelect && autoClose) {
        this.closePopover();
        var query = checked ? this.props.query.removeSimpleFieldClauses(field) : this.props.query.removeSimpleFieldClauses(field).addSimpleFieldValue(field, value);
        this.props.onChange(query);
      } else {
        if (multiSelect === 'or') {
          var _query = checked ? this.props.query.removeOrFieldValue(field, value) : this.props.query.addOrFieldValue(field, value);

          this.props.onChange(_query);
        } else {
          var _query2 = checked ? this.props.query.removeSimpleFieldValue(field, value) : this.props.query.addSimpleFieldValue(field, value);

          this.props.onChange(_query2);
        }
      }
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(index, event) {
      switch (event.keyCode) {
        case _services.keyCodes.DOWN:
          if (index < this.selectItems.length - 1) {
            event.preventDefault();
            this.selectItems[index + 1].focus();
          }

          break;

        case _services.keyCodes.UP:
          if (index < 0) {
            return; // it's coming from the search box... nothing to do... nowhere to go
          }

          if (index === 0 && this.searchInput) {
            event.preventDefault();
            this.searchInput.focus();
          } else if (index > 0) {
            event.preventDefault();
            this.selectItems[index - 1].focus();
          }

      }
    }
  }, {
    key: "resolveMultiSelect",
    value: function resolveMultiSelect() {
      var config = this.props.config;
      return !(0, _predicate.isNil)(config.multiSelect) ? config.multiSelect : defaults.config.multiSelect;
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      var _this$props = this.props,
          index = _this$props.index,
          query = _this$props.query,
          config = _this$props.config;
      var multiSelect = this.resolveMultiSelect();
      var activeTop = this.isActiveField(config.field);
      var activeItem = this.state.options ? this.state.options.all.some(function (item) {
        return _this6.isActiveField(item.field);
      }) : false;
      var active = activeTop || activeItem;

      var button = _react.default.createElement(_filter_group.EuiFilterButton, {
        iconType: "arrowDown",
        iconSide: "right",
        onClick: this.onButtonClick.bind(this),
        hasActiveFilters: active,
        grow: true
      }, config.name);

      var searchBox = this.renderSearchBox();
      var content = this.renderContent(config.field, query, config, multiSelect);
      var threshold = this.props.config.searchThreshold || defaults.config.searchThreshold;
      var withTitle = this.state.options && this.state.options.all.length >= threshold;
      return _react.default.createElement(_popover.EuiPopover, {
        id: "".concat(config.type, "_").concat(index),
        ownFocus: true,
        button: button,
        isOpen: this.state.popoverOpen,
        closePopover: this.closePopover.bind(this),
        panelPaddingSize: "none",
        withTitle: withTitle,
        anchorPosition: "downCenter",
        panelClassName: "euiFilterGroup__popoverPanel"
      }, searchBox, content);
    }
  }, {
    key: "renderSearchBox",
    value: function renderSearchBox() {
      var _this7 = this;

      var threshold = this.props.config.searchThreshold || defaults.config.searchThreshold;

      if (this.state.options && this.state.options.all.length >= threshold) {
        var disabled = this.state.error;
        return _react.default.createElement(_popover_title.EuiPopoverTitle, null, _react.default.createElement(_field_search.EuiFieldSearch, {
          inputRef: function inputRef(ref) {
            return _this7.searchInput = ref;
          },
          disabled: disabled,
          incremental: true,
          onSearch: function onSearch(query) {
            return _this7.filterOptions(query);
          },
          onKeyDown: this.onKeyDown.bind(this, -1)
        }));
      }
    }
  }, {
    key: "renderContent",
    value: function renderContent(field, query, config, multiSelect) {
      var _this8 = this;

      if (this.state.error) {
        return this.renderError(this.state.error);
      }

      if ((0, _predicate.isNil)(this.state.options)) {
        return this.renderLoader();
      }

      if (this.state.options.shown.length === 0) {
        return this.renderNoOptions();
      }

      var items = this.state.options.shown.reduce(function (items, option, index) {
        var optionField = option.field || field;
        var clause = multiSelect === 'or' ? query.getOrFieldClause(optionField, option.value) : query.getSimpleFieldClause(optionField, option.value);

        var checked = _this8.resolveChecked(clause);

        var onClick = function onClick() {
          // clicking a checked item will uncheck it and effective remove the filter (value = undefined)
          _this8.onOptionClick(optionField, option.value, checked);
        };

        var item = _react.default.createElement(_filter_group.EuiFilterSelectItem, {
          key: index,
          checked: checked,
          onClick: onClick,
          ref: function ref(_ref) {
            return _this8.selectItems[index] = _ref;
          },
          onKeyDown: _this8.onKeyDown.bind(_this8, index)
        }, option.view ? option.view : _this8.resolveOptionName(option));

        if (!checked) {
          items.rest.push(item);
        } else if (checked === 'on') {
          items.on.push(item);
        } else {
          items.off.push(item);
        }

        return items;
      }, {
        on: [],
        off: [],
        rest: []
      });
      return _react.default.createElement("div", {
        className: "euiFilterSelect__items"
      }, _toConsumableArray(items.on).concat(_toConsumableArray(items.off), _toConsumableArray(items.rest)));
    }
  }, {
    key: "resolveChecked",
    value: function resolveChecked(clause) {
      if (clause) {
        return _query3.Query.isMust(clause) ? 'on' : 'off';
      }
    }
  }, {
    key: "renderLoader",
    value: function renderLoader() {
      var message = this.props.config.loadingMessage || defaults.config.loadingMessage;
      return _react.default.createElement("div", {
        className: "euiFilterSelect__note"
      }, _react.default.createElement("div", {
        className: "euiFilterSelect__noteContent"
      }, _react.default.createElement(_loading_chart.EuiLoadingChart, {
        size: "m"
      }), _react.default.createElement(_spacer.EuiSpacer, {
        size: "xs"
      }), _react.default.createElement("p", null, message)));
    }
  }, {
    key: "renderError",
    value: function renderError(message) {
      return _react.default.createElement("div", {
        className: "euiFilterSelect__note"
      }, _react.default.createElement("div", {
        className: "euiFilterSelect__noteContent"
      }, _react.default.createElement(_icon.EuiIcon, {
        size: "m",
        type: "faceSad",
        color: "danger"
      }), _react.default.createElement(_spacer.EuiSpacer, {
        size: "xs"
      }), _react.default.createElement("p", null, message)));
    }
  }, {
    key: "renderNoOptions",
    value: function renderNoOptions() {
      var message = this.props.config.noOptionsMessage || defaults.config.noOptionsMessage;
      return _react.default.createElement("div", {
        className: "euiFilterSelect__note"
      }, _react.default.createElement("div", {
        className: "euiFilterSelect__noteContent"
      }, _react.default.createElement(_icon.EuiIcon, {
        type: "minusInCircle"
      }), _react.default.createElement(_spacer.EuiSpacer, {
        size: "xs"
      }), _react.default.createElement("p", null, message)));
    }
  }, {
    key: "isActiveField",
    value: function isActiveField(field) {
      if (typeof field !== 'string') {
        return false;
      }

      var query = this.props.query;
      var multiSelect = this.resolveMultiSelect();

      if (multiSelect === 'or') {
        return query.hasOrFieldClause(field);
      }

      return query.hasSimpleFieldClause(field);
    }
  }]);

  return FieldValueSelectionFilter;
}(_react.Component);

exports.FieldValueSelectionFilter = FieldValueSelectionFilter;

_defineProperty(FieldValueSelectionFilter, "propTypes", FieldValueSelectionFilterPropTypes);

_defineProperty(FieldValueSelectionFilter, "defaultProps", {
  autoClose: true
});

FieldValueSelectionFilter.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "closePopover",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "onButtonClick",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "loadOptions",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "filterOptions",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "q",
      "type": null
    }],
    "returns": null
  }, {
    "name": "getOptionFilter",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "resolveOptionsLoader",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "resolveOptionName",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "option",
      "type": null
    }],
    "returns": null
  }, {
    "name": "onOptionClick",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "field",
      "type": null
    }, {
      "name": "value",
      "type": null
    }, {
      "name": "checked",
      "type": null
    }],
    "returns": null
  }, {
    "name": "onKeyDown",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "index",
      "type": null
    }, {
      "name": "event",
      "type": null
    }],
    "returns": null
  }, {
    "name": "resolveMultiSelect",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "renderSearchBox",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "renderContent",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "field",
      "type": null
    }, {
      "name": "query",
      "type": null
    }, {
      "name": "config",
      "type": null
    }, {
      "name": "multiSelect",
      "type": null
    }],
    "returns": null
  }, {
    "name": "resolveChecked",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "clause",
      "type": null
    }],
    "returns": null
  }, {
    "name": "renderLoader",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "renderError",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "message",
      "type": null
    }],
    "returns": null
  }, {
    "name": "renderNoOptions",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "isActiveField",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "field",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "FieldValueSelectionFilter",
  "props": {
    "autoClose": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "required": false
    },
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
        "raw": "FieldValueSelectionFilterConfigType.isRequired"
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