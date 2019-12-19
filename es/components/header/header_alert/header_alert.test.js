function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../../test/required_props';
import { EuiHeaderAlert } from './header_alert';
jest.mock('./../../form/form_row/make_id', function () {
  return function () {
    return 'generated-id';
  };
});
describe('EuiHeaderAlert', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiHeaderAlert, _extends({}, requiredProps, {
      title: "title",
      date: "date"
    })));
    expect(component).toMatchSnapshot();
  });
  test('renders action', function () {
    var action = React.createElement("button", null, "Quietly take to the ship");
    var component = render(React.createElement(EuiHeaderAlert, _extends({}, requiredProps, {
      title: "title",
      date: "date",
      action: action
    })));
    expect(component).toMatchSnapshot();
  });
  test('renders title as an element', function () {
    var title = React.createElement("h2", null, "Circumambulate the city");
    var component = render(React.createElement(EuiHeaderAlert, _extends({}, requiredProps, {
      date: "date",
      title: title
    })));
    expect(component).toMatchSnapshot();
  });
  test('renders date as an element', function () {
    var date = React.createElement("h2", null, "October 18, 1851");
    var component = render(React.createElement(EuiHeaderAlert, _extends({}, requiredProps, {
      title: "shazm",
      date: date
    })));
    expect(component).toMatchSnapshot();
  });
});