"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _test = require("../../test");

var _facet_group = require("./facet_group");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('EuiFacetGroup', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_facet_group.EuiFacetGroup, _test.requiredProps));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    describe('layout', function () {
      it('is rendered', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_facet_group.EuiFacetGroup, {
          layout: "horizontal"
        }));
        expect(component).toMatchSnapshot();
      });
    });
  });
});