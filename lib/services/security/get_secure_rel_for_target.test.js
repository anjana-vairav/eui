"use strict";

var _get_secure_rel_for_target = require("./get_secure_rel_for_target");

describe('getSecureRelForTarget', function () {
  describe('returns rel and noreferrer', function () {
    test('when target is not supplied', function () {
      expect((0, _get_secure_rel_for_target.getSecureRelForTarget)({
        href: undefined,
        target: undefined,
        rel: 'hello'
      })).toBe('hello noreferrer');
    });
    test('when target is empty', function () {
      expect((0, _get_secure_rel_for_target.getSecureRelForTarget)({
        href: undefined,
        target: '',
        rel: 'hello'
      })).toBe('hello noreferrer');
    });
    test('when target is not _blank', function () {
      expect((0, _get_secure_rel_for_target.getSecureRelForTarget)({
        href: undefined,
        target: '_self',
        rel: 'hello'
      })).toBe('hello noreferrer');
    });
  });
  describe('returns noopener noreferrer when domain is unsafe', function () {
    test('when href is not specified', function () {
      expect((0, _get_secure_rel_for_target.getSecureRelForTarget)({
        href: undefined,
        target: '_blank',
        rel: undefined
      })).toBe('noopener noreferrer');
    });
    test('when rel contains neither', function () {
      expect((0, _get_secure_rel_for_target.getSecureRelForTarget)({
        href: 'https://www.google.com/',
        target: '_blank',
        rel: undefined
      })).toBe('noopener noreferrer');
    });
    test('when rel contains both', function () {
      expect((0, _get_secure_rel_for_target.getSecureRelForTarget)({
        href: 'https://wwwelastic.co/',
        target: '_blank',
        rel: 'noopener noreferrer'
      })).toBe('noopener noreferrer');
    });
    test('when rel contains noopener', function () {
      expect((0, _get_secure_rel_for_target.getSecureRelForTarget)({
        href: 'wss://www.elastic.co/',
        target: '_blank',
        rel: 'noopener'
      })).toBe('noopener noreferrer');
    });
    test('when rel contains noreferrer', function () {
      expect((0, _get_secure_rel_for_target.getSecureRelForTarget)({
        href: 'smb://www.elastic.co/',
        target: '_blank',
        rel: 'noreferrer'
      })).toBe('noopener noreferrer');
    });
    test('including the original rel value', function () {
      expect((0, _get_secure_rel_for_target.getSecureRelForTarget)({
        href: '/foo/bar',
        target: '_blank',
        rel: 'nofollow'
      })).toBe('nofollow noopener noreferrer');
    });
  });
  describe('returns noopener when domain is safe', function () {
    test('when rel contains neither', function () {
      expect((0, _get_secure_rel_for_target.getSecureRelForTarget)({
        href: 'https://www.elastic.co',
        target: '_blank',
        rel: undefined
      })).toBe('noopener');
    });
    test('when rel contains both', function () {
      expect((0, _get_secure_rel_for_target.getSecureRelForTarget)({
        href: 'https://www.elastic.co',
        target: '_blank',
        rel: 'noopener noreferrer'
      })).toBe('noopener');
    });
    test('when rel contains noopener', function () {
      expect((0, _get_secure_rel_for_target.getSecureRelForTarget)({
        href: 'https://docs.elastic.co',
        target: '_blank',
        rel: 'noopener'
      })).toBe('noopener');
    });
    test('when rel contains noreferrer', function () {
      expect((0, _get_secure_rel_for_target.getSecureRelForTarget)({
        href: 'https://elastic.co',
        target: '_blank',
        rel: 'noreferrer'
      })).toBe('noopener');
    });
    test('including the original rel value', function () {
      expect((0, _get_secure_rel_for_target.getSecureRelForTarget)({
        href: 'http://discuss.elastic.co',
        target: '_blank',
        rel: 'nofollow'
      })).toBe('nofollow noopener');
    });
  });
  describe('returns no noreferrer when domain is safe without target _blank', function () {
    test('when target and rel is undefined', function () {
      expect((0, _get_secure_rel_for_target.getSecureRelForTarget)({
        href: 'http://discuss.elastic.co',
        target: undefined,
        rel: undefined
      })).toBe('');
    });
    test('when rel is specified', function () {
      expect((0, _get_secure_rel_for_target.getSecureRelForTarget)({
        href: 'https://discuss.elastic.co',
        target: undefined,
        rel: 'nofollow'
      })).toBe('nofollow');
    });
  });
});