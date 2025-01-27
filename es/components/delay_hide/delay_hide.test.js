function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

import React from 'react';
import { mount } from 'enzyme';
import { EuiDelayHide } from './index';
describe('when EuiDelayHide is visible initially', function () {
  function getWrapper() {
    jest.useFakeTimers();
    return mount(React.createElement(EuiDelayHide, {
      hide: false,
      render: function render() {
        return React.createElement("div", null, "Hello World");
      }
    }));
  }

  test('it should be visible initially',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var wrapper;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            wrapper = getWrapper();
            wrapper.setProps({
              hide: true
            });
            expect(wrapper.html()).toEqual('<div>Hello World</div>');

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  })));
  test('it should be visible after 900ms', function () {
    var wrapper = getWrapper();
    wrapper.setProps({
      hide: true
    });
    jest.advanceTimersByTime(900);
    expect(wrapper.html()).toEqual('<div>Hello World</div>');
  });
  test('it should be hidden after 1100ms', function () {
    var wrapper = getWrapper();
    wrapper.setProps({
      hide: true
    });
    jest.advanceTimersByTime(1100);
    wrapper.setProps({});
    expect(wrapper.html()).toEqual(null);
  });
  test('it should be visible after 1100ms regardless of prop changes in-between', function () {
    var wrapper = getWrapper();
    wrapper.setProps({
      hide: true
    });
    wrapper.setProps({
      hide: false
    });
    jest.advanceTimersByTime(1100);
    expect(wrapper.html()).toEqual('<div>Hello World</div>');
  });
  test('it should hide immediately after prop change, if it has been displayed for 1100ms', function () {
    var wrapper = getWrapper();
    var currentTime = Date.now();
    jest.advanceTimersByTime(1100);
    jest.spyOn(Date, 'now').mockReturnValue(currentTime + 1100);
    expect(wrapper.html()).toEqual('<div>Hello World</div>');
    wrapper.setProps({
      hide: true
    });
    expect(wrapper.html()).toEqual(null);
  });
});
describe('when EuiDelayHide parent updates', function () {
  it('should still hide correctly', function () {
    jest.useFakeTimers();
    var wrapper = mount(React.createElement(EuiDelayHide, {
      hide: true,
      render: function render() {
        return React.createElement("div", null, "Hello World");
      }
    }));
    wrapper.setProps({
      hide: false
    });
    jest.advanceTimersByTime(1100);
    wrapper.setProps({}); // simulate parent component re-rendering

    wrapper.setProps({
      hide: true
    });
    jest.advanceTimersByTime(1100);
    expect(wrapper.html()).toEqual(null);
  });
});
describe('when EuiDelayHide is hidden initially', function () {
  function getWrapper() {
    jest.useFakeTimers();
    return mount(React.createElement(EuiDelayHide, {
      hide: true,
      render: function render() {
        return React.createElement("div", null, "Hello World");
      }
    }));
  }

  test('it should be hidden initially',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var wrapper;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            wrapper = getWrapper();
            expect(wrapper.html()).toEqual(null);

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  })));
  test('it should become visible immediately after prop change',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3() {
    var wrapper;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            wrapper = getWrapper();
            wrapper.setProps({
              hide: false
            });
            expect(wrapper.html()).toEqual('<div>Hello World</div>');

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  })));
  test('it should be visible for at least 1100ms before hiding',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4() {
    var wrapper;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            wrapper = getWrapper();
            wrapper.setProps({
              hide: false
            });
            wrapper.setProps({
              hide: true
            });
            jest.advanceTimersByTime(900);
            expect(wrapper.html()).toEqual('<div>Hello World</div>');
            jest.advanceTimersByTime(200);
            wrapper.setProps({});
            expect(wrapper.html()).toEqual(null);

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  })));
});
describe('when EuiDelayHide is visible initially and has a minimumDuration of 2000ms ', function () {
  function getWrapper() {
    jest.useFakeTimers();
    var wrapper = mount(React.createElement(EuiDelayHide, {
      hide: false,
      minimumDuration: 2000,
      render: function render() {
        return React.createElement("div", null, "Hello World");
      }
    }));
    wrapper.setProps({
      hide: true
    });
    return wrapper;
  }

  test('it should be visible initially',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5() {
    var wrapper;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            wrapper = getWrapper();
            expect(wrapper.html()).toEqual('<div>Hello World</div>');

          case 2:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  })));
  test('it should be visible after 1900ms', function () {
    var wrapper = getWrapper();
    jest.advanceTimersByTime(1900);
    expect(wrapper.html()).toEqual('<div>Hello World</div>');
  });
  test('it should be hidden after 2100ms', function () {
    var wrapper = getWrapper();
    jest.advanceTimersByTime(2100);
    wrapper.setProps({});
    expect(wrapper.html()).toEqual(null);
  });
});
describe('when EuiDelayHide has been visible and become hidden', function () {
  it('should still be visible for the minimum duration the second time', function () {
    jest.useFakeTimers();
    var wrapper = mount(React.createElement(EuiDelayHide, {
      hide: true,
      render: function render() {
        return React.createElement("div", null, "Hello World");
      }
    }));
    wrapper.setProps({
      hide: false
    });
    jest.advanceTimersByTime(1100);
    wrapper.setProps({
      hide: true
    });
    jest.advanceTimersByTime(100);
    wrapper.setProps({
      hide: false
    });
    wrapper.setProps({
      hide: true
    });
    expect(wrapper.html()).toEqual('<div>Hello World</div>');
    jest.advanceTimersByTime(1100);
    wrapper.setProps({});
    expect(wrapper.html()).toEqual(null);
  });
});