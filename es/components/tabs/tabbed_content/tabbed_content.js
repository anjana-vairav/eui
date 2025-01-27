function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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

import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { htmlIdGenerator } from '../../../services';
import { EuiTabs, DISPLAYS, SIZES } from '../tabs';
import { EuiTab } from '../tab';
var makeId = htmlIdGenerator();
export var AUTOFOCUS = ['initial', 'selected'];
export var EuiTabbedContent =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiTabbedContent, _Component);

  function EuiTabbedContent(props) {
    var _this;

    _classCallCheck(this, EuiTabbedContent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EuiTabbedContent).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "initializeFocus", function () {
      if (!_this.state.inFocus && _this.props.autoFocus === 'selected') {
        // Must wait for setState to finish before calling `.focus()`
        // as the focus call triggers a blur on the first tab
        _this.setState({
          inFocus: true
        }, function () {
          var targetTab = _this.divRef.current.querySelector("#".concat(_this.state.selectedTabId));

          targetTab.focus();
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "removeFocus", function (blurEvent) {
      // only set inFocus to false if the wrapping div doesn't contain the now-focusing element
      if (blurEvent.currentTarget.contains(blurEvent.relatedTarget) === false) {
        _this.setState({
          inFocus: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onTabClick", function (selectedTab) {
      var _this$props = _this.props,
          onTabClick = _this$props.onTabClick,
          externalSelectedTab = _this$props.selectedTab;

      if (onTabClick) {
        onTabClick(selectedTab);
      } // Only track selection state if it's not controlled externally.


      if (!externalSelectedTab) {
        _this.setState({
          selectedTabId: selectedTab.id
        });
      }
    });

    var initialSelectedTab = props.initialSelectedTab,
        _selectedTab = props.selectedTab,
        tabs = props.tabs;
    _this.rootId = makeId();
    _this.divRef = createRef(); // Only track selection state if it's not controlled externally.

    var selectedTabId;

    if (!_selectedTab) {
      selectedTabId = initialSelectedTab && initialSelectedTab.id || tabs[0].id;
    }

    _this.state = {
      selectedTabId: selectedTabId,
      inFocus: false
    };
    return _this;
  }

  _createClass(EuiTabbedContent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // IE11 doesn't support the `relatedTarget` event property for blur events
      // but does add it for focusout. React doesn't support `onFocusOut` so here we are.
      if (this.divRef.current) {
        this.divRef.current.addEventListener('focusout', this.removeFocus);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.divRef.current) {
        this.divRef.current.removeEventListener('focusout', this.removeFocus);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          className = _this$props2.className,
          display = _this$props2.display,
          expand = _this$props2.expand,
          initialSelectedTab = _this$props2.initialSelectedTab,
          onTabClick = _this$props2.onTabClick,
          externalSelectedTab = _this$props2.selectedTab,
          size = _this$props2.size,
          tabs = _this$props2.tabs,
          autoFocus = _this$props2.autoFocus,
          rest = _objectWithoutProperties(_this$props2, ["className", "display", "expand", "initialSelectedTab", "onTabClick", "selectedTab", "size", "tabs", "autoFocus"]); // Allow the consumer to control tab selection.


      var selectedTab = externalSelectedTab || tabs.find(function (tab) {
        return tab.id === _this2.state.selectedTabId;
      });
      var selectedTabContent = selectedTab.content,
          selectedTabId = selectedTab.id;
      return React.createElement("div", _extends({
        ref: this.divRef,
        className: className
      }, rest, {
        onFocus: this.initializeFocus
      }), React.createElement(EuiTabs, {
        expand: expand,
        display: display,
        size: size
      }, tabs.map(function (tab) {
        var id = tab.id,
            name = tab.name,
            content = tab.content,
            tabProps = _objectWithoutProperties(tab, ["id", "name", "content"]);

        var props = _objectSpread({
          key: id,
          id: id
        }, tabProps, {
          onClick: function onClick() {
            return _this2.onTabClick(tab);
          },
          isSelected: tab === selectedTab,
          'aria-controls': "".concat(_this2.rootId)
        });

        return React.createElement(EuiTab, props, name);
      })), React.createElement("div", {
        role: "tabpanel",
        id: "".concat(this.rootId),
        "aria-labelledby": selectedTabId
      }, selectedTabContent));
    }
  }]);

  return EuiTabbedContent;
}(Component);

_defineProperty(EuiTabbedContent, "propTypes", {
  className: PropTypes.string,

  /**
   * Choose `default` or alternative `condensed` display styles
   */
  display: PropTypes.oneOf(DISPLAYS),

  /**
   * Evenly stretches each tab to fill the horizontal space
   */
  expand: PropTypes.bool,

  /**
   * Use this prop to set the initially selected tab while letting the tabbed content component
   * control selection state internally
   */
  initialSelectedTab: PropTypes.object,
  onTabClick: PropTypes.func,

  /**
   * Use this prop if you want to control selection state within the owner component
   */
  selectedTab: PropTypes.object,

  /**
   * When tabbing into the tabs, set the focus on `initial` for the first tab,
   * or `selected` for the currently selected tab. Best use case is for inside of
   * overlay content like popovers or flyouts.
   */
  autoFocus: PropTypes.oneOf(AUTOFOCUS),
  size: PropTypes.oneOf(SIZES),

  /**
   * Each tab needs id and content properties, so we can associate it with its panel for accessibility.
   * The name property is also required to display to the user.
   */
  tabs: PropTypes.arrayOf(PropTypes.shape({
    content: PropTypes.node.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired
});

EuiTabbedContent.defaultProps = {
  autoFocus: 'initial'
};
EuiTabbedContent.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "initializeFocus",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "removeFocus",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "blurEvent",
      "type": null
    }],
    "returns": null
  }, {
    "name": "onTabClick",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "selectedTab",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "EuiTabbedContent",
  "props": {
    "autoFocus": {
      "defaultValue": {
        "value": "'initial'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "'initial'",
          "computed": false
        }, {
          "value": "'selected'",
          "computed": false
        }]
      },
      "required": false,
      "description": "When tabbing into the tabs, set the focus on `initial` for the first tab,\nor `selected` for the currently selected tab. Best use case is for inside of\noverlay content like popovers or flyouts."
    },
    "className": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "display": {
      "type": {
        "name": "enum",
        "computed": true,
        "value": "DISPLAYS"
      },
      "required": false,
      "description": "Choose `default` or alternative `condensed` display styles"
    },
    "expand": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Evenly stretches each tab to fill the horizontal space"
    },
    "initialSelectedTab": {
      "type": {
        "name": "object"
      },
      "required": false,
      "description": "Use this prop to set the initially selected tab while letting the tabbed content component\ncontrol selection state internally"
    },
    "onTabClick": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "selectedTab": {
      "type": {
        "name": "object"
      },
      "required": false,
      "description": "Use this prop if you want to control selection state within the owner component"
    },
    "size": {
      "type": {
        "name": "enum",
        "computed": true,
        "value": "SIZES"
      },
      "required": false,
      "description": ""
    },
    "tabs": {
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "shape",
          "value": {
            "content": {
              "name": "node",
              "required": true
            },
            "id": {
              "name": "string",
              "required": true
            },
            "name": {
              "name": "string",
              "required": true
            }
          }
        }
      },
      "required": true,
      "description": "Each tab needs id and content properties, so we can associate it with its panel for accessibility.\nThe name property is also required to display to the user."
    }
  }
};