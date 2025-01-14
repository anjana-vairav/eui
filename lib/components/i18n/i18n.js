"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiI18n = void 0;

var _react = _interopRequireWildcard(require("react"));

var _context = require("../context");

var _i18n_util = require("./i18n_util");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function errorOnMissingValues(token) {
  throw new Error("I18n mapping for token \"".concat(token, "\" is a formatting function but no values were provided."));
}

function lookupToken(token, i18nMapping, valueDefault, i18nMappingFunc, values) {
  var renderable = i18nMapping && i18nMapping[token] || valueDefault;

  if (typeof renderable === 'function') {
    if (values === undefined) {
      return errorOnMissingValues(token);
    } else {
      // @ts-ignore-next-line
      // TypeScript complains that `DEFAULT` doesn't have a call signature
      // but we verified `renderable` is a function
      return renderable(values);
    }
  } else if (values === undefined || typeof renderable !== 'string') {
    if (i18nMappingFunc && typeof valueDefault === 'string') {
      renderable = i18nMappingFunc(valueDefault);
    } // there's a hole in the typings here as there is no guarantee that i18nMappingFunc
    // returned the same type of the default value, but we need to keep that assumption


    return renderable;
  }

  var children = (0, _i18n_util.processStringToChildren)(renderable, values, i18nMappingFunc);

  if (typeof children === 'string') {
    // likewise, `processStringToChildren` returns a string or ReactChild[] depending on
    // the type of `values`, so we will make the assumption that the default value is correct.
    return children;
  }

  var Component = function Component() {
    return _react.default.createElement(_react.Fragment, null, children);
  }; // same reasons as above, we can't promise the transforms match the default's type


  return _react.default.createElement(Component, values);
}

function hasTokens(x) {
  return x.tokens != null;
} // Must use the generics <T extends {}>
// If instead typed with React.FunctionComponent there isn't feedback given back to the dev
// when using a `values` object with a renderer callback.


var EuiI18n = function EuiI18n(props) {
  return _react.default.createElement(_context.EuiI18nConsumer, null, function (i18nConfig) {
    var mapping = i18nConfig.mapping,
        mappingFunc = i18nConfig.mappingFunc;

    if (hasTokens(props)) {
      return props.children(props.tokens.map(function (token, idx) {
        return lookupToken(token, mapping, props.defaults[idx], mappingFunc);
      }));
    }

    var tokenValue = lookupToken(props.token, mapping, props.default, mappingFunc, props.values);

    if (props.children) {
      return props.children(tokenValue);
    } else {
      return tokenValue;
    }
  });
};

exports.EuiI18n = EuiI18n;
EuiI18n.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiI18n"
};