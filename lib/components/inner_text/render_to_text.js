"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useRenderToText = useRenderToText;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _inner_text = require("./inner_text");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useRenderToText(node) {
  var placeholder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var _useInnerText = (0, _inner_text.useInnerText)(placeholder),
      _useInnerText2 = _slicedToArray(_useInnerText, 2),
      ref = _useInnerText2[0],
      text = _useInnerText2[1];

  (0, _react.useEffect)(function () {
    var hostNode = document.createDocumentFragment();
    (0, _reactDom.render)(_react.default.createElement("div", {
      ref: ref
    }, node), hostNode);
    return function () {
      // since we're in React's lifecycle via `useEffect`, wait a
      // tick to escape otherwise React performs multiple unmounts 🤷
      requestAnimationFrame(function () {
        (0, _reactDom.unmountComponentAtNode)(hostNode);
      });
    };
  }, [node, ref]);
  return text || placeholder;
}