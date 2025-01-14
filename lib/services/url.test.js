"use strict";

var _url = require("./url");

describe('url', function () {
  describe('#isDomainSecure', function () {
    it('returns true for secure domains', function () {
      expect((0, _url.isDomainSecure)('https://elastic.co')).toEqual(true);
      expect((0, _url.isDomainSecure)('https://elastic.co?foo=bar')).toEqual(true);
      expect((0, _url.isDomainSecure)('https://elastic.co/')).toEqual(true);
      expect((0, _url.isDomainSecure)('https://www.elastic.co')).toEqual(true);
      expect((0, _url.isDomainSecure)('https://docs.elastic.co')).toEqual(true);
      expect((0, _url.isDomainSecure)('https://stats.elastic.co')).toEqual(true);
      expect((0, _url.isDomainSecure)('https://lots.of.kids.elastic.co')).toEqual(true);
      expect((0, _url.isDomainSecure)('https://elastic.co/cool/url/with?lots=of&params')).toEqual(true);
    });
    it('returns false for unsecure domains', function () {
      expect((0, _url.isDomainSecure)('https://wwwelastic.co')).toEqual(false);
      expect((0, _url.isDomainSecure)('https://www.zelastic.co')).toEqual(false);
      expect((0, _url.isDomainSecure)('https://*elastic.co')).toEqual(false);
      expect((0, _url.isDomainSecure)('http://elastic.com')).toEqual(false);
      expect((0, _url.isDomainSecure)('https://elastic.co.now')).toEqual(false);
      expect((0, _url.isDomainSecure)('elastic.co')).toEqual(false);
      expect((0, _url.isDomainSecure)('smb://www.elastic.co')).toEqual(false);
      expect((0, _url.isDomainSecure)('https://wwwelastic.co/cool/url/with?lots=of&params/https://elastic.co')).toEqual(false);
    });
  });
});