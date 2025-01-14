function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test/required_props';
import { EuiAvatar, SIZES } from './avatar';
describe('EuiAvatar', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiAvatar, _extends({
      name: "name"
    }, requiredProps)));
    expect(component).toMatchSnapshot();
  });
  test('allows a name composed entirely of whitespace', function () {
    var component = render(React.createElement(EuiAvatar, _extends({
      name: "  "
    }, requiredProps)));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    describe('imageUrl', function () {
      it('is rendered', function () {
        var component = render(React.createElement(EuiAvatar, {
          name: "name",
          imageUrl: "image url"
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('size', function () {
      SIZES.forEach(function (size) {
        it("".concat(size, " is rendered"), function () {
          var component = render(React.createElement(EuiAvatar, {
            name: "name",
            size: size
          }));
          expect(component).toMatchSnapshot();
        });
      });
    });
    describe('initials', function () {
      it('is rendered', function () {
        var component = render(React.createElement(EuiAvatar, {
          name: "name",
          initials: "lo"
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('initialsLength', function () {
      it('is rendered', function () {
        var component = render(React.createElement(EuiAvatar, {
          name: "name",
          initialsLength: 2
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('type', function () {
      it('is rendered', function () {
        var component = render(React.createElement(EuiAvatar, {
          name: "name",
          type: "space"
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('color', function () {
      it('is rendered', function () {
        var component = render(React.createElement(EuiAvatar, {
          name: "name",
          color: "#000"
        }));
        expect(component).toMatchSnapshot();
      });
    });
  });
  test('should throw error if color is not a hex', function () {
    var component = function component() {
      return render(React.createElement(EuiAvatar, {
        name: "name",
        color: "rgba(0,0,0,0)"
      }));
    };

    expect(component).toThrowErrorMatchingSnapshot();
  });
});