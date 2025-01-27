import { palettes } from '../../services/color/eui_palettes';
import { DEFAULT_VISUALIZATION_COLOR } from '../../services/color/visualization_colors';
// @ts-ignore
import lightColors from '!!sass-vars-to-js-loader!../../global_styling/variables/_colors.scss'; // @ts-ignore

import darkColors from '!!sass-vars-to-js-loader!../../themes/eui/eui_colors_dark.scss';
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
        vizColors: palettes.euiPaletteColorBlind.colors,
        defaultVizColor: DEFAULT_VISUALIZATION_COLOR
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

export var EUI_CHARTS_THEME_LIGHT = createTheme(lightColors);
export var EUI_CHARTS_THEME_DARK = createTheme(darkColors);
export var EUI_SPARKLINE_THEME_PARTIAL = {
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