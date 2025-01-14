"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiI18nConsumer = exports.EuiContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var I18nContext = (0, _react.createContext)({});
var EuiI18nProvider = I18nContext.Provider,
    EuiI18nConsumer = I18nContext.Consumer;
exports.EuiI18nConsumer = EuiI18nConsumer;

var EuiContext = function EuiContext(_ref) {
  var _ref$i18n = _ref.i18n,
      i18n = _ref$i18n === void 0 ? {} : _ref$i18n,
      children = _ref.children;
  return _react.default.createElement(EuiI18nProvider, {
    value: i18n
  }, children);
};

exports.EuiContext = EuiContext;
EuiContext.propTypes = {
  i18n: _propTypes.default.shape({
    mapping: _propTypes.default.shape({}),
    mappingFunc: _propTypes.default.func,
    formatNumber: _propTypes.default.func,
    formatDateTime: _propTypes.default.func,
    locale: _propTypes.default.string
  }).isRequired,
  children: _propTypes.default.node.isRequired
};
EuiContext.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiContext",
  "props": {
    "i18n": {
      "defaultValue": {
        "value": "{}",
        "computed": false
      },
      "type": {
        "name": "shape",
        "value": {
          "mapping": {
            "name": "shape",
            "value": {},
            "required": false
          },
          "mappingFunc": {
            "name": "func",
            "required": false
          },
          "formatNumber": {
            "name": "func",
            "required": false
          },
          "formatDateTime": {
            "name": "func",
            "required": false
          },
          "locale": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": false,
      "description": ""
    },
    "children": {
      "type": {
        "name": "node"
      },
      "required": true,
      "description": ""
    }
  }
};