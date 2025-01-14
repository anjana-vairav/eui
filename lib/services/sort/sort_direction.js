"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SortDirectionType = exports.SortDirection = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ASC = 'asc';
var DESC = 'desc';
var SortDirection = Object.freeze({
  ASC: ASC,
  DESC: DESC,
  isAsc: function isAsc(direction) {
    return direction === ASC;
  },
  reverse: function reverse(direction) {
    return this.isAsc(direction) ? DESC : ASC;
  }
});
exports.SortDirection = SortDirection;

var SortDirectionType = _propTypes.default.oneOf([ASC, DESC]);

exports.SortDirectionType = SortDirectionType;