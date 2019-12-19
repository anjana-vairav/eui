function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test';
import { EuiEmptyPrompt } from './empty_prompt';
describe('EuiEmptyPrompt', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiEmptyPrompt, _extends({
      iconType: "arrowUp",
      title: React.createElement("h2", null, "Title"),
      body: React.createElement("p", null, "Body"),
      actions: React.createElement("div", null, "Actions")
    }, requiredProps)));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    describe('iconType', function () {
      test('renders alone', function () {
        var component = render(React.createElement(EuiEmptyPrompt, {
          iconType: "arrowUp"
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('title', function () {
      test('renders alone', function () {
        var component = render(React.createElement(EuiEmptyPrompt, {
          title: React.createElement("div", null, "title")
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('body', function () {
      test('renders alone', function () {
        var component = render(React.createElement(EuiEmptyPrompt, {
          body: "body"
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('actions', function () {
      test('renders alone', function () {
        var component = render(React.createElement(EuiEmptyPrompt, {
          actions: "actions"
        }));
        expect(component).toMatchSnapshot();
      });
      test('renders an array', function () {
        var component = render(React.createElement(EuiEmptyPrompt, {
          actions: ['action1', 'action2']
        }));
        expect(component).toMatchSnapshot();
      });
    });
  });
});