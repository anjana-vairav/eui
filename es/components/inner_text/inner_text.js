function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

import PropTypes from "prop-types";

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import { useCallback, useEffect, useState } from 'react';
export function useInnerText(innerTextFallback) {
  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      ref = _useState2[0],
      setRef = _useState2[1];

  var _useState3 = useState(innerTextFallback),
      _useState4 = _slicedToArray(_useState3, 2),
      innerText = _useState4[0],
      setInnerText = _useState4[1];

  var updateInnerText = useCallback(function (node) {
    if (!node) return;
    setInnerText( // Check for `innerText` implementation rather than a simple OR check
    // because in real cases the result of `innerText` could correctly be `null`
    // while the result of `textContent` could correctly be non-`null` due to
    // differing reliance on browser layout calculations.
    // We prefer the result of `innerText`, if available.
    'innerText' in node ? node.innerText : node.textContent || innerTextFallback);
  }, [innerTextFallback]);
  useEffect(function () {
    var observer = new MutationObserver(function (mutationsList) {
      if (mutationsList.length) updateInnerText(ref);
    });

    if (ref) {
      updateInnerText(ref);
      observer.observe(ref, {
        characterData: true,
        subtree: true
      });
    }

    return function () {
      observer.disconnect();
    };
  }, [ref, updateInnerText]);
  return [setRef, innerText];
}
export var EuiInnerText = function EuiInnerText(_ref) {
  var children = _ref.children,
      fallback = _ref.fallback;

  var _useInnerText = useInnerText(fallback),
      _useInnerText2 = _slicedToArray(_useInnerText, 2),
      ref = _useInnerText2[0],
      innerText = _useInnerText2[1];

  return children(ref, innerText);
};
EuiInnerText.propTypes = {
  children: PropTypes.func.isRequired,
  fallback: PropTypes.string
};