"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// Generate statistically almost-certainly-unique `id`s for associating form
// inputs with their labels and other descriptive text elements.
function makeId() {
  return Math.random().toString(36).slice(-8);
}

var _default = makeId;
exports.default = _default;
module.exports = exports.default;