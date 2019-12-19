function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { render, mount } from 'enzyme';
import { requiredProps } from '../../test';
import { EuiCard } from './card';
import { EuiIcon } from '../icon';
jest.mock('./../form/form_row/make_id', function () {
  return function () {
    return 'generated-id';
  };
});
describe('EuiCard', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiCard, _extends({
      title: "Card title",
      description: "Card description"
    }, requiredProps)));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    test('icon', function () {
      var component = render(React.createElement(EuiCard, {
        title: "Card title",
        description: "Card description",
        icon: React.createElement(EuiIcon, {
          className: "myIconClass",
          type: "apmApp"
        })
      }));
      expect(component).toMatchSnapshot();
    });
    test('horizontal', function () {
      var component = render(React.createElement(EuiCard, {
        title: "Card title",
        description: "Card description",
        layout: "horizontal"
      }));
      expect(component).toMatchSnapshot();
    });
    describe('href', function () {
      it('supports href as a link', function () {
        var component = mount(React.createElement(EuiCard, {
          title: "Hoi",
          description: "There",
          href: "#"
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('onClick', function () {
      it('supports onClick as a link', function () {
        var handler = jest.fn();
        var component = mount(React.createElement(EuiCard, {
          title: "Hoi",
          description: "There",
          href: "#",
          onClick: handler
        }));
        component.find('a').simulate('click');
        expect(handler.mock.calls.length).toEqual(1);
      });
      it('supports onClick as a button', function () {
        var handler = jest.fn();
        var component = mount(React.createElement(EuiCard, {
          title: "Hoi",
          description: "There",
          onClick: handler
        }));
        component.find('button').simulate('click');
        expect(handler.mock.calls.length).toEqual(1);
      });
    });
    test('titleElement', function () {
      var component = render(React.createElement(EuiCard, {
        title: "Card title",
        description: "Card description",
        titleElement: "h4"
      }));
      expect(component).toMatchSnapshot();
    });
    test('titleSize', function () {
      var component = render(React.createElement(EuiCard, {
        title: "Card title",
        description: "Card description",
        titleSize: "xs"
      }));
      expect(component).toMatchSnapshot();
    });
    test('footer', function () {
      var component = render(React.createElement(EuiCard, {
        title: "Card title",
        description: "Card description",
        footer: React.createElement("span", null, "Footer")
      }));
      expect(component).toMatchSnapshot();
    });
    test('children', function () {
      var component = render(React.createElement(EuiCard, {
        title: "Card title",
        description: "Card description"
      }, "Child"));
      expect(component).toMatchSnapshot();
    });
    test('textAlign', function () {
      var component = render(React.createElement(EuiCard, {
        title: "Card title",
        description: "Card description",
        textAlign: "right"
      }));
      expect(component).toMatchSnapshot();
    });
    test('display', function () {
      var component = render(React.createElement(EuiCard, {
        title: "Card title",
        description: "Card description",
        display: "plain"
      }));
      expect(component).toMatchSnapshot();
    });
    test('selectable', function () {
      var component = render(React.createElement(EuiCard, {
        title: "Card title",
        description: "Card description",
        selectable: {
          onClick: function onClick() {}
        }
      }));
      expect(component).toMatchSnapshot();
    });
  });
});