var getSelectedOptionForSearchValue = function getSelectedOptionForSearchValue(searchValue, selectedOptions) {
  var normalizedSearchValue = searchValue.toLowerCase();
  return selectedOptions.find(function (option) {
    return option.label.toLowerCase() === normalizedSearchValue;
  });
};

var collectMatchingOption = function collectMatchingOption(accumulator, option, normalizedSearchValue, isPreFiltered, selectedOptions) {
  // Don't show options that have already been requested if
  // the selectedOptions list exists
  if (selectedOptions) {
    var selectedOption = getSelectedOptionForSearchValue(option.label, selectedOptions);

    if (selectedOption) {
      return false;
    }
  } // If the options have already been prefiltered then we can skip filtering against the search value.
  // TODO: I still don't quite understand how this works when hooked up to async


  if (isPreFiltered) {
    accumulator.push(option);
    return;
  }

  if (!normalizedSearchValue) {
    accumulator.push(option);
    return;
  }

  var normalizedOption = option.label.trim().toLowerCase();

  if (normalizedOption.includes(normalizedSearchValue)) {
    accumulator.push(option);
  }
};

export var getMatchingOptions = function getMatchingOptions(
/**
 * All available options to match against
 */
options, searchValue, isPreFiltered, selectedOptions) {
  var normalizedSearchValue = searchValue.trim().toLowerCase();
  var matchingOptions = [];
  options.forEach(function (option) {
    collectMatchingOption(matchingOptions, option, normalizedSearchValue, isPreFiltered, selectedOptions);
  });
  return matchingOptions;
};