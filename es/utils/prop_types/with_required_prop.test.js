import { withRequiredProp } from './with_required_prop';
import PropTypes from 'prop-types';
describe('withRequiredProp', function () {
  it('warns when the underlying prop validator fails', function () {
    expect(function () {
      PropTypes.checkPropTypes({
        exampleProp: withRequiredProp(PropTypes.string, 'requiredProp')
      }, {
        exampleProp: 15
      }, 'exampleProp', 'ExampleComponent');
    }).toThrowErrorMatchingSnapshot();
  });
  it('warns when the base prop is present and valid but the required prop is missing', function () {
    expect(function () {
      PropTypes.checkPropTypes({
        exampleProp: withRequiredProp(PropTypes.string, 'requiredProp')
      }, {
        exampleProp: 'hello'
      }, 'exampleProp', 'ExampleComponent');
    }).toThrowErrorMatchingSnapshot();
  });
  it('warns with a custom message when validation fails', function () {
    expect(function () {
      PropTypes.checkPropTypes({
        exampleProp: withRequiredProp(PropTypes.string, 'requiredProp', 'a custom message')
      }, {
        exampleProp: 'hello'
      }, 'exampleProp', 'ExampleComponent');
    }).toThrowErrorMatchingSnapshot();
  });
  it('does not warn when the base property is missing', function () {
    expect(function () {
      PropTypes.checkPropTypes({
        exampleProp: withRequiredProp(PropTypes.string, 'requiredProp')
      }, {}, 'exampleProp', 'ExampleComponent');
    }).not.toThrow();
  });
  it('does not warn when both the base property and required properties exist', function () {
    expect(function () {
      PropTypes.checkPropTypes({
        exampleProp: withRequiredProp(PropTypes.string, 'requiredProp'),
        requiredProp: PropTypes.number
      }, {
        exampleProp: 'hello',
        requiredProp: 5
      }, 'exampleProp', 'ExampleComponent');
    }).not.toThrow();
  });
});