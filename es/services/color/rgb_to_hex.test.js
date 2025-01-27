import { rgbToHex } from './rgb_to_hex';
describe('rgbToHex ', function () {
  describe('validation', function () {
    it('should return an empty string for malformed input', function () {
      expect(rgbToHex('fred')).toEqual('');
      expect(rgbToHex('rgb(fred')).toEqual('');
      expect(rgbToHex('rgb(fred, bob, banana')).toEqual('');
      expect(rgbToHex('rgb(0, 3, 5')).toEqual('');
      expect(rgbToHex('rgba(0, 3, 5')).toEqual('');
      expect(rgbToHex('rgba(0, 3, 5, 99)')).toEqual('');
    });
  });
  describe('rgb()', function () {
    it('should handle rgb() without whitespace', function () {
      expect(rgbToHex('rgb(12,34,56)')).toEqual('#0c2238');
    });
    it('should handle rgb() with whitespace', function () {
      expect(rgbToHex('rgb ( 12 , 34 , 56 )')).toEqual('#0c2238');
    });
  });
  describe('rgba()', function () {
    it('should handle no whitespace', function () {
      expect(rgbToHex('rgba(12,34,56,0.4)')).toEqual('#0c2238');
    });
    it('should handle whitespace', function () {
      expect(rgbToHex('rgba ( 12 , 34 , 56 , 0.4 )')).toEqual('#0c2238');
    });
    it('should handle integer maximum alpha', function () {
      expect(rgbToHex('rgba(12,34,56,1)')).toEqual('#0c2238');
    });
    it('should handle decimal maximum alpha', function () {
      expect(rgbToHex('rgba(12,34,56,1.00000)')).toEqual('#0c2238');
    });
    it('should handle integer zero alpha', function () {
      expect(rgbToHex('rgba(12,34,56,0)')).toEqual('#0c2238');
    });
    it('should handle decimal zero alpha', function () {
      expect(rgbToHex('rgba(12,34,56,0.0000)')).toEqual('#0c2238');
    });
  });
});