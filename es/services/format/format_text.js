import { isNil } from '../predicate';
export var formatText = function formatText(value) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    nil: ''
  };
  return isNil(value) ? options.nil : value.toString();
};