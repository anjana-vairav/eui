function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
import { EuiListGroup, EuiListGroupItem } from '../list_group';
import { EuiNavDrawerFlyout } from './nav_drawer_flyout';
import { EuiNavDrawerGroup } from './nav_drawer_group';
import { EuiOutsideClickDetector } from '../outside_click_detector';
import { EuiI18n } from '../i18n';
import { EuiFlexItem, EuiFlexGroup } from '../flex';
import { throttle } from '../color_picker/utils';
export var EuiNavDrawer =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiNavDrawer, _Component);

  function EuiNavDrawer(props) {
    var _this;

    _classCallCheck(this, EuiNavDrawer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EuiNavDrawer).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "returnOnIsLockedUpdate", function (isLockedState) {
      if (_this.props.onIsLockedUpdate) {
        _this.props.onIsLockedUpdate(isLockedState);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "functionToCallOnWindowResize", throttle(function () {
      if (window.innerWidth < 1200) {
        _this.collapseDrawer();

        _this.collapseFlyout();
      } // reacts every 50ms to resize changes and always gets the final update

    }, 50));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "timeoutID", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "sideNavLockClicked", function () {
      if (_this.state.isLocked) {
        window.removeEventListener('resize', _this.functionToCallOnWindowResize);
      } else {
        window.addEventListener('resize', _this.functionToCallOnWindowResize);
      }

      _this.returnOnIsLockedUpdate(!_this.state.isLocked);

      _this.setState({
        isLocked: !_this.state.isLocked,
        isCollapsed: false,
        outsideClickDisabled: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleOpen", function () {
      _this.setState({
        isCollapsed: !_this.state.isCollapsed
      });

      setTimeout(function () {
        _this.setState({
          outsideClickDisabled: _this.state.isCollapsed ? true : false,
          toolTipsEnabled: _this.state.isCollapsed ? true : false
        });
      }, 150);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "collapseButtonClick", function () {
      if (_this.state.isCollapsed) {
        _this.expandDrawer();
      } else {
        _this.collapseDrawer();
      }

      _this.collapseFlyout();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "expandDrawer", function () {
      _this.setState({
        isCollapsed: false,
        outsideClickDisabled: false
      });

      setTimeout(function () {
        _this.setState({
          toolTipsEnabled: false
        });
      }, 150);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "collapseDrawer", function () {
      _this.setState({
        isCollapsed: true,
        outsideClickDisabled: _this.state.flyoutIsCollapsed ? true : false,
        toolTipsEnabled: true,
        isLocked: false
      });

      _this.returnOnIsLockedUpdate(false); // Scrolls the menu and flyout back to top when the nav drawer collapses


      setTimeout(function () {
        document.getElementById('navDrawerMenu').scrollTop = 0;
      }, 50); // In case it was locked before, remove the window resize listener

      window.removeEventListener('resize', _this.functionToCallOnWindowResize);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "manageFocus", function () {
      // This prevents the drawer from collapsing when tabbing through children
      // by clearing the timeout thus cancelling the onBlur event (see focusOut).
      // This means isManagingFocus remains true as long as a child element
      // has focus. This is the case since React bubbles up onFocus and onBlur
      // events from the child elements.
      clearTimeout(_this.timeoutID);

      if (!_this.state.isManagingFocus) {
        _this.setState({
          isManagingFocus: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "focusOut", function () {
      // This collapses the drawer when no children have focus (i.e. tabbed out).
      // In other words, if focus does not bubble up from a child element, then
      // the drawer will collapse. See the corresponding block in expandDrawer
      // (called by onFocus) which cancels this operation via clearTimeout.
      _this.timeoutID = setTimeout(function () {
        if (_this.state.isManagingFocus) {
          _this.setState({
            isManagingFocus: false
          });

          _this.closeBoth();
        }
      }, 0);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "expandFlyout", function (links, title) {
      var content = links;

      if (_this.state.navFlyoutTitle === title) {
        _this.collapseFlyout();
      } else {
        _this.setState({
          flyoutIsCollapsed: false,
          navFlyoutTitle: title,
          navFlyoutContent: content,
          isCollapsed: _this.state.isLocked ? false : true,
          toolTipsEnabled: false,
          outsideClickDisabled: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "collapseFlyout", function () {
      _this.setState({
        flyoutIsCollapsed: true,
        navFlyoutTitle: null,
        navFlyoutContent: null,
        toolTipsEnabled: _this.state.isLocked ? false : true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closeBoth", function () {
      if (!_this.state.isLocked) _this.collapseDrawer();

      _this.collapseFlyout();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleDrawerMenuClick", function (e) {
      // walk up e.target until either:
      // 1. a[href] - close the menu
      // 2. document.body - do nothing
      var element = e.target;

      while (element !== undefined && element !== document.body && (element.tagName !== 'A' || element.getAttribute('href') === undefined)) {
        element = element.parentElement;
      }

      if (element !== document.body) {
        // this is an anchor with an href
        _this.closeBoth();
      }
    });

    _this.state = {
      isLocked: props.isLocked,
      isCollapsed: !props.isLocked,
      flyoutIsCollapsed: true,
      outsideClickDisabled: true,
      isManagingFocus: false,
      toolTipsEnabled: true
    };
    return _this;
  }

  _createClass(EuiNavDrawer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.isLocked) {
        window.addEventListener('resize', this.functionToCallOnWindowResize);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.functionToCallOnWindowResize);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          showExpandButton = _this$props.showExpandButton,
          showToolTips = _this$props.showToolTips,
          isCollapsed = _this$props.isCollapsed,
          isLocked = _this$props.isLocked,
          onIsLockedUpdate = _this$props.onIsLockedUpdate,
          rest = _objectWithoutProperties(_this$props, ["children", "className", "showExpandButton", "showToolTips", "isCollapsed", "isLocked", "onIsLockedUpdate"]);

      var classes = classNames('euiNavDrawer', {
        'euiNavDrawer-isCollapsed': this.state.isCollapsed,
        'euiNavDrawer-isExpanded': !this.state.isCollapsed,
        'euiNavDrawer-isLocked': this.state.isLocked,
        'euiNavDrawer-flyoutIsCollapsed': this.state.flyoutIsCollapsed,
        'euiNavDrawer-flyoutIsExpanded': !this.state.flyoutIsCollapsed
      }, className);
      var footerContent;

      if (showExpandButton) {
        footerContent = React.createElement(EuiListGroup, {
          className: "euiNavDrawer__expandButton",
          flush: true
        }, React.createElement(EuiI18n, {
          tokens: ['euiNavDrawer.sideNavCollapse', 'euiNavDrawer.sideNavExpand', 'euiNavDrawer.sideNavLockAriaLabel', 'euiNavDrawer.sideNavLockExpanded', 'euiNavDrawer.sideNavLockCollapsed'],
          defaults: ['Collapse', 'Expand', 'Dock navigation', 'Navigation is docked', 'Navigation is undocked']
        }, function (_ref) {
          var _ref2 = _slicedToArray(_ref, 5),
              sideNavCollapse = _ref2[0],
              sideNavExpand = _ref2[1],
              sideNavLockAriaLabel = _ref2[2],
              sideNavLockExpanded = _ref2[3],
              sideNavLockCollapsed = _ref2[4];

          return React.createElement(EuiListGroupItem, {
            label: _this2.state.isCollapsed ? sideNavExpand : sideNavCollapse,
            iconType: _this2.state.isCollapsed ? 'menuRight' : 'menuLeft',
            size: "s",
            className: _this2.state.isCollapsed ? 'navDrawerExpandButton-isCollapsed' : 'navDrawerExpandButton-isExpanded',
            showToolTip: _this2.state.isCollapsed,
            extraAction: {
              className: 'euiNavDrawer__expandButtonLockAction',
              color: 'text',
              onClick: _this2.sideNavLockClicked,
              iconType: _this2.state.isLocked ? 'lock' : 'lockOpen',
              iconSize: 's',
              'aria-label': sideNavLockAriaLabel,
              title: _this2.state.isLocked ? sideNavLockExpanded : sideNavLockCollapsed,
              'aria-checked': _this2.state.isLocked ? true : false,
              role: 'switch'
            },
            onClick: _this2.collapseButtonClick,
            "data-test-subj": _this2.state.isCollapsed ? 'navDrawerExpandButton-isCollapsed' : 'navDrawerExpandButton-isExpanded'
          });
        }));
      }

      var flyoutContent = React.createElement(EuiNavDrawerFlyout, {
        id: "navDrawerFlyout",
        title: this.state.navFlyoutTitle,
        isCollapsed: this.state.flyoutIsCollapsed,
        listItems: this.state.navFlyoutContent,
        wrapText: true
      }); // Add an onClick that expands the flyout sub menu for any list items (links)
      // that have a flyoutMenu prop (sub links)

      var modifiedChildren = children; // 1. Loop through the EuiNavDrawer children (EuiListGroup, EuiHorizontalRules, etc)

      modifiedChildren = React.Children.map(this.props.children, function (child) {
        // 2. Check if child is an EuiNavDrawerGroup and if it does have a flyout, add the expand function
        if (child.type === EuiNavDrawerGroup) {
          var item = React.cloneElement(child, {
            flyoutMenuButtonClick: _this2.expandFlyout,
            showToolTips: _this2.state.toolTipsEnabled && showToolTips
          });
          return item;
        } else {
          return child;
        }
      });
      var menuClasses = classNames('euiNavDrawerMenu', {
        'euiNavDrawerMenu-hasFooter': footerContent
      });
      return React.createElement(EuiOutsideClickDetector, {
        onOutsideClick: function onOutsideClick() {
          return _this2.closeBoth();
        },
        isDisabled: this.state.outsideClickDisabled
      }, React.createElement("nav", _extends({
        className: classes
      }, rest), React.createElement(EuiFlexGroup, {
        gutterSize: "none",
        onBlur: this.focusOut,
        onFocus: this.manageFocus
      }, React.createElement(EuiFlexItem, {
        grow: false
      }, React.createElement("div", {
        id: "navDrawerMenu",
        className: menuClasses,
        onClick: this.handleDrawerMenuClick
      }, footerContent, modifiedChildren)), flyoutContent)));
    }
  }]);

  return EuiNavDrawer;
}(Component);
EuiNavDrawer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,

  /**
   * Adds fixed toggle button to bottom of menu area
   */
  showExpandButton: PropTypes.bool,

  /**
   * Display tooltips on side nav items
   */
  showToolTips: PropTypes.bool,

  /**
   * Keep drawer locked open by default
   */
  isLocked: PropTypes.bool,

  /**
   * Returns the current state of isLocked
   */
  onIsLockedUpdate: PropTypes.func
};
EuiNavDrawer.defaultProps = {
  showExpandButton: true,
  showToolTips: true
};
EuiNavDrawer.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "returnOnIsLockedUpdate",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "isLockedState",
      "type": null
    }],
    "returns": null
  }, {
    "name": "sideNavLockClicked",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "toggleOpen",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "collapseButtonClick",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "expandDrawer",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "collapseDrawer",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "manageFocus",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "focusOut",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "expandFlyout",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "links",
      "type": null
    }, {
      "name": "title",
      "type": null
    }],
    "returns": null
  }, {
    "name": "collapseFlyout",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "closeBoth",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "handleDrawerMenuClick",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "EuiNavDrawer",
  "props": {
    "showExpandButton": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Adds fixed toggle button to bottom of menu area"
    },
    "showToolTips": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Display tooltips on side nav items"
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
    "isLocked": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Keep drawer locked open by default"
    },
    "onIsLockedUpdate": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": "Returns the current state of isLocked"
    }
  }
};