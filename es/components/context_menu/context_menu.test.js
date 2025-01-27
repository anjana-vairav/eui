function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

import React from 'react';
import { render, mount } from 'enzyme';
import { requiredProps, takeMountedSnapshot } from '../../test';
import { EuiContextMenu } from './context_menu';
import { setTimeout } from 'timers';
var panel2 = {
  id: 2,
  title: '2',
  content: React.createElement("div", null, "2")
};
var panel1 = {
  id: 1,
  title: '1',
  width: 400,
  items: [{
    name: '2a',
    panel: 2
  }, {
    name: '2b',
    panel: 2
  }, {
    name: '2c',
    panel: 2
  }]
};
var panel0 = {
  id: 0,
  title: '0',
  items: [{
    name: '1',
    panel: 1
  }]
};
var panels = [panel0, panel1, panel2];
export var tick = function tick() {
  var ms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
};
describe('EuiContextMenu', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiContextMenu, requiredProps));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    describe('panels and initialPanelId', function () {
      it('renders the referenced panel', function () {
        var component = render(React.createElement(EuiContextMenu, {
          panels: panels,
          initialPanelId: 2
        }));
        expect(component).toMatchSnapshot();
      });
      it('allows you to click the title button to go back to the previous panel',
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var component;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                component = mount(React.createElement(EuiContextMenu, {
                  panels: panels,
                  initialPanelId: 2
                }));
                _context.next = 3;
                return tick(20);

              case 3:
                expect(takeMountedSnapshot(component)).toMatchSnapshot(); // Navigate to a different panel.

                component.find('[data-test-subj="contextMenuPanelTitleButton"]').simulate('click');
                _context.next = 7;
                return tick(20);

              case 7:
                expect(takeMountedSnapshot(component)).toMatchSnapshot();

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      })));
    });
  });
});