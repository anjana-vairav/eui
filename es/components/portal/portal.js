function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * NOTE: We can't test this component because Enzyme doesn't support rendering
 * into portals.
 */
import React from 'react';
import PropTypes from "prop-types";
import { createPortal } from 'react-dom';
import { keysOf } from '../common';
export var insertPositions = {
  after: 'afterend',
  before: 'beforebegin'
};
export var INSERT_POSITIONS = keysOf(insertPositions);
export var EuiPortal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(EuiPortal, _React$Component);

  function EuiPortal(props) {
    var _this;

    _classCallCheck(this, EuiPortal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EuiPortal).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "portalNode", void 0);

    var insert = _this.props.insert;
    _this.portalNode = document.createElement('div');

    if (insert == null) {
      // no insertion defined, append to body
      document.body.appendChild(_this.portalNode);
    } else {
      // inserting before or after an element
      var _sibling = insert.sibling,
          _position = insert.position;

      _sibling.insertAdjacentElement(insertPositions[_position], _this.portalNode);
    }

    return _this;
  }

  _createClass(EuiPortal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updatePortalRef(this.portalNode);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.portalNode.parentNode) {
        this.portalNode.parentNode.removeChild(this.portalNode);
      }

      this.updatePortalRef(null);
    }
  }, {
    key: "updatePortalRef",
    value: function updatePortalRef(ref) {
      if (this.props.portalRef) {
        this.props.portalRef(ref);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return createPortal(this.props.children, this.portalNode);
    }
  }]);

  return EuiPortal;
}(React.Component);
EuiPortal.propTypes = {
  children: PropTypes.node.isRequired,
  insert: PropTypes.shape({
    sibling: PropTypes.any.isRequired,
    position: PropTypes.oneOf(["after", "before"]).isRequired
  }),
  portalRef: PropTypes.func
};
EuiPortal.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "updatePortalRef",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "ref",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "EuiPortal",
  "props": {
    "children": {
      "type": {
        "name": "node"
      },
      "required": true,
      "description": ""
    },
    "insert": {
      "type": {
        "name": "shape",
        "value": {
          "sibling": {
            "name": "any",
            "required": true
          },
          "position": {
            "name": "enum",
            "value": [{
              "value": "\"after\"",
              "computed": false
            }, {
              "value": "\"before\"",
              "computed": false
            }],
            "required": true
          }
        }
      },
      "required": false,
      "description": ""
    },
    "portalRef": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    }
  }
};