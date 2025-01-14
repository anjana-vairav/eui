"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDetectSchema = useDetectSchema;
exports.useMergedSchema = useMergedSchema;
exports.getDetailsForSchema = getDetailsForSchema;
exports.schemaDetectors = void 0;

var _react = _interopRequireWildcard(require("react"));

var _i18n = require("../i18n");

var _eui_palettes = require("../../services/color/eui_palettes");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var numericChars = new Set(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '-']);
var schemaDetectors = [{
  type: 'boolean',
  detector: function detector(value) {
    return value.toLowerCase() === 'true' || value.toLowerCase() === 'false' ? 1 : 0;
  },
  comparator: function comparator(a, b, direction) {
    var aValue = a.toLowerCase() === 'true';
    var bValue = b.toLowerCase() === 'true';
    if (aValue < bValue) return direction === 'asc' ? 1 : -1;
    if (aValue > bValue) return direction === 'asc' ? -1 : 1;
    return 0;
  },
  icon: 'invert',
  color: _eui_palettes.palettes.euiPaletteColorBlind.colors[5],
  sortTextAsc: _react.default.createElement(_i18n.EuiI18n, {
    token: "euiDataGridSchema.booleanSortTextAsc",
    default: "True-False"
  }),
  sortTextDesc: _react.default.createElement(_i18n.EuiI18n, {
    token: "euiDataGridSchema.booleanSortTextDesc",
    default: "False-True"
  })
}, {
  type: 'currency',
  detector: function detector(value) {
    var matchLength = (value.match( // currency prefers starting with 1-3 characters for the currency symbol
    // then it matches against numerical data + $
    /(^[^-(.]{1,3})?[$-(]*[\d,]+(\.\d*)?[$)]*/) || [''])[0].length; // if there is no currency symbol then reduce the score

    var hasCurrency = value.indexOf('$') !== -1;
    var confidenceAdjustment = hasCurrency ? 1 : 0.95;
    return matchLength / value.length * confidenceAdjustment || 0;
  },
  comparator: function comparator(a, b, direction) {
    var aChars = a.split('').filter(function (char) {
      return numericChars.has(char);
    });
    var aValue = parseFloat(aChars.join(''));
    var bChars = b.split('').filter(function (char) {
      return numericChars.has(char);
    });
    var bValue = parseFloat(bChars.join(''));
    if (aValue < bValue) return direction === 'asc' ? -1 : 1;
    if (aValue > bValue) return direction === 'asc' ? 1 : -1;
    return 0;
  },
  icon: 'currency',
  color: _eui_palettes.palettes.euiPaletteColorBlind.colors[0],
  sortTextAsc: _react.default.createElement(_i18n.EuiI18n, {
    token: "euiDataGridSchema.currencySortTextAsc",
    default: "Low-High"
  }),
  sortTextDesc: _react.default.createElement(_i18n.EuiI18n, {
    token: "euiDataGridSchema.currencySortTextDesc",
    default: "High-Low"
  })
}, {
  type: 'datetime',
  detector: function detector(value) {
    // matches the most common forms of ISO-8601
    var isoTimestampMatch = value.match( // 2019 - 09    - 17     T 12     : 18    : 32      .853     Z or -0600
    /^\d{2,4}-\d{1,2}-\d{1,2}(T?\d{1,2}:\d{1,2}:\d{1,2}(\.\d{3})?(Z|[+-]\d{4})?)?/); // matches 9 digits (seconds) or 13 digits (milliseconds) since unix epoch

    var unixTimestampMatch = value.match(/^(\d{9}|\d{13})$/);
    var isoMatchLength = isoTimestampMatch ? isoTimestampMatch[0].length : 0; // reduce the confidence of a unix timestamp match to 75%
    // (a column of all unix timestamps should be numeric instead)

    var unixMatchLength = unixTimestampMatch ? unixTimestampMatch[0].length * 0.75 : 0;
    return Math.max(isoMatchLength, unixMatchLength) / value.length || 0;
  },
  icon: 'calendar',
  color: _eui_palettes.palettes.euiPaletteColorBlind.colors[7],
  sortTextAsc: _react.default.createElement(_i18n.EuiI18n, {
    token: "euiDataGridSchema.dateSortTextAsc",
    default: "New-Old"
  }),
  sortTextDesc: _react.default.createElement(_i18n.EuiI18n, {
    token: "euiDataGridSchema.dateSortTextDesc",
    default: "Old-New"
  })
}, {
  type: 'numeric',
  detector: function detector(value) {
    var matchLength = (value.match(/[%-(]*[\d,]+(\.\d*)?[%)]*/) || [''])[0].length;
    return matchLength / value.length || 0;
  },
  comparator: function comparator(a, b, direction) {
    // sort on all digits groups
    var aGroups = a.split(/\D+/);
    var bGroups = b.split(/\D+/);
    var maxGroups = Math.max(aGroups.length, bGroups.length);

    for (var i = 0; i < maxGroups; i++) {
      // if A and B's group counts differ and they match until that difference, prefer whichever is shorter
      if (i >= aGroups.length) return direction === 'asc' ? -1 : 1;
      if (i >= bGroups.length) return direction === 'asc' ? 1 : -1;
      var aChars = aGroups[i];
      var bChars = bGroups[i];
      var aValue = parseInt(aChars, 10);
      var bValue = parseInt(bChars, 10);
      if (aValue < bValue) return direction === 'asc' ? -1 : 1;
      if (aValue > bValue) return direction === 'asc' ? 1 : -1;
    }

    return 0;
  },
  icon: 'number',
  color: _eui_palettes.palettes.euiPaletteColorBlind.colors[0],
  sortTextAsc: _react.default.createElement(_i18n.EuiI18n, {
    token: "euiDataGridSchema.numberSortTextAsc",
    default: "Low-High"
  }),
  sortTextDesc: _react.default.createElement(_i18n.EuiI18n, {
    token: "euiDataGridSchema.numberSortTextDesc",
    default: "High-Low"
  })
}, {
  type: 'json',
  detector: function detector(value) {
    // does this look like it might be a JSON object?
    var maybeArray = value[0] === '[' && value[value.length - 1] === ']';
    var maybeObject = value[0] === '{' && value[value.length - 1] === '}';
    if (!maybeArray && !maybeObject) return 0;

    try {
      JSON.parse(value);
      return 1;
    } catch (e) {
      return 0;
    }
  },
  comparator: function comparator(a, b, direction) {
    if (a.length > b.length) return direction === 'asc' ? 1 : -1;
    if (a.length < b.length) return direction === 'asc' ? 1 : -1;
    return 0;
  },
  icon: 'visVega',
  color: _eui_palettes.palettes.euiPaletteColorBlind.colors[3],
  sortTextAsc: _react.default.createElement(_i18n.EuiI18n, {
    token: "euiDataGridSchema.jsonSortTextAsc",
    default: "Small-Large"
  }),
  sortTextDesc: _react.default.createElement(_i18n.EuiI18n, {
    token: "euiDataGridSchema.jsonSortTextDesc",
    default: "Large-Small"
  })
}];
exports.schemaDetectors = schemaDetectors;

function scoreValueBySchemaType(value) {
  var schemaDetectors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var scores = [];

  for (var i = 0; i < schemaDetectors.length; i++) {
    var _schemaDetectors$i = schemaDetectors[i],
        _type = _schemaDetectors$i.type,
        _detector = _schemaDetectors$i.detector;

    var _score = _detector(value);

    scores.push({
      type: _type,
      score: _score
    });
  }

  return scores;
} // completely arbitrary minimum match I came up with
// represents lowest score a type detector can have to be considered valid


var MINIMUM_SCORE_MATCH = 0.5;

function useDetectSchema(inMemory, inMemoryValues, schemaDetectors, definedColumnSchemas, autoDetectSchema) {
  var schema = (0, _react.useMemo)(function () {
    var schema = {};

    if (autoDetectSchema === false) {
      return schema;
    }

    var columnSchemas = {}; // for each row, score each value by each detector and put the results on `columnSchemas`

    var rowIndices = Object.keys(inMemoryValues);
    var columnIdsWithDefinedSchemas = new Set(_toConsumableArray(inMemory && inMemory.skipColumns || []).concat(_toConsumableArray(Object.keys(definedColumnSchemas))));

    for (var i = 0; i < rowIndices.length; i++) {
      var rowIndex = rowIndices[i];
      var rowData = inMemoryValues[rowIndex];
      var columnIds = Object.keys(rowData);

      for (var j = 0; j < columnIds.length; j++) {
        var _columnId = columnIds[j];
        if (columnIdsWithDefinedSchemas.has(_columnId)) continue;
        var schemaColumn = columnSchemas[_columnId] = columnSchemas[_columnId] || {};

        var columnValue = rowData[_columnId].trim();

        var valueScores = scoreValueBySchemaType(columnValue, schemaDetectors);

        for (var k = 0; k < valueScores.length; k++) {
          var valueScore = valueScores[k];

          if (schemaColumn.hasOwnProperty(valueScore.type)) {
            var existingScore = schemaColumn[valueScore.type];
            existingScore.push(valueScore.score);
          } else {
            // first entry for this column
            schemaColumn[valueScore.type] = [valueScore.score];
          }
        }
      }
    } // for each column, reduce each detector type's score to a single value and find the best fit


    return Object.keys(columnSchemas).reduce(function (schema, columnId) {
      var columnScores = columnSchemas[columnId];
      var typeIds = Object.keys(columnScores);
      var typeSummaries = {};
      var bestType = null;
      var bestScore = 0;

      for (var _i = 0; _i < typeIds.length; _i++) {
        var typeId = typeIds[_i];
        var typeScores = columnScores[typeId]; // find the mean

        var totalScore = 0;

        for (var _j = 0; _j < typeScores.length; _j++) {
          var _score3 = typeScores[_j];
          totalScore += _score3;
        }

        var _mean = totalScore / typeScores.length; // compute standard deviation


        var sdSum = 0;

        for (var _j2 = 0; _j2 < typeScores.length; _j2++) {
          var _score4 = typeScores[_j2];
          sdSum += (_score4 - _mean) * (_score4 - _mean);
        }

        var _sd = Math.sqrt(sdSum / typeScores.length);

        var summary = {
          mean: _mean,
          sd: _sd
        }; // the mean-standard_deviation calculation is fairly arbitrary but fits the patterns I've thrown at it
        // it is meant to represent the scores' average and distribution

        var _score2 = summary.mean - summary.sd;

        if (_score2 > MINIMUM_SCORE_MATCH) {
          if (bestType == null || _score2 > bestScore) {
            bestType = typeId;
            bestScore = _score2;
          }
        }

        typeSummaries[typeId] = summary;
      }

      schema[columnId] = {
        columnType: bestType
      };
      return schema;
    }, {});
  }, [autoDetectSchema, definedColumnSchemas, inMemory, inMemoryValues, schemaDetectors]);
  return schema;
}

function useMergedSchema(detectedSchema, columns) {
  return (0, _react.useMemo)(function () {
    var mergedSchema = _objectSpread({}, detectedSchema);

    for (var i = 0; i < columns.length; i++) {
      var _columns$i = columns[i],
          id = _columns$i.id,
          schema = _columns$i.schema;

      if (schema != null) {
        if (detectedSchema.hasOwnProperty(id)) {
          mergedSchema[id] = _objectSpread({}, detectedSchema[id], {
            columnType: schema
          });
        } else {
          mergedSchema[id] = {
            columnType: schema
          };
        }
      }
    }

    return mergedSchema;
  }, [detectedSchema, columns]);
} // Given a provided schema, return the details for the schema
// Useful for grabbing the color or icon


function getDetailsForSchema(detectors, providedSchema) {
  var results = detectors.filter(function (matches) {
    return matches.type === providedSchema;
  });
  return results[0];
}