"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../test/required_props");

var _selectable = require("./selectable");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var options = [{
  label: 'Titan',
  'data-test-subj': 'titanOption'
}, {
  label: 'Enceladus'
}, {
  label: "Pandora is one of Saturn's moons, named for a Titaness of Greek mythology"
}];
describe('EuiSelectable', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_selectable.EuiSelectable, _extends({
      options: options
    }, _required_props.requiredProps)));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    test('searchable', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_selectable.EuiSelectable, {
        options: options,
        searchable: true
      }));
      expect(component).toMatchSnapshot();
    });
    test('singleSelection', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_selectable.EuiSelectable, {
        options: options,
        singleSelection: true
      }));
      expect(component).toMatchSnapshot();
    });
    test('allowExclusions', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_selectable.EuiSelectable, {
        options: options,
        allowExclusions: true
      }));
      expect(component).toMatchSnapshot();
    });
    test('isLoading', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_selectable.EuiSelectable, {
        options: options,
        isLoading: true
      }));
      expect(component).toMatchSnapshot();
    });
    test('height can be forced', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_selectable.EuiSelectable, {
        options: options,
        height: 200
      }));
      expect(component).toMatchSnapshot();
    });
    test('height can be full', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_selectable.EuiSelectable, {
        options: options,
        height: "full"
      }));
      expect(component).toMatchSnapshot();
    });
    test('renderOption', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_selectable.EuiSelectable, {
        options: options,
        renderOption: function renderOption(option, searchValue) {
          return _react.default.createElement("span", null, searchValue, " => ", option.label);
        }
      }));
      expect(component).toMatchSnapshot();
    });
  });
});