function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test/required_props';
import { EuiAspectRatio } from './aspect_ratio';
describe('EuiAspectRatio', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiAspectRatio, _extends({
      height: 4,
      width: 9
    }, requiredProps), React.createElement("iframe", {
      title: "Elastic is a search company",
      width: "560",
      height: "315",
      src: "https://www.youtube.com/embed/yJarWSLRM24",
      frameBorder: "0",
      allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
      allowFullScreen: true
    })));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    describe('maxWidth', function () {
      test('is rendered', function () {
        var component = render(React.createElement(EuiAspectRatio, _extends({
          height: 16,
          width: 9,
          maxWidth: 500
        }, requiredProps), React.createElement("iframe", {
          title: "Elastic is a search company",
          width: "560",
          height: "315",
          src: "https://www.youtube.com/embed/yJarWSLRM24",
          frameBorder: "0",
          allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
          allowFullScreen: true
        })));
        expect(component).toMatchSnapshot();
      });
    });
  });
});