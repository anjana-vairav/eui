"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processStringToChildren = processStringToChildren;

var _react = require("react");

var _lodash_predicates = require("../../services/predicate/lodash_predicates");

var _reactIs = require("react-is");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function isPrimitive(value) {
  return (0, _lodash_predicates.isBoolean)(value) || (0, _lodash_predicates.isString)(value) || (0, _lodash_predicates.isNumber)(value);
}

function hasPropName(child) {
  return _typeof(child) === 'object' && child.hasOwnProperty('propName');
}
/**
 * Replaces placeholder values in `input` with their matching value in `values`
 * e.g. input:'Hello, {name}' will replace `{name}` with `values[name]`
 * @param {string} input
 * @param {RenderableValues} values
 * @param {Function} i18nMappingFunc
 * @returns {string | React.ReactChild[]}
 */


function processStringToChildren(input, values, i18nMappingFunc) {
  var children = [];
  var child;

  function appendCharToChild(char) {
    if (child === undefined) {
      // starting a new string literal
      child = char;
    } else if (typeof child === 'string') {
      // existing string literal
      child = child + char;
    } else if (hasPropName(child)) {
      // adding to the propName of a values lookup
      child.propName = child.propName + char;
    }
  }

  function appendValueToChildren(value) {
    if (value === undefined) {
      return;
    } else if ((0, _reactIs.isElement)(value)) {
      // an array with any ReactElements will be kept as an array
      // so they need to be assigned a key
      children.push((0, _react.cloneElement)(value, {
        key: children.length
      }));
    } else if (hasPropName(value)) {// this won't be called, propName children are converted to a ReactChild before calling this
    } else {
      // everything else can go straight in
      if (i18nMappingFunc !== undefined && typeof value === 'string') {
        value = i18nMappingFunc(value);
      }

      children.push(value);
    }
  } // if we don't encounter a non-primitive
  // then `children` can be concatenated together at the end


  var encounteredNonPrimitive = false; // tslint:disable-next-line:prefer-for-of

  for (var i = 0; i < input.length; i++) {
    var char = input[i];

    if (char === '\\') {
      // peek at the next character to know if this is an escape
      var nextChar = input[i + 1];
      var charToAdd = char; // if this isn't an escape sequence then we will add the backslash

      if (nextChar === '{' || nextChar === '}') {
        // escaping a brace
        i += 1; // advance passed the brace

        charToAdd = input[i];
      }

      appendCharToChild(charToAdd);
    } else if (char === '{') {
      appendValueToChildren(child);
      child = {
        propName: ''
      };
    } else if (char === '}') {
      var _propName = child.propName;

      if (!values.hasOwnProperty(_propName)) {
        throw new Error("Key \"".concat(_propName, "\" not found in ").concat(JSON.stringify(values, null, 2)));
      }

      var propValue = values[_propName];
      encounteredNonPrimitive = encounteredNonPrimitive || !isPrimitive(propValue);
      appendValueToChildren(propValue);
      child = undefined;
    } else {
      appendCharToChild(char);
    }
  } // include any remaining child value


  appendValueToChildren(child);
  return encounteredNonPrimitive ? children : children.join('');
}