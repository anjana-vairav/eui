function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { EuiIcon } from '../icon';
import { EuiToken } from '../token';
import { render } from 'enzyme';
import { requiredProps } from '../../test/required_props';
import { EuiTreeView } from './tree_view'; // Mock the htmlIdGenerator to generate predictable ids for snapshot tests

jest.mock('../../services/accessibility/html_id_generator', function () {
  return {
    htmlIdGenerator: function htmlIdGenerator() {
      return function () {
        return 'htmlId';
      };
    }
  };
});
describe('EuiTreeView', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiTreeView, _extends({
      items: [{
        label: 'Item One',
        id: 'item_one',
        icon: React.createElement(EuiIcon, {
          type: "folderClosed"
        }),
        iconWhenExpanded: React.createElement(EuiIcon, {
          type: "folderOpen"
        }),
        isExpanded: true,
        children: [{
          label: 'Item A',
          id: 'item_a',
          icon: React.createElement(EuiIcon, {
            type: "document"
          })
        }, {
          label: 'Item B',
          id: 'item_b',
          icon: React.createElement(EuiIcon, {
            type: "arrowRight"
          }),
          iconWhenExpanded: React.createElement(EuiIcon, {
            type: "arrowDown"
          }),
          children: [{
            label: 'A Cloud',
            id: 'item_cloud',
            icon: React.createElement(EuiToken, {
              iconType: "tokenConstant"
            })
          }, {
            label: "I'm a Bug",
            id: 'item_bug',
            icon: React.createElement(EuiToken, {
              iconType: "tokenEnum"
            })
          }]
        }, {
          label: 'Item C',
          id: 'item_c',
          icon: React.createElement(EuiIcon, {
            type: "arrowRight"
          }),
          iconWhenExpanded: React.createElement(EuiIcon, {
            type: "arrowDown"
          }),
          children: [{
            label: 'Another Cloud',
            id: 'item_cloud2',
            icon: React.createElement(EuiToken, {
              iconType: "tokenConstant"
            })
          }, {
            label: 'Another Bug',
            id: 'item_bug2',
            icon: React.createElement(EuiToken, {
              iconType: "tokenEnum"
            })
          }]
        }]
      }, {
        label: 'Item Two',
        id: 'item_two'
      }]
    }, requiredProps)));
    expect(component).toMatchSnapshot();
  });
});