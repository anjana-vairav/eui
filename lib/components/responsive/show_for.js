"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiShowFor = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var responsiveSizesToClassNameMap = {
  xs: 'eui-showFor--xs',
  s: 'eui-showFor--s',
  m: 'eui-showFor--m',
  l: 'eui-showFor--l',
  xl: 'eui-showFor--xl'
};

var EuiShowFor = function EuiShowFor(_ref) {
  var children = _ref.children,
      sizes = _ref.sizes,
      display = _ref.display;
  var utilityClasses = sizes.map(function (item) {
    var append = display ? "--".concat(display) : '';
    return "".concat(responsiveSizesToClassNameMap[item]).concat(append);
  });

  if (_react.default.isValidElement(children)) {
    return _react.default.createElement(_react.default.Fragment, null, _react.default.Children.map(children, function (child) {
      return _react.default.cloneElement(child, {
        className: (0, _classnames.default)(child.props.className, utilityClasses)
      });
    }));
  } else {
    return _react.default.createElement("span", {
      className: (0, _classnames.default)(utilityClasses)
    }, children);
  }
};

exports.EuiShowFor = EuiShowFor;
EuiShowFor.propTypes = {
  children: _propTypes.default.node,

  /**
     * List of all the responsive sizes to show the children for.
     * Options are `'xs' | 's' | 'm' | 'l' | 'xl'`
     */
  sizes: _propTypes.default.arrayOf(_propTypes.default.oneOf(["xs", "s", "m", "l", "xl"]).isRequired).isRequired,

  /**
     * Optional display as property. Leaving as `undefined` renders as `inline`.
     */
  display: _propTypes.default.oneOf(["block", "inlineBlock", "flex"])
};
EuiShowFor.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiShowFor",
  "props": {
    "children": {
      "type": {
        "name": "node"
      },
      "required": false,
      "description": ""
    },
    "sizes": {
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "enum",
          "value": [{
            "value": "\"xs\"",
            "computed": false
          }, {
            "value": "\"s\"",
            "computed": false
          }, {
            "value": "\"m\"",
            "computed": false
          }, {
            "value": "\"l\"",
            "computed": false
          }, {
            "value": "\"xl\"",
            "computed": false
          }]
        }
      },
      "required": true,
      "description": "List of all the responsive sizes to show the children for.\nOptions are `'xs' | 's' | 'm' | 'l' | 'xl'`"
    },
    "display": {
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"block\"",
          "computed": false
        }, {
          "value": "\"inlineBlock\"",
          "computed": false
        }, {
          "value": "\"flex\"",
          "computed": false
        }]
      },
      "required": false,
      "description": "Optional display as property. Leaving as `undefined` renders as `inline`."
    }
  }
};