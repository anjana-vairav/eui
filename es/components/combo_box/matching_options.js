function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// eslint-disable-line import/no-unresolved
export var flattenOptionGroups = function flattenOptionGroups(optionsOrGroups) {
  return optionsOrGroups.reduce(function (options, optionOrGroup) {
    if (optionOrGroup.options) {
      options.push.apply(options, _toConsumableArray(optionOrGroup.options));
    } else {
      options.push(optionOrGroup);
    }

    return options;
  }, []);
};
export var getSelectedOptionForSearchValue = function getSelectedOptionForSearchValue(searchValue, selectedOptions) {
  var normalizedSearchValue = searchValue.toLowerCase();
  return selectedOptions.find(function (option) {
    return option.label.toLowerCase() === normalizedSearchValue;
  });
};

var collectMatchingOption = function collectMatchingOption(accumulator, option, selectedOptions, normalizedSearchValue, isPreFiltered, showPrevSelected) {
  // Only show options which haven't yet been selected unless requested.
  var selectedOption = getSelectedOptionForSearchValue(option.label, selectedOptions);

  if (selectedOption && !showPrevSelected) {
    return false;
  } // If the options have already been pre-filtered then we can skip filtering against the search value.


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

export var getMatchingOptions = function getMatchingOptions(options, selectedOptions, searchValue, isPreFiltered, showPrevSelected) {
  var normalizedSearchValue = searchValue.trim().toLowerCase();
  var matchingOptions = [];
  options.forEach(function (option) {
    if (option.options) {
      var matchingOptionsForGroup = [];
      option.options.forEach(function (groupOption) {
        collectMatchingOption(matchingOptionsForGroup, groupOption, selectedOptions, normalizedSearchValue, isPreFiltered, showPrevSelected);
      });

      if (matchingOptionsForGroup.length > 0) {
        // Add option for group label
        matchingOptions.push({
          label: option.label,
          isGroupLabelOption: true
        }); // Add matching options for group

        matchingOptions.push.apply(matchingOptions, matchingOptionsForGroup);
      }
    } else {
      collectMatchingOption(matchingOptions, option, selectedOptions, normalizedSearchValue, isPreFiltered, showPrevSelected);
    }
  });
  return matchingOptions;
};