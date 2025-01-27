"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.is = void 0;

var _predicate = require("../../services/predicate");

var is = function is(expectedValue) {
  var validator = function validator(props, propName, componentName) {
    var compName = componentName || 'ANONYMOUS';
    var value = props[propName];

    if (value !== expectedValue) {
      return new Error("[".concat(propName, "] property in [").concat(compName, "] component is expected to equal [").concat(expectedValue, "] but\n         [").concat(value, "] was provided instead."));
    }

    return null;
  };

  validator.isRequired = function (props, propName, componentName) {
    var compName = componentName || 'ANONYMOUS';
    var value = props[propName];

    if ((0, _predicate.isNil)(value)) {
      return new Error("[".concat(propName, "] property in [").concat(compName, "] component is required but seems to be missing"));
    }

    return validator(props, propName, componentName);
  };

  return validator;
};

exports.is = is;