import React, { Fragment } from 'react';
import { EuiI18nConsumer } from '../context';
import { processStringToChildren } from './i18n_util';

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

  var children = processStringToChildren(renderable, values, i18nMappingFunc);

  if (typeof children === 'string') {
    // likewise, `processStringToChildren` returns a string or ReactChild[] depending on
    // the type of `values`, so we will make the assumption that the default value is correct.
    return children;
  }

  var Component = function Component() {
    return React.createElement(Fragment, null, children);
  }; // same reasons as above, we can't promise the transforms match the default's type


  return React.createElement(Component, values);
}

function hasTokens(x) {
  return x.tokens != null;
} // Must use the generics <T extends {}>
// If instead typed with React.FunctionComponent there isn't feedback given back to the dev
// when using a `values` object with a renderer callback.


var EuiI18n = function EuiI18n(props) {
  return React.createElement(EuiI18nConsumer, null, function (i18nConfig) {
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

export { EuiI18n };
EuiI18n.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiI18n"
};