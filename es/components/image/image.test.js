function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test';
import { EuiImage } from './image';
describe('EuiImage', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiImage, _extends({
      alt: "alt",
      size: "l",
      url: "/cat.jpg"
    }, requiredProps)));
    expect(component).toMatchSnapshot();
  });
  test('is rendered and allows full screen', function () {
    var component = render(React.createElement(EuiImage, _extends({
      alt: "alt",
      size: "l",
      url: "/cat.jpg",
      allowFullScreen: true
    }, requiredProps)));
    expect(component).toMatchSnapshot();
  });
});