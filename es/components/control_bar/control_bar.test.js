function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { mount } from 'enzyme';
import { requiredProps, takeMountedSnapshot } from '../../test';
import { EuiControlBar } from './control_bar';

var handleClick = function handleClick() {
  console.log('You clicked');
};

var controls = [{
  controlType: 'breadcrumbs',
  id: 'current_file_path',
  responsive: true,
  breadcrumbs: [{
    text: 'src'
  }, {
    text: 'components'
  }]
}, {
  controlType: 'button',
  id: 'sound_the_alarm',
  label: 'Sound the Alarm',
  onClick: handleClick,
  'data-test-subj': 'dts'
}, {
  controlType: 'text',
  id: 'close_the_hatch',
  text: 'Close the Hatch'
}, {
  controlType: 'divider'
}, {
  controlType: 'icon',
  id: 'sample_icon',
  iconType: 'alert',
  color: 'danger',
  'aria-label': 'Sample Icon'
}, {
  controlType: 'spacer'
}, {
  controlType: 'tab',
  id: 'flight_815',
  label: 'Flight 815',
  onClick: handleClick
}];
describe('EuiControlBar', function () {
  test('is rendered', function () {
    var component = takeMountedSnapshot(mount(React.createElement(EuiControlBar, _extends({
      controls: controls
    }, requiredProps))));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    test('mobile is rendered', function () {
      var component = mount(React.createElement(EuiControlBar, {
        controls: controls,
        showOnMobile: true
      }));
      expect(component).toMatchSnapshot();
    });
    test('showContent is rendered', function () {
      var component = mount(React.createElement(EuiControlBar, {
        controls: controls,
        showContent: true
      }, "Content"));
      expect(component).toMatchSnapshot();
    });
    test('size is rendered', function () {
      var component = mount(React.createElement(EuiControlBar, {
        controls: controls,
        size: "s"
      }, "Content"));
      expect(component).toMatchSnapshot();
    });
    test('maxHeight is rendered', function () {
      var component = mount(React.createElement(EuiControlBar, {
        controls: controls,
        maxHeight: "20rem"
      }, "Content"));
      expect(component).toMatchSnapshot();
    });
    test('leftOffset is rendered', function () {
      var component = mount(React.createElement(EuiControlBar, {
        controls: controls,
        leftOffset: 200
      }, "Content"));
      expect(component).toMatchSnapshot();
    });
    test('rightOffset is rendered', function () {
      var component = mount(React.createElement(EuiControlBar, {
        controls: controls,
        rightOffset: 200
      }, "Content"));
      expect(component).toMatchSnapshot();
    });
    test('position is rendered', function () {
      var component = mount(React.createElement(EuiControlBar, {
        controls: controls,
        position: "absolute"
      }, "Content"));
      expect(component).toMatchSnapshot();
    });
  });
});