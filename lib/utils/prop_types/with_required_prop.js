"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withRequiredProp = void 0;

/**
 * PropType validation that, if the property is present,
 * validates against a proptype and verifies that another property exists
 *
 * example:
 * ExampleComponent.propTypes = {
 *   items: PropTypes.array,
 *   itemId: withRequiredProp(PropTypes.string, 'items', 'itemId is required to extract the ID from an item')
 * }
 *
 * this validator warns if ExampleComponent is passed an `items` prop but not `itemId`
 */
var withRequiredProp = function withRequiredProp(proptype, requiredPropName, messageDescription) {
  var validator = function validator() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var props = args[0],
        propName = args[1]; // run the proptype for this property

    var result = proptype.apply(void 0, args); // if the property type checking passed then check for the required prop

    if (result == null) {
      // if this property was passed, check that the required property also exists
      if (props[propName] != null && props[requiredPropName] == null) {
        result = new Error("Property \"".concat(propName, "\" was passed without corresponding property \"").concat(requiredPropName, "\"").concat(messageDescription ? "; ".concat(messageDescription) : ''));
      }
    }

    return result;
  };

  return validator;
};

exports.withRequiredProp = withRequiredProp;