"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../../test/required_props");

var _header_alert = require("./header_alert");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

jest.mock('./../../form/form_row/make_id', function () {
  return function () {
    return 'generated-id';
  };
});
describe('EuiHeaderAlert', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_header_alert.EuiHeaderAlert, _extends({}, _required_props.requiredProps, {
      title: "title",
      date: "date"
    })));
    expect(component).toMatchSnapshot();
  });
  test('renders action', function () {
    var action = _react.default.createElement("button", null, "Quietly take to the ship");

    var component = (0, _enzyme.render)(_react.default.createElement(_header_alert.EuiHeaderAlert, _extends({}, _required_props.requiredProps, {
      title: "title",
      date: "date",
      action: action
    })));
    expect(component).toMatchSnapshot();
  });
  test('renders title as an element', function () {
    var title = _react.default.createElement("h2", null, "Circumambulate the city");

    var component = (0, _enzyme.render)(_react.default.createElement(_header_alert.EuiHeaderAlert, _extends({}, _required_props.requiredProps, {
      date: "date",
      title: title
    })));
    expect(component).toMatchSnapshot();
  });
  test('renders date as an element', function () {
    var date = _react.default.createElement("h2", null, "October 18, 1851");

    var component = (0, _enzyme.render)(_react.default.createElement(_header_alert.EuiHeaderAlert, _extends({}, _required_props.requiredProps, {
      title: "shazm",
      date: date
    })));
    expect(component).toMatchSnapshot();
  });
});