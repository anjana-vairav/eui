// eslint-disable-line import/no-unresolved
import { flattenOptionGroups, getSelectedOptionForSearchValue, getMatchingOptions } from './matching_options';
var options = [{
  label: 'Titan',
  'data-test-subj': 'titanOption'
}, {
  label: 'Saturn',
  'data-test-subj': 'saturnOption'
}, {
  label: 'Mimas'
}];
describe('flattenOptionGroups', function () {
  test('it flattens one level of options', function () {
    // Assemble
    var input = [{
      label: 'Titan',
      'data-test-subj': 'titanOption'
    }, {
      label: 'Enceladus',
      options: [{
        label: 'Saturn',
        'data-test-subj': 'saturnOption'
      }]
    }, {
      label: 'Mimas'
    }];
    var expected = options; // Act

    var got = flattenOptionGroups(input); // Assert

    expect(got).toMatchObject(expected);
  });
});
describe('getSelectedOptionForSearchValue', function () {
  test('gets the first matching selected option for search value', function () {
    // Assemble
    var expected = {
      label: 'Saturn',
      'data-test-subj': 'saturnOption'
    }; // Act

    var got = getSelectedOptionForSearchValue('saturn', options); // Assert

    expect(got).toMatchObject(expected);
  });
});
describe('getSelectedOptionForSearchValue', function () {
  test('returns undefined when no matching option found for search value', function () {
    // Act
    var got = getSelectedOptionForSearchValue('Pluto', options); // Assert

    expect(got).toBeUndefined();
  });
  test('gets the first matching selected option for search value', function () {
    // Assemble
    var expected = {
      label: 'Saturn',
      'data-test-subj': 'saturnOption'
    }; // Act

    var got = getSelectedOptionForSearchValue('saturn', options); // Assert

    expect(got).toMatchObject(expected);
  });
});
var testCases = [{
  options: options,
  selectedOptions: [{
    label: 'Saturn',
    'data-test-subj': 'saturnOption'
  }],
  searchValue: 'saturn',
  isPreFiltered: false,
  showPrevSelected: false,
  expected: []
}, {
  options: options,
  selectedOptions: [{
    label: 'Saturn',
    'data-test-subj': 'saturnOption'
  }],
  searchValue: 'saturn',
  isPreFiltered: true,
  showPrevSelected: false,
  expected: [{
    'data-test-subj': 'titanOption',
    label: 'Titan'
  }, {
    label: 'Mimas'
  }]
}, {
  options: options,
  selectedOptions: [{
    label: 'Saturn',
    'data-test-subj': 'saturnOption'
  }],
  searchValue: 'saturn',
  isPreFiltered: false,
  showPrevSelected: true,
  expected: [{
    'data-test-subj': 'saturnOption',
    label: 'Saturn'
  }]
}, {
  options: options,
  selectedOptions: [{
    label: 'Saturn',
    'data-test-subj': 'saturnOption'
  }],
  searchValue: 'saturn',
  isPreFiltered: true,
  showPrevSelected: true,
  expected: [{
    'data-test-subj': 'titanOption',
    label: 'Titan'
  }, {
    'data-test-subj': 'saturnOption',
    label: 'Saturn'
  }, {
    label: 'Mimas'
  }]
}];
describe('getMatchingOptions', function () {
  test.each(testCases)('.getMatchingOptions(%o)', function (testCase) {
    expect(getMatchingOptions(testCase.options, testCase.selectedOptions, testCase.searchValue, testCase.isPreFiltered, testCase.showPrevSelected)).toMatchObject(testCase.expected);
  });
});