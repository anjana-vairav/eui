"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../../test/required_props");

var _selectable_list = require("./selectable_list");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// Mock the htmlIdGenerator to generate predictable ids for snapshot tests
jest.mock('../../../services/accessibility/html_id_generator', function () {
  return {
    htmlIdGenerator: function htmlIdGenerator() {
      return function () {
        return 'htmlId';
      };
    }
  };
});
var options = [{
  label: 'Titan',
  'data-test-subj': 'titanOption'
}, {
  label: 'Enceladus'
}, {
  label: 'Mimas'
}, {
  label: "Pandora is one of Saturn's moons, named for a Titaness of Greek mythology"
}, {
  label: 'Tethys'
}, {
  label: 'Hyperion'
}]; // tslint:disable:no-empty

describe('EuiSelectableListItem', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_selectable_list.EuiSelectableList, _extends({
      options: options,
      onOptionClick: function onOptionClick() {}
    }, _required_props.requiredProps)));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    test('visibleOptions', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_selectable_list.EuiSelectableList, {
        options: options,
        visibleOptions: options.slice(2),
        onOptionClick: function onOptionClick() {}
      }));
      expect(component).toMatchSnapshot();
    });
    test('searchValue', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_selectable_list.EuiSelectableList, {
        options: options,
        searchValue: "Mi",
        onOptionClick: function onOptionClick() {}
      }));
      expect(component).toMatchSnapshot();
    });
    test('searchValue', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_selectable_list.EuiSelectableList, {
        options: options,
        searchValue: "Mi",
        onOptionClick: function onOptionClick() {}
      }));
      expect(component).toMatchSnapshot();
    });
    test('renderOption', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_selectable_list.EuiSelectableList, {
        options: options,
        renderOption: function renderOption(option, searchValue) {
          return _react.default.createElement("span", null, searchValue, " => ", option.label);
        },
        onOptionClick: function onOptionClick() {}
      }));
      expect(component).toMatchSnapshot();
    });
    test('height is forced', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_selectable_list.EuiSelectableList, {
        options: options,
        height: 200,
        onOptionClick: function onOptionClick() {}
      }));
      expect(component).toMatchSnapshot();
    });
    test('height is full', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_selectable_list.EuiSelectableList, {
        options: options,
        height: "full",
        onOptionClick: function onOptionClick() {}
      }));
      expect(component).toMatchSnapshot();
    });
    test('allowExclusions', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_selectable_list.EuiSelectableList, {
        options: options,
        allowExclusions: true,
        onOptionClick: function onOptionClick() {}
      }));
      expect(component).toMatchSnapshot();
    });
    test('activeOptionIndex', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_selectable_list.EuiSelectableList, {
        options: options,
        activeOptionIndex: 2,
        onOptionClick: function onOptionClick() {}
      }));
      expect(component).toMatchSnapshot();
    });
    test('rowHeight', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_selectable_list.EuiSelectableList, {
        options: options,
        rowHeight: 20,
        onOptionClick: function onOptionClick() {}
      }));
      expect(component).toMatchSnapshot();
    });
    test('showIcons can be turned off', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_selectable_list.EuiSelectableList, {
        options: options,
        showIcons: false,
        onOptionClick: function onOptionClick() {}
      }));
      expect(component).toMatchSnapshot();
    });
    test('singleSelection can be turned on', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_selectable_list.EuiSelectableList, {
        options: options,
        singleSelection: true,
        onOptionClick: function onOptionClick() {}
      }));
      expect(component).toMatchSnapshot();
    });
    test('singleSelection can be forced so that at least one must be selected', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_selectable_list.EuiSelectableList, {
        options: options,
        singleSelection: "always",
        onOptionClick: function onOptionClick() {}
      }));
      expect(component).toMatchSnapshot();
    });
    test('bordered', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_selectable_list.EuiSelectableList, {
        options: options,
        bordered: true,
        onOptionClick: function onOptionClick() {}
      }));
      expect(component).toMatchSnapshot();
    });
  });
});