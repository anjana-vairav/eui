"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiControlBar = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _breadcrumbs = require("../breadcrumbs");

var _button = require("../button");

var _portal = require("../portal");

var _icon = require("../icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var EuiControlBar =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiControlBar, _Component);

  function EuiControlBar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EuiControlBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EuiControlBar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "bar", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      selectedTab: ''
    });

    return _this;
  }

  _createClass(EuiControlBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.position === 'fixed') {
        var height = this.bar ? this.bar.clientHeight : -1;
        document.body.style.paddingBottom = "".concat(height, "px");

        if (this.props.bodyClassName) {
          document.body.classList.add(this.props.bodyClassName);
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.body.style.paddingBottom = null;

      if (this.props.bodyClassName) {
        document.body.classList.remove(this.props.bodyClassName);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          showContent = _this$props.showContent,
          controls = _this$props.controls,
          size = _this$props.size,
          leftOffset = _this$props.leftOffset,
          rightOffset = _this$props.rightOffset,
          maxHeight = _this$props.maxHeight,
          showOnMobile = _this$props.showOnMobile,
          style = _this$props.style,
          position = _this$props.position,
          bodyClassName = _this$props.bodyClassName,
          rest = _objectWithoutProperties(_this$props, ["children", "className", "showContent", "controls", "size", "leftOffset", "rightOffset", "maxHeight", "showOnMobile", "style", "position", "bodyClassName"]);

      var styles = _objectSpread({}, style, {
        left: leftOffset,
        right: rightOffset,
        maxHeight: maxHeight
      });

      var classes = (0, _classnames.default)('euiControlBar', className, {
        'euiControlBar-isOpen': showContent,
        'euiControlBar--large': size === 'l',
        'euiControlBar--medium': size === 'm',
        'euiControlBar--small': size === 's',
        'euiControlBar--fixed': position === 'fixed',
        'euiControlBar--absolute': position === 'absolute',
        'euiControlBar--relative': position === 'relative',
        'euiControlBar--showOnMobile': showOnMobile
      });

      var handleTabClick = function handleTabClick(control, e) {
        _this2.setState({
          selectedTab: control.id
        }, function () {
          control.onClick(e);
        });
      };

      var controlItem = function controlItem(control, index) {
        switch (control.controlType) {
          case 'button':
            {
              var _controlType = control.controlType,
                  _id = control.id,
                  _control$color = control.color,
                  color = _control$color === void 0 ? 'ghost' : _control$color,
                  _label = control.label,
                  _className = control.className,
                  _rest = _objectWithoutProperties(control, ["controlType", "id", "color", "label", "className"]);

              return _react.default.createElement(_button.EuiButton, _extends({
                key: _id + index,
                className: (0, _classnames.default)('euiControlBar__button', _className),
                color: color
              }, _rest, {
                size: "s"
              }), _label);
            }

          case 'icon':
            {
              var _controlType2 = control.controlType,
                  _id2 = control.id,
                  _iconType = control.iconType,
                  _className2 = control.className,
                  _control$color2 = control.color,
                  _color = _control$color2 === void 0 ? 'ghost' : _control$color2,
                  _onClick = control.onClick,
                  href = control.href,
                  _rest2 = _objectWithoutProperties(control, ["controlType", "id", "iconType", "className", "color", "onClick", "href"]);

              return _onClick || href ? _react.default.createElement(_button.EuiButtonIcon, _extends({
                key: _id2 + index,
                className: (0, _classnames.default)('euiControlBar__buttonIcon', _className2),
                iconType: _iconType,
                onClick: _onClick,
                href: href,
                color: _color
              }, _rest2, {
                size: "s"
              })) : _react.default.createElement(_icon.EuiIcon, _extends({
                key: _id2 + index,
                className: (0, _classnames.default)('euiControlBar__icon', _className2),
                type: _iconType,
                color: _color
              }, _rest2));
            }

          case 'divider':
            return _react.default.createElement("div", {
              key: control.controlType + index,
              className: "euiControlBar__divider"
            });

          case 'spacer':
            return _react.default.createElement("div", {
              key: control.controlType + index,
              className: "euiControlBar__spacer"
            });

          case 'text':
            {
              var _controlType3 = control.controlType,
                  _id3 = control.id,
                  _text = control.text,
                  _className3 = control.className,
                  _rest3 = _objectWithoutProperties(control, ["controlType", "id", "text", "className"]);

              return _react.default.createElement("div", _extends({
                key: _id3,
                className: (0, _classnames.default)('euiControlBar__text', _className3)
              }, _rest3), _text);
            }

          case 'tab':
            {
              var _controlType4 = control.controlType,
                  _id4 = control.id,
                  _label2 = control.label,
                  _onClick2 = control.onClick,
                  _className4 = control.className,
                  _rest4 = _objectWithoutProperties(control, ["controlType", "id", "label", "onClick", "className"]);

              var tabClasses = (0, _classnames.default)('euiControlBar__tab', {
                'euiControlBar__tab--active': showContent && _id4 === _this2.state.selectedTab
              }, _className4);
              return _react.default.createElement("button", _extends({
                key: _id4 + index,
                className: tabClasses,
                onClick: function onClick(event) {
                  return handleTabClick(control, event);
                }
              }, _rest4), _label2);
            }

          case 'breadcrumbs':
            {
              var _controlType5 = control.controlType,
                  _id5 = control.id,
                  _rest5 = _objectWithoutProperties(control, ["controlType", "id"]);

              return _react.default.createElement(_breadcrumbs.EuiBreadcrumbs, _extends({
                key: control.id
              }, _rest5));
            }
        }
      };

      var controlBar = _react.default.createElement("div", _extends({
        className: classes
      }, rest, {
        style: styles
      }), _react.default.createElement("div", {
        className: "euiControlBar__controls",
        ref: function ref(node) {
          _this2.bar = node;
        }
      }, controls.map(function (control, index) {
        return controlItem(control, index);
      })), this.props.showContent ? _react.default.createElement("div", {
        className: "euiControlBar__content"
      }, children) : null);

      return position === 'fixed' ? _react.default.createElement(_portal.EuiPortal, null, controlBar) : controlBar;
    }
  }]);

  return EuiControlBar;
}(_react.Component);

exports.EuiControlBar = EuiControlBar;

_defineProperty(EuiControlBar, "defaultProps", {
  leftOffset: 0,
  rightOffset: 0,
  position: 'fixed',
  size: 'l',
  showContent: false,
  showOnMobile: false
});

EuiControlBar.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,

  /**
       * Show or hide the content area containing the `children`
       */
  showContent: _propTypes.default.bool,

  /**
       * An array of controls, actions, and layout spacers to display.
       * Accepts `'button' | 'tab' | 'breadcrumbs' | 'text' | 'icon' | 'spacer' | 'divider'`
       */
  controls: _propTypes.default.arrayOf(_propTypes.default.shape({
    href: _propTypes.default.string,
    onClick: _propTypes.default.func,
    controlType: _propTypes.default.oneOfType([_propTypes.default.oneOfType([_propTypes.default.oneOfType([_propTypes.default.oneOfType([_propTypes.default.oneOfType([_propTypes.default.oneOf(["button"]).isRequired, _propTypes.default.oneOfType([_propTypes.default.oneOf(["breadcrumbs"]).isRequired, _propTypes.default.oneOf(["tab"]).isRequired]).isRequired]).isRequired, _propTypes.default.oneOf(["text"]).isRequired]).isRequired, _propTypes.default.oneOf(["icon"]).isRequired]).isRequired, _propTypes.default.oneOf(["divider"]).isRequired]).isRequired, _propTypes.default.oneOf(["spacer"]).isRequired]).isRequired,
    id: _propTypes.default.oneOfType([_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.string.isRequired]), _propTypes.default.string.isRequired]),
    className: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.string]),
    "aria-label": _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.string]),
    "data-test-subj": _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.string]),

    /**
       * Hides left most breadcrumbs as window gets smaller
       */
    responsive: _propTypes.default.bool,

    /**
       * Forces all breadcrumbs to single line and
       * truncates each breadcrumb to a particular width,
       * except for the last item
       */
    truncate: _propTypes.default.bool,

    /**
       * Condenses the inner items past the maximum set here
       * into a single ellipses item
       */
    max: _propTypes.default.number,

    /**
       * Allows the hidden breadcrumbs to be shown when
       * a `max` is set and the ellipsis is clicked in responsive mode.
       */
    showMaxPopover: _propTypes.default.bool,

    /**
       * The array of individual breadcrumbs, takes the following props.
       * `text` (node) (required): visible label of the breadcrumb,
       * `href` or `onClick`: provide only one (last breadcrumb will not apply either),
       * `truncate` (bool): Force a max-width on the breadcrumb text
       */
    breadcrumbs: _propTypes.default.arrayOf(_propTypes.default.shape({
      className: _propTypes.default.string,
      "aria-label": _propTypes.default.string,
      "data-test-subj": _propTypes.default.string,
      text: _propTypes.default.node.isRequired,
      href: _propTypes.default.string,
      onClick: _propTypes.default.func,
      truncate: _propTypes.default.bool
    }).isRequired),
    label: _propTypes.default.node,
    text: _propTypes.default.node,
    iconType: _propTypes.default.string
  }).isRequired).isRequired,

  /**
       * The default height of the content area.
       */
  size: _propTypes.default.oneOf(["s", "m", "l"]),

  /**
       * Customize the max height.
       * Best when used with `size=l` as this will ensure the actual height equals the max height set.
       */
  maxHeight: _propTypes.default.oneOfType([_propTypes.default.number.isRequired, _propTypes.default.string.isRequired]),

  /**
       * Set the offset from the left side of the screen.
       */
  leftOffset: _propTypes.default.oneOfType([_propTypes.default.number.isRequired, _propTypes.default.string.isRequired]),

  /**
       * Set the offset from the left side of the screen.
       */
  rightOffset: _propTypes.default.oneOfType([_propTypes.default.number.isRequired, _propTypes.default.string.isRequired]),

  /**
       * The control bar is hidden on mobile by default. Use the `showOnMobile` prop to force it's display on mobile screens.
       * You'll need to ensure that the content you place into the bar renders as expected on mobile.
       */
  showOnMobile: _propTypes.default.bool,

  /**
       * By default EuiControlBar will live in a portal, fixed position to the browser window.
       * Change the position of the bar to live inside a container and be positioned against its parent.
       */
  position: _propTypes.default.oneOf(["fixed", "relative", "absolute"]),

  /**
       * Optional class applied to the body used when `position = fixed`
       */
  bodyClassName: _propTypes.default.string
};
EuiControlBar.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiControlBar",
  "props": {
    "leftOffset": {
      "defaultValue": {
        "value": "0",
        "computed": false
      },
      "type": {
        "name": "union",
        "value": [{
          "name": "number"
        }, {
          "name": "string"
        }]
      },
      "required": false,
      "description": "Set the offset from the left side of the screen."
    },
    "rightOffset": {
      "defaultValue": {
        "value": "0",
        "computed": false
      },
      "type": {
        "name": "union",
        "value": [{
          "name": "number"
        }, {
          "name": "string"
        }]
      },
      "required": false,
      "description": "Set the offset from the left side of the screen."
    },
    "position": {
      "defaultValue": {
        "value": "'fixed'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"fixed\"",
          "computed": false
        }, {
          "value": "\"relative\"",
          "computed": false
        }, {
          "value": "\"absolute\"",
          "computed": false
        }]
      },
      "required": false,
      "description": "By default EuiControlBar will live in a portal, fixed position to the browser window.\nChange the position of the bar to live inside a container and be positioned against its parent."
    },
    "size": {
      "defaultValue": {
        "value": "'l'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"s\"",
          "computed": false
        }, {
          "value": "\"m\"",
          "computed": false
        }, {
          "value": "\"l\"",
          "computed": false
        }]
      },
      "required": false,
      "description": "The default height of the content area."
    },
    "showContent": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Show or hide the content area containing the `children`"
    },
    "showOnMobile": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "The control bar is hidden on mobile by default. Use the `showOnMobile` prop to force it's display on mobile screens.\nYou'll need to ensure that the content you place into the bar renders as expected on mobile."
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
    "controls": {
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "shape",
          "value": {
            "href": {
              "name": "string",
              "required": false
            },
            "onClick": {
              "name": "func",
              "required": false
            },
            "controlType": {
              "name": "union",
              "value": [{
                "name": "union",
                "value": [{
                  "name": "union",
                  "value": [{
                    "name": "union",
                    "value": [{
                      "name": "union",
                      "value": [{
                        "name": "enum",
                        "value": [{
                          "value": "\"button\"",
                          "computed": false
                        }]
                      }, {
                        "name": "union",
                        "value": [{
                          "name": "enum",
                          "value": [{
                            "value": "\"breadcrumbs\"",
                            "computed": false
                          }]
                        }, {
                          "name": "enum",
                          "value": [{
                            "value": "\"tab\"",
                            "computed": false
                          }]
                        }]
                      }]
                    }, {
                      "name": "enum",
                      "value": [{
                        "value": "\"text\"",
                        "computed": false
                      }]
                    }]
                  }, {
                    "name": "enum",
                    "value": [{
                      "value": "\"icon\"",
                      "computed": false
                    }]
                  }]
                }, {
                  "name": "enum",
                  "value": [{
                    "value": "\"divider\"",
                    "computed": false
                  }]
                }]
              }, {
                "name": "enum",
                "value": [{
                  "value": "\"spacer\"",
                  "computed": false
                }]
              }],
              "required": true
            },
            "id": {
              "name": "union",
              "value": [{
                "name": "union",
                "value": [{
                  "name": "string"
                }, {
                  "name": "string"
                }]
              }, {
                "name": "string"
              }],
              "required": false
            },
            "className": {
              "name": "union",
              "value": [{
                "name": "string"
              }, {
                "name": "string"
              }],
              "required": false
            },
            "aria-label": {
              "name": "union",
              "value": [{
                "name": "string"
              }, {
                "name": "string"
              }],
              "required": false
            },
            "data-test-subj": {
              "name": "union",
              "value": [{
                "name": "string"
              }, {
                "name": "string"
              }],
              "required": false
            },
            "responsive": {
              "name": "bool",
              "description": "Hides left most breadcrumbs as window gets smaller",
              "required": false
            },
            "truncate": {
              "name": "bool",
              "description": "Forces all breadcrumbs to single line and\ntruncates each breadcrumb to a particular width,\nexcept for the last item",
              "required": false
            },
            "max": {
              "name": "number",
              "description": "Condenses the inner items past the maximum set here\ninto a single ellipses item",
              "required": false
            },
            "showMaxPopover": {
              "name": "bool",
              "description": "Allows the hidden breadcrumbs to be shown when\na `max` is set and the ellipsis is clicked in responsive mode.",
              "required": false
            },
            "breadcrumbs": {
              "name": "arrayOf",
              "value": {
                "name": "shape",
                "value": {
                  "className": {
                    "name": "string",
                    "required": false
                  },
                  "aria-label": {
                    "name": "string",
                    "required": false
                  },
                  "data-test-subj": {
                    "name": "string",
                    "required": false
                  },
                  "text": {
                    "name": "node",
                    "required": true
                  },
                  "href": {
                    "name": "string",
                    "required": false
                  },
                  "onClick": {
                    "name": "func",
                    "required": false
                  },
                  "truncate": {
                    "name": "bool",
                    "required": false
                  }
                }
              },
              "description": "The array of individual breadcrumbs, takes the following props.\n`text` (node) (required): visible label of the breadcrumb,\n`href` or `onClick`: provide only one (last breadcrumb will not apply either),\n`truncate` (bool): Force a max-width on the breadcrumb text",
              "required": false
            },
            "label": {
              "name": "node",
              "required": false
            },
            "text": {
              "name": "node",
              "required": false
            },
            "iconType": {
              "name": "string",
              "required": false
            }
          }
        }
      },
      "required": true,
      "description": "An array of controls, actions, and layout spacers to display.\nAccepts `'button' | 'tab' | 'breadcrumbs' | 'text' | 'icon' | 'spacer' | 'divider'`"
    },
    "maxHeight": {
      "type": {
        "name": "union",
        "value": [{
          "name": "number"
        }, {
          "name": "string"
        }]
      },
      "required": false,
      "description": "Customize the max height.\nBest when used with `size=l` as this will ensure the actual height equals the max height set."
    },
    "bodyClassName": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": "Optional class applied to the body used when `position = fixed`"
    }
  }
};