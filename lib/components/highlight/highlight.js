"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiHighlight = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var highlight = function highlight(searchSubject, searchValue) {
  var isStrict = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (!searchValue) {
    return searchSubject;
  }

  var normalizedSearchSubject = isStrict ? searchSubject : searchSubject.toLowerCase();
  var normalizedSearchValue = isStrict ? searchValue : searchValue.toLowerCase();
  var indexOfMatch = normalizedSearchSubject.indexOf(normalizedSearchValue);

  if (indexOfMatch === -1) {
    return searchSubject;
  }

  var preMatch = searchSubject.substr(0, indexOfMatch);
  var match = searchSubject.substr(indexOfMatch, searchValue.length);
  var postMatch = searchSubject.substr(indexOfMatch + searchValue.length);
  return _react.default.createElement(_react.Fragment, null, preMatch, _react.default.createElement("strong", null, match), postMatch);
};

var EuiHighlight = function EuiHighlight(_ref) {
  var children = _ref.children,
      className = _ref.className,
      search = _ref.search,
      strict = _ref.strict,
      rest = _objectWithoutProperties(_ref, ["children", "className", "search", "strict"]);

  return _react.default.createElement("span", _extends({
    className: className
  }, rest), highlight(children, search, strict));
};

exports.EuiHighlight = EuiHighlight;
EuiHighlight.propTypes = {
  children: _propTypes.default.string.isRequired,
  className: _propTypes.default.string,
  search: _propTypes.default.string.isRequired,
  strict: _propTypes.default.bool
};
EuiHighlight.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiHighlight",
  "props": {
    "children": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    },
    "className": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "search": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    },
    "strict": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    }
  }
};