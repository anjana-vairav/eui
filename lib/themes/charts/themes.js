"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EUI_SPARKLINE_THEME_PARTIAL = exports.EUI_CHARTS_THEME_DARK = exports.EUI_CHARTS_THEME_LIGHT = void 0;

var _eui_palettes = require("../../services/color/eui_palettes");

var _visualization_colors = require("../../services/color/visualization_colors");

var _colors = _interopRequireDefault(require("!!sass-vars-to-js-loader!../../global_styling/variables/_colors.scss"));

var _eui_colors_dark = _interopRequireDefault(require("!!sass-vars-to-js-loader!../../themes/eui/eui_colors_dark.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
// @ts-ignore
var fontFamily = "'Inter UI', -apple-system, BlinkMacSystemFont,\n  'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'";

function createTheme(colors) {
  return {
    lineAnnotation: {
      line: {
        strokeWidth: 1,
        stroke: colors.euiColorDarkShade.rgba,
        opacity: 1
      },
      details: {
        fontSize: 10,
        fontFamily: fontFamily,
        fill: colors.euiColorDarkShade.rgba,
        padding: 0
      }
    },
    theme: {
      chartMargins: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      },
      lineSeriesStyle: {
        line: {
          strokeWidth: 2
        },
        point: {
          fill: colors.euiColorEmptyShade.rgba,
          strokeWidth: 2,
          radius: 3
        }
      },
      areaSeriesStyle: {
        area: {
          opacity: 0.3
        },
        line: {
          strokeWidth: 2
        },
        point: {
          visible: false,
          fill: colors.euiColorEmptyShade.rgba,
          strokeWidth: 2,
          radius: 3
        }
      },
      barSeriesStyle: {
        displayValue: {
          fontSize: 8,
          fontFamily: fontFamily,
          fill: colors.euiColorDarkShade.rgba
        }
      },
      scales: {
        barsPadding: 0.25,
        histogramPadding: 0.05
      },
      axes: {
        axisTitleStyle: {
          fontSize: 12,
          fontFamily: fontFamily,
          fill: colors.euiColorDarkestShade.rgba,
          padding: 10
        },
        axisLineStyle: {
          stroke: colors.euiColorChartLines.rgba
        },
        tickLabelStyle: {
          fontSize: 10,
          fontFamily: fontFamily,
          fill: colors.euiColorDarkShade.rgba,
          padding: 8
        },
        tickLineStyle: {
          visible: false,
          stroke: colors.euiColorChartLines.rgba,
          strokeWidth: 1
        },
        gridLineStyle: {
          horizontal: {
            visible: true,
            stroke: colors.euiColorChartLines.rgba,
            strokeWidth: 1,
            opacity: 1,
            dash: [0, 0]
          },
          vertical: {
            visible: true,
            stroke: colors.euiColorChartLines.rgba,
            strokeWidth: 1,
            opacity: 1,
            dash: [4, 4]
          }
        }
      },
      colors: {
        vizColors: _eui_palettes.palettes.euiPaletteColorBlind.colors,
        defaultVizColor: _visualization_colors.DEFAULT_VISUALIZATION_COLOR
      },
      crosshair: {
        band: {
          fill: colors.euiColorChartBand.rgba
        },
        line: {
          stroke: colors.euiColorDarkShade.rgba,
          strokeWidth: 1,
          dash: [4, 4]
        }
      }
    }
  };
}

var EUI_CHARTS_THEME_LIGHT = createTheme(_colors.default);
exports.EUI_CHARTS_THEME_LIGHT = EUI_CHARTS_THEME_LIGHT;
var EUI_CHARTS_THEME_DARK = createTheme(_eui_colors_dark.default);
exports.EUI_CHARTS_THEME_DARK = EUI_CHARTS_THEME_DARK;
var EUI_SPARKLINE_THEME_PARTIAL = {
  lineSeriesStyle: {
    point: {
      visible: false,
      strokeWidth: 1,
      radius: 1
    }
  },
  areaSeriesStyle: {
    point: {
      visible: false,
      strokeWidth: 1,
      radius: 1
    }
  }
};
exports.EUI_SPARKLINE_THEME_PARTIAL = EUI_SPARKLINE_THEME_PARTIAL;