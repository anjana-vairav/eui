"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../test/required_props");

var _description_list = require("./description_list");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('EuiDescriptionList', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_description_list.EuiDescriptionList, _required_props.requiredProps, "Content"));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    describe('listItems', function () {
      test('is rendered as strings and elements', function () {
        var listItems = [{
          title: 'Title 1',
          description: 'Description 1'
        }, {
          title: _react.default.createElement("em", null, "Title 2"),
          description: _react.default.createElement("code", null, "Description 2")
        }, {
          title: 'Title 3',
          description: 'Description 3'
        }];
        var component = (0, _enzyme.render)(_react.default.createElement(_description_list.EuiDescriptionList, {
          listItems: listItems
        }, "listItems will render instead of this content"));
        expect(component).toMatchSnapshot();
      });
    });
    describe('compressed', function () {
      test('is rendered', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_description_list.EuiDescriptionList, {
          compressed: true
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('type', function () {
      _description_list.TYPES.forEach(function (type) {
        test("".concat(type, " is rendered"), function () {
          var component = (0, _enzyme.render)(_react.default.createElement(_description_list.EuiDescriptionList, {
            type: type
          }));
          expect(component).toMatchSnapshot();
        });
      });
    });
    describe('align', function () {
      _description_list.ALIGNMENTS.forEach(function (alignment) {
        test("".concat(alignment, " is rendered"), function () {
          var component = (0, _enzyme.render)(_react.default.createElement(_description_list.EuiDescriptionList, {
            align: alignment
          }));
          expect(component).toMatchSnapshot();
        });
      });
    });
  });
});