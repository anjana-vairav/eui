"use strict";

var _react = _interopRequireDefault(require("react"));

var _icon = require("../icon");

var _token = require("../token");

var _enzyme = require("enzyme");

var _required_props = require("../../test/required_props");

var _tree_view = require("./tree_view");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// Mock the htmlIdGenerator to generate predictable ids for snapshot tests
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
    var component = (0, _enzyme.render)(_react.default.createElement(_tree_view.EuiTreeView, _extends({
      items: [{
        label: 'Item One',
        id: 'item_one',
        icon: _react.default.createElement(_icon.EuiIcon, {
          type: "folderClosed"
        }),
        iconWhenExpanded: _react.default.createElement(_icon.EuiIcon, {
          type: "folderOpen"
        }),
        isExpanded: true,
        children: [{
          label: 'Item A',
          id: 'item_a',
          icon: _react.default.createElement(_icon.EuiIcon, {
            type: "document"
          })
        }, {
          label: 'Item B',
          id: 'item_b',
          icon: _react.default.createElement(_icon.EuiIcon, {
            type: "arrowRight"
          }),
          iconWhenExpanded: _react.default.createElement(_icon.EuiIcon, {
            type: "arrowDown"
          }),
          children: [{
            label: 'A Cloud',
            id: 'item_cloud',
            icon: _react.default.createElement(_token.EuiToken, {
              iconType: "tokenConstant"
            })
          }, {
            label: "I'm a Bug",
            id: 'item_bug',
            icon: _react.default.createElement(_token.EuiToken, {
              iconType: "tokenEnum"
            })
          }]
        }, {
          label: 'Item C',
          id: 'item_c',
          icon: _react.default.createElement(_icon.EuiIcon, {
            type: "arrowRight"
          }),
          iconWhenExpanded: _react.default.createElement(_icon.EuiIcon, {
            type: "arrowDown"
          }),
          children: [{
            label: 'Another Cloud',
            id: 'item_cloud2',
            icon: _react.default.createElement(_token.EuiToken, {
              iconType: "tokenConstant"
            })
          }, {
            label: 'Another Bug',
            id: 'item_bug2',
            icon: _react.default.createElement(_token.EuiToken, {
              iconType: "tokenEnum"
            })
          }]
        }]
      }, {
        label: 'Item Two',
        id: 'item_two'
      }]
    }, _required_props.requiredProps)));
    expect(component).toMatchSnapshot();
  });
});