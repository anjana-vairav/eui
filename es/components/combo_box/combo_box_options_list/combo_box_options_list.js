function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { List } from 'react-virtualized';
import { EuiCode } from '../../code';
import { EuiFlexGroup, EuiFlexItem } from '../../flex';
import { EuiHighlight } from '../../highlight';
import { EuiPanel } from '../../panel';
import { EuiText } from '../../text';
import { EuiLoadingSpinner } from '../../loading';
import { EuiComboBoxTitle } from './combo_box_title';
import { EuiI18n } from '../../i18n';
import { EuiFilterSelectItem } from '../../filter_group/filter_select_item';
var positionToClassNameMap = {
  top: 'euiComboBoxOptionsList--top',
  bottom: 'euiComboBoxOptionsList--bottom'
};
var POSITIONS = Object.keys(positionToClassNameMap);
var OPTION_CONTENT_CLASSNAME = 'euiComboBoxOption__content';
export var EuiComboBoxOptionsList =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiComboBoxOptionsList, _Component);

  function EuiComboBoxOptionsList() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EuiComboBoxOptionsList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EuiComboBoxOptionsList)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updatePosition", function () {
      // Wait a beat for the DOM to update, since we depend on DOM elements' bounds.
      requestAnimationFrame(function () {
        _this.props.updatePosition(_this.list);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closeListOnScroll", function (e) {
      // close the list when a scroll event happens, but not if the scroll happened in the options list
      // this mirrors Firefox's approach of auto-closing `select` elements onscroll
      if (_this.list && _this.list.contains(e.target) === false) {
        _this.props.onCloseList();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "listRef", function (node) {
      _this.props.listRef(node);

      _this.list = node;
    });

    return _this;
  }

  _createClass(EuiComboBoxOptionsList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // Wait a frame, otherwise moving focus from one combo box to another will result in the class
      // being removed from the body.
      requestAnimationFrame(function () {
        document.body.classList.add('euiBody-hasPortalContent');
      });
      this.updatePosition();
      window.addEventListener('resize', this.updatePosition); // Firefox will trigger a scroll event in many common situations when the options list div is appended
      // to the DOM; in testing it was always within 100ms, but setting a timeout here for 500ms to be safe

      setTimeout(function () {
        window.addEventListener('scroll', _this2.closeListOnScroll, {
          passive: true,
          // for better performance as we won't call preventDefault
          capture: true // scroll events don't bubble, they must be captured instead

        });
      }, 500);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var options = prevProps.options,
          selectedOptions = prevProps.selectedOptions,
          searchValue = prevProps.searchValue; // We don't compare matchingOptions because that will result in a loop.

      if (searchValue !== this.props.searchValue || options !== this.props.options || selectedOptions !== this.props.selectedOptions) {
        this.updatePosition();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.body.classList.remove('euiBody-hasPortalContent');
      window.removeEventListener('resize', this.updatePosition);
      window.removeEventListener('scroll', this.closeListOnScroll, {
        passive: true,
        capture: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          options = _this$props.options,
          isLoading = _this$props.isLoading,
          selectedOptions = _this$props.selectedOptions,
          onCreateOption = _this$props.onCreateOption,
          searchValue = _this$props.searchValue,
          matchingOptions = _this$props.matchingOptions,
          optionRef = _this$props.optionRef,
          onOptionClick = _this$props.onOptionClick,
          onOptionEnterKey = _this$props.onOptionEnterKey,
          areAllOptionsSelected = _this$props.areAllOptionsSelected,
          getSelectedOptionForSearchValue = _this$props.getSelectedOptionForSearchValue,
          position = _this$props.position,
          renderOption = _this$props.renderOption,
          listRef = _this$props.listRef,
          updatePosition = _this$props.updatePosition,
          width = _this$props.width,
          scrollToIndex = _this$props.scrollToIndex,
          onScroll = _this$props.onScroll,
          rowHeight = _this$props.rowHeight,
          fullWidth = _this$props.fullWidth,
          dataTestSubj = _this$props['data-test-subj'],
          activeOptionIndex = _this$props.activeOptionIndex,
          rootId = _this$props.rootId,
          onCloseList = _this$props.onCloseList,
          rest = _objectWithoutProperties(_this$props, ["options", "isLoading", "selectedOptions", "onCreateOption", "searchValue", "matchingOptions", "optionRef", "onOptionClick", "onOptionEnterKey", "areAllOptionsSelected", "getSelectedOptionForSearchValue", "position", "renderOption", "listRef", "updatePosition", "width", "scrollToIndex", "onScroll", "rowHeight", "fullWidth", "data-test-subj", "activeOptionIndex", "rootId", "onCloseList"]);

      var emptyStateContent;

      if (isLoading) {
        emptyStateContent = React.createElement(EuiFlexGroup, {
          gutterSize: "s",
          justifyContent: "center"
        }, React.createElement(EuiFlexItem, {
          grow: false
        }, React.createElement(EuiLoadingSpinner, {
          size: "m"
        })), React.createElement(EuiFlexItem, {
          grow: false
        }, React.createElement(EuiI18n, {
          token: "euiComboBoxOptionsList.loadingOptions",
          default: "Loading options"
        })));
      } else if (searchValue && matchingOptions.length === 0) {
        if (onCreateOption) {
          var selectedOptionForValue = getSelectedOptionForSearchValue(searchValue, selectedOptions);

          if (selectedOptionForValue) {
            // Disallow duplicate custom options.
            emptyStateContent = React.createElement("p", null, React.createElement(EuiI18n, {
              token: "euiComboBoxOptionsList.alreadyAdded",
              default: "{label} has already been added",
              values: {
                label: React.createElement("strong", null, selectedOptionForValue.label)
              }
            }));
          } else {
            emptyStateContent = React.createElement("p", null, React.createElement(EuiI18n, {
              token: "euiComboBoxOptionsList.createCustomOption",
              default: "Hit {key} to add {searchValue} as a custom option",
              values: {
                key: React.createElement(EuiCode, null, "ENTER"),
                searchValue: React.createElement("strong", null, searchValue)
              }
            }));
          }
        } else {
          emptyStateContent = React.createElement("p", null, React.createElement(EuiI18n, {
            token: "euiComboBoxOptionsList.noMatchingOptions",
            default: "{searchValue} doesn't match any options",
            values: {
              searchValue: React.createElement("strong", null, searchValue)
            }
          }));
        }
      } else if (!options.length) {
        emptyStateContent = React.createElement("p", null, React.createElement(EuiI18n, {
          token: "euiComboBoxOptionsList.noAvailableOptions",
          default: "There aren't any options available"
        }));
      } else if (areAllOptionsSelected) {
        emptyStateContent = React.createElement("p", null, React.createElement(EuiI18n, {
          token: "euiComboBoxOptionsList.allOptionsSelected",
          default: "You've selected all available options"
        }));
      }

      var emptyState = emptyStateContent ? React.createElement(EuiText, {
        size: "xs",
        className: "euiComboBoxOptionsList__empty"
      }, emptyStateContent) : undefined;
      var numVisibleOptions = matchingOptions.length < 7 ? matchingOptions.length : 7;
      var height = numVisibleOptions * rowHeight;
      var optionsList = React.createElement(List, {
        id: rootId('listbox'),
        role: "listbox",
        width: width,
        height: height,
        rowCount: matchingOptions.length,
        rowHeight: rowHeight,
        scrollToIndex: scrollToIndex,
        onScroll: onScroll,
        rowRenderer: function rowRenderer(_ref) {
          var key = _ref.key,
              index = _ref.index,
              style = _ref.style;
          var option = matchingOptions[index];

          var value = option.value,
              label = option.label,
              isGroupLabelOption = option.isGroupLabelOption,
              rest = _objectWithoutProperties(option, ["value", "label", "isGroupLabelOption"]);

          if (isGroupLabelOption) {
            return React.createElement("div", {
              key: key,
              style: style
            }, React.createElement(EuiComboBoxTitle, null, label));
          }

          return React.createElement(EuiFilterSelectItem, _extends({
            style: style,
            key: option.label.toLowerCase(),
            onClick: function onClick() {
              return onOptionClick(option);
            } // onEnterKey={onOptionEnterKey}
            ,
            ref: optionRef.bind(_this3, index),
            isFocused: activeOptionIndex === index,
            id: rootId("_option-".concat(index)),
            title: label,
            showIcons: false
          }, rest), renderOption ? renderOption(option, searchValue, OPTION_CONTENT_CLASSNAME) : React.createElement(EuiHighlight, {
            search: searchValue,
            className: OPTION_CONTENT_CLASSNAME
          }, label));
        }
      });
      var classes = classNames('euiComboBoxOptionsList', positionToClassNameMap[position], {
        'euiComboBoxOptionsList--fullWidth': fullWidth
      });
      return React.createElement(EuiPanel, _extends({
        paddingSize: "none",
        className: classes,
        panelRef: this.listRef,
        "data-test-subj": "comboBoxOptionsList ".concat(dataTestSubj)
      }, rest), React.createElement("div", {
        className: "euiComboBoxOptionsList__rowWrap"
      }, emptyState || optionsList));
    }
  }]);

  return EuiComboBoxOptionsList;
}(Component);

_defineProperty(EuiComboBoxOptionsList, "propTypes", {
  options: PropTypes.array,
  isLoading: PropTypes.bool,
  selectedOptions: PropTypes.array,
  onCreateOption: PropTypes.func,
  searchValue: PropTypes.string,
  matchingOptions: PropTypes.array,
  optionRef: PropTypes.func,
  onOptionClick: PropTypes.func,
  onOptionEnterKey: PropTypes.func,
  areAllOptionsSelected: PropTypes.bool,
  getSelectedOptionForSearchValue: PropTypes.func,
  updatePosition: PropTypes.func.isRequired,
  position: PropTypes.oneOf(POSITIONS),
  listRef: PropTypes.func.isRequired,
  renderOption: PropTypes.func,
  width: PropTypes.number,
  scrollToIndex: PropTypes.number,
  onScroll: PropTypes.func,
  rowHeight: PropTypes.number,
  fullWidth: PropTypes.bool,
  activeOptionIndex: PropTypes.number,
  rootId: PropTypes.func.isRequired,
  onCloseList: PropTypes.func.isRequired
});

_defineProperty(EuiComboBoxOptionsList, "defaultProps", {
  rowHeight: 27,
  // row height of default option renderer
  'data-test-subj': ''
});

EuiComboBoxOptionsList.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "updatePosition",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "closeListOnScroll",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }, {
    "name": "listRef",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "node",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "EuiComboBoxOptionsList",
  "props": {
    "rowHeight": {
      "defaultValue": {
        "value": "27",
        "computed": false
      },
      "type": {
        "name": "number"
      },
      "required": false,
      "description": ""
    },
    "data-test-subj": {
      "defaultValue": {
        "value": "''",
        "computed": false
      },
      "required": false
    },
    "options": {
      "type": {
        "name": "array"
      },
      "required": false,
      "description": ""
    },
    "isLoading": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "selectedOptions": {
      "type": {
        "name": "array"
      },
      "required": false,
      "description": ""
    },
    "onCreateOption": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "searchValue": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "matchingOptions": {
      "type": {
        "name": "array"
      },
      "required": false,
      "description": ""
    },
    "optionRef": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "onOptionClick": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "onOptionEnterKey": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "areAllOptionsSelected": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "getSelectedOptionForSearchValue": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "updatePosition": {
      "type": {
        "name": "func"
      },
      "required": true,
      "description": ""
    },
    "position": {
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"top\"",
          "computed": false
        }, {
          "value": "\"bottom\"",
          "computed": false
        }]
      },
      "required": false,
      "description": ""
    },
    "listRef": {
      "type": {
        "name": "func"
      },
      "required": true,
      "description": ""
    },
    "renderOption": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "width": {
      "type": {
        "name": "number"
      },
      "required": false,
      "description": ""
    },
    "scrollToIndex": {
      "type": {
        "name": "number"
      },
      "required": false,
      "description": ""
    },
    "onScroll": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "fullWidth": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "activeOptionIndex": {
      "type": {
        "name": "number"
      },
      "required": false,
      "description": ""
    },
    "rootId": {
      "type": {
        "name": "func"
      },
      "required": true,
      "description": ""
    },
    "onCloseList": {
      "type": {
        "name": "func"
      },
      "required": true,
      "description": ""
    }
  }
};