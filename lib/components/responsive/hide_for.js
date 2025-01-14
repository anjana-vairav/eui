"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiHideFor = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var responsiveSizesToClassNameMap = {
  xs: 'eui-hideFor--xs',
  s: 'eui-hideFor--s',
  m: 'eui-hideFor--m',
  l: 'eui-hideFor--l',
  xl: 'eui-hideFor--xl'
};

var EuiHideFor = function EuiHideFor(_ref) {
  var children = _ref.children,
      sizes = _ref.sizes;
  var utilityClasses = sizes.map(function (item) {
    return responsiveSizesToClassNameMap[item];
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

exports.EuiHideFor = EuiHideFor;
EuiHideFor.propTypes = {
  children: _propTypes.default.node,

  /**
     * List of all the responsive sizes to show the children for.
     * Options are `'xs' | 's' | 'm' | 'l' | 'xl'`
     */
  sizes: _propTypes.default.arrayOf(_propTypes.default.oneOf(["xs", "s", "m", "l", "xl"]).isRequired).isRequired
};
EuiHideFor.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiHideFor",
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
    }
  }
};