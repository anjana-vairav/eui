function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useEffect } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { useInnerText } from './inner_text';
export function useRenderToText(node) {
  var placeholder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var _useInnerText = useInnerText(placeholder),
      _useInnerText2 = _slicedToArray(_useInnerText, 2),
      ref = _useInnerText2[0],
      text = _useInnerText2[1];

  useEffect(function () {
    var hostNode = document.createDocumentFragment();
    render(React.createElement("div", {
      ref: ref
    }, node), hostNode);
    return function () {
      // since we're in React's lifecycle via `useEffect`, wait a
      // tick to escape otherwise React performs multiple unmounts 🤷
      requestAnimationFrame(function () {
        unmountComponentAtNode(hostNode);
      });
    };
  }, [node, ref]);
  return text || placeholder;
}