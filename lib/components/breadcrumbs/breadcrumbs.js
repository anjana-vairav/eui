"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiBreadcrumbs = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _badge = require("../badge");

var _i18n = require("../i18n");

var _inner_text = require("../inner_text");

var _link = require("../link");

var _popover = require("../popover");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var limitBreadcrumbs = function limitBreadcrumbs(breadcrumbs, max, showMaxPopover, allBreadcrumbs) {
  var breadcrumbsAtStart = [];
  var breadcrumbsAtEnd = [];
  var limit = Math.min(max, breadcrumbs.length);
  var start = Math.floor(limit / 2);
  var overflowBreadcrumbs = showMaxPopover ? allBreadcrumbs.slice(start, start + breadcrumbs.length - limit) : [];

  for (var i = 0; i < limit; i++) {
    // We'll alternate with displaying breadcrumbs at the end and at the start, but be biased
    // towards breadcrumbs the end so that if max is an odd number, we'll have one more
    // breadcrumb visible at the end than at the beginning.
    var isEven = i % 2 === 0; // We're picking breadcrumbs from the front AND the back, so we treat each iteration as a
    // half-iteration.

    var normalizedIndex = Math.floor(i * 0.5);
    var indexOfBreadcrumb = isEven ? breadcrumbs.length - 1 - normalizedIndex : normalizedIndex;
    var breadcrumb = breadcrumbs[indexOfBreadcrumb];

    if (isEven) {
      breadcrumbsAtEnd.unshift(breadcrumb);
    } else {
      breadcrumbsAtStart.push(breadcrumb);
    }
  }

  var EuiBreadcrumbCollapsed = function EuiBreadcrumbCollapsed() {
    var _useState = (0, _react.useState)(false),
        _useState2 = _slicedToArray(_useState, 2),
        isPopoverOpen = _useState2[0],
        setIsPopoverOpen = _useState2[1];

    var ellipsisButton = _react.default.createElement(_i18n.EuiI18n, {
      token: "euiBreadcrumbs.collapsedBadge.ariaLabel",
      default: "Show all breadcrumbs"
    }, function (ariaLabel) {
      return _react.default.createElement(_badge.EuiBadge, {
        "aria-label": ariaLabel,
        onClick: function onClick() {
          return setIsPopoverOpen(!isPopoverOpen);
        },
        onClickAriaLabel: ariaLabel,
        title: "View hidden breadcrumbs",
        className: "euiBreadcrumb euiBreadcrumb__collapsedBadge"
      }, "\u2026");
    });

    if (showMaxPopover) {
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_popover.EuiPopover, {
        button: ellipsisButton,
        isOpen: isPopoverOpen,
        closePopover: function closePopover() {
          return setIsPopoverOpen(false);
        }
      }, _react.default.createElement(EuiBreadcrumbs, {
        className: "euiBreadcrumbs__inPopover",
        breadcrumbs: overflowBreadcrumbs,
        responsive: false,
        truncate: false,
        max: 0
      })), _react.default.createElement(EuiBreadcrumbSeparator, null));
    } else {
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement("div", {
        className: "euiBreadcrumb euiBreadcrumb--collapsed"
      }, "\u2026"), _react.default.createElement(EuiBreadcrumbSeparator, null));
    }
  };

  if (max < breadcrumbs.length) {
    breadcrumbsAtStart.push(_react.default.createElement(EuiBreadcrumbCollapsed, {
      key: "collapsed"
    }));
  }

  return breadcrumbsAtStart.concat(breadcrumbsAtEnd);
};

var EuiBreadcrumbSeparator = function EuiBreadcrumbSeparator() {
  return _react.default.createElement("div", {
    className: "euiBreadcrumbSeparator"
  });
};

var EuiBreadcrumbs = function EuiBreadcrumbs(_ref) {
  var breadcrumbs = _ref.breadcrumbs,
      className = _ref.className,
      _ref$responsive = _ref.responsive,
      responsive = _ref$responsive === void 0 ? true : _ref$responsive,
      _ref$truncate = _ref.truncate,
      truncate = _ref$truncate === void 0 ? true : _ref$truncate,
      _ref$max = _ref.max,
      max = _ref$max === void 0 ? 5 : _ref$max,
      _ref$showMaxPopover = _ref.showMaxPopover,
      showMaxPopover = _ref$showMaxPopover === void 0 ? false : _ref$showMaxPopover,
      rest = _objectWithoutProperties(_ref, ["breadcrumbs", "className", "responsive", "truncate", "max", "showMaxPopover"]);

  var breadcrumbElements = breadcrumbs.map(function (breadcrumb, index) {
    var text = breadcrumb.text,
        href = breadcrumb.href,
        onClick = breadcrumb.onClick,
        truncate = breadcrumb.truncate,
        breadcrumbClassName = breadcrumb.className,
        breadcrumbRest = _objectWithoutProperties(breadcrumb, ["text", "href", "onClick", "truncate", "className"]);

    var isLastBreadcrumb = index === breadcrumbs.length - 1;
    var breadcrumbClasses = (0, _classnames.default)('euiBreadcrumb', breadcrumbClassName, {
      'euiBreadcrumb--last': isLastBreadcrumb,
      'euiBreadcrumb--truncate': truncate
    });
    var link;

    if (isLastBreadcrumb && !href) {
      link = _react.default.createElement(_inner_text.EuiInnerText, null, function (ref, innerText) {
        return _react.default.createElement("span", _extends({
          ref: ref,
          className: breadcrumbClasses,
          title: innerText,
          "aria-current": "page"
        }, breadcrumbRest), text);
      });
    } else {
      link = _react.default.createElement(_inner_text.EuiInnerText, null, function (ref, innerText) {
        return _react.default.createElement(_link.EuiLink, _extends({
          ref: ref,
          color: isLastBreadcrumb ? 'text' : 'subdued',
          onClick: onClick,
          href: href,
          className: breadcrumbClasses,
          title: innerText
        }, breadcrumbRest), text);
      });
    }

    var separator;

    if (!isLastBreadcrumb) {
      separator = _react.default.createElement(EuiBreadcrumbSeparator, null);
    }

    return _react.default.createElement(_react.Fragment, {
      key: index
    }, link, separator);
  });
  var limitedBreadcrumbs = max ? limitBreadcrumbs(breadcrumbElements, max, showMaxPopover, breadcrumbs) : breadcrumbElements;
  var classes = (0, _classnames.default)('euiBreadcrumbs', className, {
    'euiBreadcrumbs--truncate': truncate,
    'euiBreadcrumbs--responsive': responsive
  });
  return _react.default.createElement("nav", _extends({
    "aria-label": "breadcrumb",
    className: classes
  }, rest), limitedBreadcrumbs);
};

exports.EuiBreadcrumbs = EuiBreadcrumbs;
EuiBreadcrumbs.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,

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
  }).isRequired).isRequired
};
EuiBreadcrumbs.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiBreadcrumbs",
  "props": {
    "responsive": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Hides left most breadcrumbs as window gets smaller"
    },
    "truncate": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Forces all breadcrumbs to single line and\ntruncates each breadcrumb to a particular width,\nexcept for the last item"
    },
    "max": {
      "defaultValue": {
        "value": "5",
        "computed": false
      },
      "type": {
        "name": "number"
      },
      "required": false,
      "description": "Condenses the inner items past the maximum set here\ninto a single ellipses item"
    },
    "showMaxPopover": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Allows the hidden breadcrumbs to be shown when\na `max` is set and the ellipsis is clicked in responsive mode."
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
    "breadcrumbs": {
      "type": {
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
        }
      },
      "required": true,
      "description": "The array of individual breadcrumbs, takes the following props.\n`text` (node) (required): visible label of the breadcrumb,\n`href` or `onClick`: provide only one (last breadcrumb will not apply either),\n`truncate` (bool): Force a max-width on the breadcrumb text"
    }
  }
};