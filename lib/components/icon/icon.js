"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiIcon = exports.SIZES = exports.COLORS = exports.IconPropType = exports.TYPES = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _common = require("../common");

var _startCase2 = _interopRequireDefault(require("lodash/startCase"));

var _empty = require("./assets/empty.js");

var _react2 = require("../../services/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var typeToPathMap = {
  accessibility: 'accessibility',
  addDataApp: 'app_add_data',
  advancedSettingsApp: 'app_advanced_settings',
  alert: 'alert',
  apmApp: 'app_apm',
  apmTrace: 'apm_trace',
  apps: 'apps',
  arrowDown: 'arrow_down',
  arrowLeft: 'arrow_left',
  arrowRight: 'arrow_right',
  arrowUp: 'arrow_up',
  asterisk: 'asterisk',
  auditbeatApp: 'app_auditbeat',
  beaker: 'beaker',
  bell: 'bell',
  bolt: 'bolt',
  boxesHorizontal: 'boxes_horizontal',
  boxesVertical: 'boxes_vertical',
  branch: 'branch',
  broom: 'broom',
  brush: 'brush',
  bug: 'bug',
  bullseye: 'bullseye',
  calendar: 'calendar',
  canvasApp: 'app_canvas',
  codeApp: 'app_code',
  check: 'check',
  checkInCircleFilled: 'checkInCircleFilled',
  clock: 'clock',
  cloudDrizzle: 'cloudDrizzle',
  cloudStormy: 'cloudStormy',
  cloudSunny: 'cloudSunny',
  compute: 'compute',
  console: 'console',
  consoleApp: 'app_console',
  controlsHorizontal: 'controls_horizontal',
  controlsVertical: 'controls_vertical',
  copy: 'copy',
  copyClipboard: 'copy_clipboard',
  createAdvancedJob: 'ml_create_advanced_job',
  createMultiMetricJob: 'ml_create_multi_metric_job',
  createPopulationJob: 'ml_create_population_job',
  createSingleMetricJob: 'ml_create_single_metric_job',
  cross: 'cross',
  crossClusterReplicationApp: 'app_cross_cluster_replication',
  crosshairs: 'crosshairs',
  crossInACircleFilled: 'crossInACircleFilled',
  currency: 'currency',
  cut: 'cut',
  dashboardApp: 'app_dashboard',
  database: 'database',
  dataVisualizer: 'ml_data_visualizer',
  devToolsApp: 'app_devtools',
  discoverApp: 'app_discover',
  document: 'document',
  documentEdit: 'documentEdit',
  documents: 'documents',
  dot: 'dot',
  editorAlignCenter: 'editor_align_center',
  editorAlignLeft: 'editor_align_left',
  editorAlignRight: 'editor_align_right',
  editorBold: 'editor_bold',
  editorCodeBlock: 'editor_code_block',
  editorComment: 'editor_comment',
  editorDistributeHorizontal: 'editorDistributeHorizontal',
  editorDistributeVertical: 'editorDistributeVertical',
  editorHeading: 'editor_heading',
  editorItalic: 'editor_italic',
  editorItemAlignLeft: 'editorItemAlignLeft',
  editorItemAlignBottom: 'editorItemAlignBottom',
  editorItemAlignCenter: 'editorItemAlignCenter',
  editorItemAlignMiddle: 'editorItemAlignMiddle',
  editorItemAlignRight: 'editorItemAlignRight',
  editorItemAlignTop: 'editorItemAlignTop',
  editorLink: 'editor_link',
  editorOrderedList: 'editor_ordered_list',
  editorPositionBottomLeft: 'editorPositionBottomLeft',
  editorPositionBottomRight: 'editorPositionBottomRight',
  editorPositionTopLeft: 'editorPositionTopLeft',
  editorPositionTopRight: 'editorPositionTopRight',
  editorRedo: 'editor_redo',
  editorStrike: 'editor_strike',
  editorTable: 'editor_table',
  editorUnderline: 'editor_underline',
  editorUndo: 'editor_undo',
  editorUnorderedList: 'editor_unordered_list',
  email: 'email',
  empty: 'empty',
  emsApp: 'app_ems',
  exit: 'exit',
  expand: 'expand',
  expandMini: 'expandMini',
  exportAction: 'export',
  eye: 'eye',
  eyeClosed: 'eye_closed',
  faceHappy: 'face_happy',
  faceNeutral: 'faceNeutral',
  faceSad: 'face_sad',
  filebeatApp: 'app_filebeat',
  filter: 'filter',
  flag: 'flag',
  folderClosed: 'folder_closed',
  folderOpen: 'folder_open',
  fullScreen: 'full_screen',
  gear: 'gear',
  gisApp: 'app_gis',
  glasses: 'glasses',
  globe: 'globe',
  grab: 'grab',
  grabHorizontal: 'grab_horizontal',
  graphApp: 'app_graph',
  grid: 'grid',
  grokApp: 'app_grok',
  heart: 'heart',
  heartbeatApp: 'app_heartbeat',
  heatmap: 'heatmap',
  help: 'help',
  iInCircle: 'iInCircle',
  importAction: 'import',
  indexClose: 'index_close',
  indexEdit: 'index_edit',
  indexFlush: 'index_flush',
  indexManagementApp: 'app_index_management',
  indexMapping: 'index_mapping',
  indexOpen: 'index_open',
  indexPatternApp: 'app_index_pattern',
  indexRollupApp: 'app_index_rollup',
  indexSettings: 'index_settings',
  metricsApp: 'app_metrics',
  inputOutput: 'inputOutput',
  inspect: 'inspect',
  invert: 'invert',
  ip: 'ip',
  keyboardShortcut: 'keyboard_shortcut',
  kqlField: 'kql_field',
  kqlFunction: 'kql_function',
  kqlOperand: 'kql_operand',
  kqlSelector: 'kql_selector',
  kqlValue: 'kql_value',
  lensApp: 'app_lens',
  link: 'link',
  list: 'list',
  listAdd: 'list_add',
  lock: 'lock',
  lockOpen: 'lockOpen',
  logsApp: 'app_logs',
  logoAerospike: 'logo_aerospike',
  logoApache: 'logo_apache',
  logoAPM: 'logo_apm',
  logoAppSearch: 'logo_app_search',
  logoAWS: 'logo_aws',
  logoAWSMono: 'logo_aws_mono',
  logoAzure: 'logo_azure',
  logoAzureMono: 'logo_azure_mono',
  logoBeats: 'logo_beats',
  logoBusinessAnalytics: 'logo_business_analytics',
  logoCeph: 'logo_ceph',
  logoCloud: 'logo_cloud',
  logoCloudEnterprise: 'logo_cloud_ece',
  logoCode: 'logo_code',
  logoCodesandbox: 'logo_codesandbox',
  logoCouchbase: 'logo_couchbase',
  logoDocker: 'logo_docker',
  logoDropwizard: 'logo_dropwizard',
  logoElastic: 'logo_elastic',
  logoElasticsearch: 'logo_elasticsearch',
  logoElasticStack: 'logo_elastic_stack',
  logoEnterpriseSearch: 'logo_enterprise_search',
  logoEtcd: 'logo_etcd',
  logoGCP: 'logo_gcp',
  logoGCPMono: 'logo_gcp_mono',
  logoGithub: 'logo_github',
  logoGmail: 'logo_gmail',
  logoGolang: 'logo_golang',
  logoHAproxy: 'logo_haproxy',
  logoIBM: 'logo_ibm',
  logoIBMMono: 'logo_ibm_mono',
  logoKafka: 'logo_kafka',
  logoKibana: 'logo_kibana',
  logoKubernetes: 'logo_kubernetes',
  logoLogging: 'logo_logging',
  logoLogstash: 'logo_logstash',
  logoMaps: 'logo_maps',
  logoMemcached: 'logo_memcached',
  logoMetrics: 'logo_metrics',
  logoMongodb: 'logo_mongodb',
  logoMySQL: 'logo_mysql',
  logoNginx: 'logo_nginx',
  logoOsquery: 'logo_osquery',
  logoPhp: 'logo_php',
  logoPostgres: 'logo_postgres',
  logoPrometheus: 'logo_prometheus',
  logoRabbitmq: 'logo_rabbitmq',
  logoRedis: 'logo_redis',
  logoSecurity: 'logo_security',
  logoSiteSearch: 'logo_site_search',
  logoSketch: 'logo_sketch',
  logoSlack: 'logo_slack',
  logoUptime: 'logo_uptime',
  logoWebhook: 'logo_webhook',
  logoWindows: 'logo_windows',
  logstashFilter: 'logstash_filter',
  logstashIf: 'logstash_if',
  logstashInput: 'logstash_input',
  logstashOutput: 'logstash_output',
  logstashQueue: 'logstash_queue',
  machineLearningApp: 'app_ml',
  magnet: 'magnet',
  magnifyWithMinus: 'magnifyWithMinus',
  magnifyWithPlus: 'magnifyWithPlus',
  managementApp: 'app_management',
  mapMarker: 'map_marker',
  memory: 'memory',
  menuLeft: 'menuLeft',
  menuRight: 'menuRight',
  merge: 'merge',
  metricbeatApp: 'app_metricbeat',
  minimize: 'minimize',
  minusInCircle: 'minus_in_circle',
  minusInCircleFilled: 'minus_in_circle_filled',
  monitoringApp: 'app_monitoring',
  moon: 'moon',
  node: 'node',
  notebookApp: 'app_notebook',
  number: 'number',
  offline: 'offline',
  online: 'online',
  package: 'package',
  packetbeatApp: 'app_packetbeat',
  partial: 'partial',
  pause: 'pause',
  pencil: 'pencil',
  pin: 'pin',
  pinFilled: 'pin_filled',
  pipelineApp: 'app_pipeline',
  play: 'play',
  plusInCircle: 'plus_in_circle',
  plusInCircleFilled: 'plus_in_circle_filled',
  popout: 'popout',
  questionInCircle: 'question_in_circle',
  refresh: 'refresh',
  reportingApp: 'app_reporting',
  save: 'save',
  savedObjectsApp: 'app_saved_objects',
  scale: 'scale',
  search: 'search',
  searchProfilerApp: 'app_search_profiler',
  securityAnalyticsApp: 'app_security_analytics',
  securityApp: 'app_security',
  shard: 'shard',
  share: 'share',
  snowflake: 'snowflake',
  sortable: 'sortable',
  sortDown: 'sort_down',
  sortLeft: 'sortLeft',
  sortRight: 'sortRight',
  sortUp: 'sort_up',
  spacesApp: 'app_spaces',
  sqlApp: 'app_sql',
  starEmpty: 'star_empty',
  starEmptySpace: 'star_empty_space',
  starFilled: 'star_filled',
  starFilledSpace: 'star_filled_space',
  starMinusEmpty: 'star_minus_empty',
  starMinusFilled: 'star_minus_filled',
  starPlusEmpty: 'starPlusEmpty',
  starPlusFilled: 'starPlusFilled',
  stats: 'stats',
  stop: 'stop',
  stopFilled: 'stop_filled',
  stopSlash: 'stop_slash',
  storage: 'storage',
  string: 'string',
  submodule: 'submodule',
  swatchInput: 'swatch_input',
  // Undocumented on purpose. Has an extra stroke for EuiColorPicker
  symlink: 'symlink',
  tableOfContents: 'tableOfContents',
  tableDensityExpanded: 'table_density_expanded',
  tableDensityCompact: 'table_density_compact',
  tableDensityNormal: 'table_density_normal',
  tag: 'tag',
  tear: 'tear',
  temperature: 'temperature',
  timelionApp: 'app_timelion',
  training: 'training',
  trash: 'trash',
  upgradeAssistantApp: 'app_upgrade_assistant',
  uptimeApp: 'app_uptime',
  user: 'user',
  usersRolesApp: 'app_users_roles',
  vector: 'vector',
  videoPlayer: 'videoPlayer',
  visArea: 'vis_area',
  visAreaStacked: 'vis_area_stacked',
  visBarHorizontal: 'vis_bar_horizontal',
  visBarHorizontalStacked: 'vis_bar_horizontal_stacked',
  visBarVertical: 'vis_bar_vertical',
  visBarVerticalStacked: 'vis_bar_vertical_stacked',
  visControls: 'vis_controls',
  visGauge: 'vis_gauge',
  visGoal: 'vis_goal',
  visHeatmap: 'vis_heatmap',
  visLine: 'vis_line',
  visMapCoordinate: 'vis_map_coordinate',
  visMapRegion: 'vis_map_region',
  visMetric: 'vis_metric',
  visPie: 'vis_pie',
  visTable: 'vis_table',
  visTagCloud: 'vis_tag_cloud',
  visText: 'vis_text',
  visTimelion: 'vis_timelion',
  visualizeApp: 'app_visualize',
  visVega: 'vis_vega',
  visVisualBuilder: 'vis_visual_builder',
  watchesApp: 'app_watches',
  wrench: 'wrench',
  // Token Icon Imports
  tokenClass: 'tokens/tokenClass',
  tokenProperty: 'tokens/tokenProperty',
  tokenEnum: 'tokens/tokenEnum',
  tokenVariable: 'tokens/tokenVariable',
  tokenMethod: 'tokens/tokenMethod',
  tokenAnnotation: 'tokens/tokenAnnotation',
  tokenException: 'tokens/tokenException',
  tokenInterface: 'tokens/tokenInterface',
  tokenParameter: 'tokens/tokenParameter',
  tokenField: 'tokens/tokenField',
  tokenElement: 'tokens/tokenElement',
  tokenFunction: 'tokens/tokenFunction',
  tokenBoolean: 'tokens/tokenBoolean',
  tokenString: 'tokens/tokenString',
  tokenArray: 'tokens/tokenArray',
  tokenNumber: 'tokens/tokenNumber',
  tokenConstant: 'tokens/tokenConstant',
  tokenObject: 'tokens/tokenObject',
  tokenEvent: 'tokens/tokenEvent',
  tokenKey: 'tokens/tokenKey',
  tokenNull: 'tokens/tokenNull',
  tokenStruct: 'tokens/tokenStruct',
  tokenPackage: 'tokens/tokenPackage',
  tokenOperator: 'tokens/tokenOperator',
  tokenEnumMember: 'tokens/tokenEnumMember',
  tokenRepo: 'tokens/tokenRepo',
  tokenSymbol: 'tokens/tokenSymbol',
  tokenFile: 'tokens/tokenFile',
  tokenModule: 'tokens/tokenModule',
  tokenNamespace: 'tokens/tokenNamespace'
};
var TYPES = (0, _common.keysOf)(typeToPathMap);
exports.TYPES = TYPES;

var IconPropType = _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]);

exports.IconPropType = IconPropType;
var colorToClassMap = {
  default: null,
  primary: 'euiIcon--primary',
  secondary: 'euiIcon--secondary',
  success: 'euiIcon--success',
  accent: 'euiIcon--accent',
  warning: 'euiIcon--warning',
  danger: 'euiIcon--danger',
  text: 'euiIcon--text',
  subdued: 'euiIcon--subdued',
  ghost: 'euiIcon--ghost'
};
var COLORS = (0, _common.keysOf)(colorToClassMap);
exports.COLORS = COLORS;

function isNamedColor(name) {
  return colorToClassMap.hasOwnProperty(name);
} // We accept arbitrary color strings, which are impossible to type.


var sizeToClassNameMap = {
  original: null,
  s: 'euiIcon--small',
  m: 'euiIcon--medium',
  l: 'euiIcon--large',
  xl: 'euiIcon--xLarge',
  xxl: 'euiIcon--xxLarge'
};
var SIZES = (0, _common.keysOf)(sizeToClassNameMap);
exports.SIZES = SIZES;

function isEuiIconType(x) {
  return typeof x === 'string' && typeToPathMap.hasOwnProperty(x);
}

function getInitialIcon(icon) {
  if (icon == null) {
    return undefined;
  }

  if (isEuiIconType(icon)) {
    return undefined;
  }

  return icon;
}

var EuiIcon =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(EuiIcon, _PureComponent);

  function EuiIcon(props) {
    var _this;

    _classCallCheck(this, EuiIcon);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EuiIcon).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "isMounted", true);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "loadIconComponent", function (iconType) {
      import(
      /* webpackChunkName: "icon.[request]" */
      // It's important that we don't use a template string here, it
      // stops webpack from building a dynamic require context.
      // eslint-disable-next-line prefer-template
      './assets/' + typeToPathMap[iconType] + '.js').then(function (_ref) {
        var icon = _ref.icon;
        (0, _react2.enqueueStateChange)(function () {
          if (_this.isMounted) {
            _this.setState({
              icon: icon,
              iconTitle: iconType,
              isLoading: false
            }, function () {
              var onIconLoad = _this.props.onIconLoad;

              if (onIconLoad) {
                onIconLoad();
              }
            });
          }
        });
      });
    });

    var type = props.type;
    var initialIcon = getInitialIcon(type);
    var isLoading = false;

    if (isEuiIconType(type)) {
      isLoading = true;

      _this.loadIconComponent(type);
    }

    _this.state = {
      icon: initialIcon,
      iconTitle: undefined,
      isLoading: isLoading
    };
    return _this;
  }

  _createClass(EuiIcon, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var type = this.props.type;

      if (type !== prevProps.type) {
        if (isEuiIconType(type)) {
          // eslint-disable-next-line react/no-did-update-set-state
          this.setState({
            isLoading: true
          });
          this.loadIconComponent(type);
        } else {
          // eslint-disable-next-line react/no-did-update-set-state
          this.setState({
            icon: type,
            isLoading: false
          });
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isMounted = false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          type = _this$props.type,
          _this$props$size = _this$props.size,
          size = _this$props$size === void 0 ? 'm' : _this$props$size,
          color = _this$props.color,
          className = _this$props.className,
          tabIndex = _this$props.tabIndex,
          title = _this$props.title,
          onIconLoad = _this$props.onIconLoad,
          rest = _objectWithoutProperties(_this$props, ["type", "size", "color", "className", "tabIndex", "title", "onIconLoad"]);

      var isLoading = this.state.isLoading;
      var optionalColorClass = null;
      var optionalCustomStyles = null;

      if (color) {
        if (isNamedColor(color)) {
          optionalColorClass = colorToClassMap[color];
        } else {
          optionalCustomStyles = {
            fill: color
          };
        }
      } // These icons are a little special and get some extra CSS flexibility


      var isAppIcon = type && typeof type === 'string' && (/.+App$/.test(type) || /.+Job$/.test(type) || type === 'dataVisualizer');
      var classes = (0, _classnames.default)('euiIcon', sizeToClassNameMap[size], optionalColorClass, {
        'euiIcon--app': isAppIcon,
        'euiIcon-isLoading': isLoading,
        'euiIcon-isLoaded': !isLoading
      }, className);
      var icon = this.state.icon || _empty.icon; // If it's a named icon, by default the title will be the name
      // If it's a custom icon, it gets an empty alt

      var iconTitle = (0, _startCase2.default)(this.state.iconTitle) || '';
      var titleDisplayed = title ? title : iconTitle; // This is a fix for IE and Edge, which ignores tabindex="-1" on an SVG, but respects
      // focusable="false".
      //   - If there's no tab index specified, we'll default the icon to not be focusable,
      //     which is how SVGs behave in Chrome, Safari, and FF.
      //   - If tab index is -1, then the consumer wants the icon to not be focusable.
      //   - For all other values, the consumer wants the icon to be focusable.

      var focusable = tabIndex == null || tabIndex === -1 ? 'false' : 'true';

      if (typeof icon === 'string') {
        return _react.default.createElement("img", _extends({
          alt: titleDisplayed,
          src: icon,
          className: classes,
          tabIndex: tabIndex
        }, rest));
      } else {
        var Svg = icon; // If it's an empty icon it gets aria-hidden true

        var hideIconEmpty = icon === _empty.icon && {
          'aria-hidden': true
        };
        var ariaLabel; // If no aria-label or aria-labelledby is provided the title will be default

        if (!this.props['aria-label'] && !this.props['aria-labelledby']) {
          ariaLabel = {
            'aria-label': titleDisplayed
          };
        }

        return _react.default.createElement(Svg, _extends({
          className: classes,
          style: optionalCustomStyles,
          tabIndex: tabIndex,
          focusable: focusable,
          title: titleDisplayed,
          role: "img"
        }, rest, hideIconEmpty, ariaLabel));
      }
    }
  }]);

  return EuiIcon;
}(_react.PureComponent);

exports.EuiIcon = EuiIcon;
EuiIcon.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,

  /**
       * `Enum` is any of the named icons listed in the docs, `Element` is any React SVG element, and `string` is usually a URL to an SVG file
       */
  type: _propTypes.default.oneOfType([_propTypes.default.oneOf(["accessibility", "addDataApp", "advancedSettingsApp", "alert", "apmApp", "apmTrace", "apps", "arrowDown", "arrowLeft", "arrowRight", "arrowUp", "asterisk", "auditbeatApp", "beaker", "bell", "bolt", "boxesHorizontal", "boxesVertical", "branch", "broom", "brush", "bug", "bullseye", "calendar", "canvasApp", "codeApp", "check", "checkInCircleFilled", "clock", "cloudDrizzle", "cloudStormy", "cloudSunny", "compute", "console", "consoleApp", "controlsHorizontal", "controlsVertical", "copy", "copyClipboard", "createAdvancedJob", "createMultiMetricJob", "createPopulationJob", "createSingleMetricJob", "cross", "crossClusterReplicationApp", "crosshairs", "crossInACircleFilled", "currency", "cut", "dashboardApp", "database", "dataVisualizer", "devToolsApp", "discoverApp", "document", "documentEdit", "documents", "dot", "editorAlignCenter", "editorAlignLeft", "editorAlignRight", "editorBold", "editorCodeBlock", "editorComment", "editorDistributeHorizontal", "editorDistributeVertical", "editorHeading", "editorItalic", "editorItemAlignLeft", "editorItemAlignBottom", "editorItemAlignCenter", "editorItemAlignMiddle", "editorItemAlignRight", "editorItemAlignTop", "editorLink", "editorOrderedList", "editorPositionBottomLeft", "editorPositionBottomRight", "editorPositionTopLeft", "editorPositionTopRight", "editorRedo", "editorStrike", "editorTable", "editorUnderline", "editorUndo", "editorUnorderedList", "email", "empty", "emsApp", "exit", "expand", "expandMini", "exportAction", "eye", "eyeClosed", "faceHappy", "faceNeutral", "faceSad", "filebeatApp", "filter", "flag", "folderClosed", "folderOpen", "fullScreen", "gear", "gisApp", "glasses", "globe", "grab", "grabHorizontal", "graphApp", "grid", "grokApp", "heart", "heartbeatApp", "heatmap", "help", "iInCircle", "importAction", "indexClose", "indexEdit", "indexFlush", "indexManagementApp", "indexMapping", "indexOpen", "indexPatternApp", "indexRollupApp", "indexSettings", "metricsApp", "inputOutput", "inspect", "invert", "ip", "keyboardShortcut", "kqlField", "kqlFunction", "kqlOperand", "kqlSelector", "kqlValue", "lensApp", "link", "list", "listAdd", "lock", "lockOpen", "logsApp", "logoAerospike", "logoApache", "logoAPM", "logoAppSearch", "logoAWS", "logoAWSMono", "logoAzure", "logoAzureMono", "logoBeats", "logoBusinessAnalytics", "logoCeph", "logoCloud", "logoCloudEnterprise", "logoCode", "logoCodesandbox", "logoCouchbase", "logoDocker", "logoDropwizard", "logoElastic", "logoElasticsearch", "logoElasticStack", "logoEnterpriseSearch", "logoEtcd", "logoGCP", "logoGCPMono", "logoGithub", "logoGmail", "logoGolang", "logoHAproxy", "logoIBM", "logoIBMMono", "logoKafka", "logoKibana", "logoKubernetes", "logoLogging", "logoLogstash", "logoMaps", "logoMemcached", "logoMetrics", "logoMongodb", "logoMySQL", "logoNginx", "logoOsquery", "logoPhp", "logoPostgres", "logoPrometheus", "logoRabbitmq", "logoRedis", "logoSecurity", "logoSiteSearch", "logoSketch", "logoSlack", "logoUptime", "logoWebhook", "logoWindows", "logstashFilter", "logstashIf", "logstashInput", "logstashOutput", "logstashQueue", "machineLearningApp", "magnet", "magnifyWithMinus", "magnifyWithPlus", "managementApp", "mapMarker", "memory", "menuLeft", "menuRight", "merge", "metricbeatApp", "minimize", "minusInCircle", "minusInCircleFilled", "monitoringApp", "moon", "node", "notebookApp", "number", "offline", "online", "package", "packetbeatApp", "partial", "pause", "pencil", "pin", "pinFilled", "pipelineApp", "play", "plusInCircle", "plusInCircleFilled", "popout", "questionInCircle", "refresh", "reportingApp", "save", "savedObjectsApp", "scale", "search", "searchProfilerApp", "securityAnalyticsApp", "securityApp", "shard", "share", "snowflake", "sortable", "sortDown", "sortLeft", "sortRight", "sortUp", "spacesApp", "sqlApp", "starEmpty", "starEmptySpace", "starFilled", "starFilledSpace", "starMinusEmpty", "starMinusFilled", "starPlusEmpty", "starPlusFilled", "stats", "stop", "stopFilled", "stopSlash", "storage", "string", "submodule", "swatchInput", "symlink", "tableOfContents", "tableDensityExpanded", "tableDensityCompact", "tableDensityNormal", "tag", "tear", "temperature", "timelionApp", "training", "trash", "upgradeAssistantApp", "uptimeApp", "user", "usersRolesApp", "vector", "videoPlayer", "visArea", "visAreaStacked", "visBarHorizontal", "visBarHorizontalStacked", "visBarVertical", "visBarVerticalStacked", "visControls", "visGauge", "visGoal", "visHeatmap", "visLine", "visMapCoordinate", "visMapRegion", "visMetric", "visPie", "visTable", "visTagCloud", "visText", "visTimelion", "visualizeApp", "visVega", "visVisualBuilder", "watchesApp", "wrench", "tokenClass", "tokenProperty", "tokenEnum", "tokenVariable", "tokenMethod", "tokenAnnotation", "tokenException", "tokenInterface", "tokenParameter", "tokenField", "tokenElement", "tokenFunction", "tokenBoolean", "tokenString", "tokenArray", "tokenNumber", "tokenConstant", "tokenObject", "tokenEvent", "tokenKey", "tokenNull", "tokenStruct", "tokenPackage", "tokenOperator", "tokenEnumMember", "tokenRepo", "tokenSymbol", "tokenFile", "tokenModule", "tokenNamespace"]).isRequired, _propTypes.default.string.isRequired, _propTypes.default.element.isRequired]).isRequired,

  /**
       * One of EUI's color palette or a valid CSS color value https://developer.mozilla.org/en-US/docs/Web/CSS/color_value.
       * Note that coloring only works if your SVG is removed of fill attributes.
       */
  color: _propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.oneOf(["default", "primary", "secondary", "success", "accent", "warning", "danger", "text", "subdued", "ghost"]).isRequired]),

  /**
       * Note that every size other than `original` assumes the provided SVG sits on a square viewbox.
       */
  size: _propTypes.default.oneOf(["original", "s", "m", "l", "xl", "xxl"]),

  /**
       * Descriptive title for naming the icon based on its use
       */
  title: _propTypes.default.string,

  /**
       * Its value should be one or more element IDs
       */
  "aria-labelledby": _propTypes.default.string,

  /**
       * Callback when the icon has been loaded & rendered
       */
  onIconLoad: _propTypes.default.func
};
EuiIcon.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "loadIconComponent",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "iconType",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "EuiIcon",
  "props": {
    "className": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "aria-label": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "data-test-subj": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "type": {
      "type": {
        "name": "union",
        "value": [{
          "name": "enum",
          "value": [{
            "value": "\"accessibility\"",
            "computed": false
          }, {
            "value": "\"addDataApp\"",
            "computed": false
          }, {
            "value": "\"advancedSettingsApp\"",
            "computed": false
          }, {
            "value": "\"alert\"",
            "computed": false
          }, {
            "value": "\"apmApp\"",
            "computed": false
          }, {
            "value": "\"apmTrace\"",
            "computed": false
          }, {
            "value": "\"apps\"",
            "computed": false
          }, {
            "value": "\"arrowDown\"",
            "computed": false
          }, {
            "value": "\"arrowLeft\"",
            "computed": false
          }, {
            "value": "\"arrowRight\"",
            "computed": false
          }, {
            "value": "\"arrowUp\"",
            "computed": false
          }, {
            "value": "\"asterisk\"",
            "computed": false
          }, {
            "value": "\"auditbeatApp\"",
            "computed": false
          }, {
            "value": "\"beaker\"",
            "computed": false
          }, {
            "value": "\"bell\"",
            "computed": false
          }, {
            "value": "\"bolt\"",
            "computed": false
          }, {
            "value": "\"boxesHorizontal\"",
            "computed": false
          }, {
            "value": "\"boxesVertical\"",
            "computed": false
          }, {
            "value": "\"branch\"",
            "computed": false
          }, {
            "value": "\"broom\"",
            "computed": false
          }, {
            "value": "\"brush\"",
            "computed": false
          }, {
            "value": "\"bug\"",
            "computed": false
          }, {
            "value": "\"bullseye\"",
            "computed": false
          }, {
            "value": "\"calendar\"",
            "computed": false
          }, {
            "value": "\"canvasApp\"",
            "computed": false
          }, {
            "value": "\"codeApp\"",
            "computed": false
          }, {
            "value": "\"check\"",
            "computed": false
          }, {
            "value": "\"checkInCircleFilled\"",
            "computed": false
          }, {
            "value": "\"clock\"",
            "computed": false
          }, {
            "value": "\"cloudDrizzle\"",
            "computed": false
          }, {
            "value": "\"cloudStormy\"",
            "computed": false
          }, {
            "value": "\"cloudSunny\"",
            "computed": false
          }, {
            "value": "\"compute\"",
            "computed": false
          }, {
            "value": "\"console\"",
            "computed": false
          }, {
            "value": "\"consoleApp\"",
            "computed": false
          }, {
            "value": "\"controlsHorizontal\"",
            "computed": false
          }, {
            "value": "\"controlsVertical\"",
            "computed": false
          }, {
            "value": "\"copy\"",
            "computed": false
          }, {
            "value": "\"copyClipboard\"",
            "computed": false
          }, {
            "value": "\"createAdvancedJob\"",
            "computed": false
          }, {
            "value": "\"createMultiMetricJob\"",
            "computed": false
          }, {
            "value": "\"createPopulationJob\"",
            "computed": false
          }, {
            "value": "\"createSingleMetricJob\"",
            "computed": false
          }, {
            "value": "\"cross\"",
            "computed": false
          }, {
            "value": "\"crossClusterReplicationApp\"",
            "computed": false
          }, {
            "value": "\"crosshairs\"",
            "computed": false
          }, {
            "value": "\"crossInACircleFilled\"",
            "computed": false
          }, {
            "value": "\"currency\"",
            "computed": false
          }, {
            "value": "\"cut\"",
            "computed": false
          }, {
            "value": "\"dashboardApp\"",
            "computed": false
          }, {
            "value": "\"database\"",
            "computed": false
          }, {
            "value": "\"dataVisualizer\"",
            "computed": false
          }, {
            "value": "\"devToolsApp\"",
            "computed": false
          }, {
            "value": "\"discoverApp\"",
            "computed": false
          }, {
            "value": "\"document\"",
            "computed": false
          }, {
            "value": "\"documentEdit\"",
            "computed": false
          }, {
            "value": "\"documents\"",
            "computed": false
          }, {
            "value": "\"dot\"",
            "computed": false
          }, {
            "value": "\"editorAlignCenter\"",
            "computed": false
          }, {
            "value": "\"editorAlignLeft\"",
            "computed": false
          }, {
            "value": "\"editorAlignRight\"",
            "computed": false
          }, {
            "value": "\"editorBold\"",
            "computed": false
          }, {
            "value": "\"editorCodeBlock\"",
            "computed": false
          }, {
            "value": "\"editorComment\"",
            "computed": false
          }, {
            "value": "\"editorDistributeHorizontal\"",
            "computed": false
          }, {
            "value": "\"editorDistributeVertical\"",
            "computed": false
          }, {
            "value": "\"editorHeading\"",
            "computed": false
          }, {
            "value": "\"editorItalic\"",
            "computed": false
          }, {
            "value": "\"editorItemAlignLeft\"",
            "computed": false
          }, {
            "value": "\"editorItemAlignBottom\"",
            "computed": false
          }, {
            "value": "\"editorItemAlignCenter\"",
            "computed": false
          }, {
            "value": "\"editorItemAlignMiddle\"",
            "computed": false
          }, {
            "value": "\"editorItemAlignRight\"",
            "computed": false
          }, {
            "value": "\"editorItemAlignTop\"",
            "computed": false
          }, {
            "value": "\"editorLink\"",
            "computed": false
          }, {
            "value": "\"editorOrderedList\"",
            "computed": false
          }, {
            "value": "\"editorPositionBottomLeft\"",
            "computed": false
          }, {
            "value": "\"editorPositionBottomRight\"",
            "computed": false
          }, {
            "value": "\"editorPositionTopLeft\"",
            "computed": false
          }, {
            "value": "\"editorPositionTopRight\"",
            "computed": false
          }, {
            "value": "\"editorRedo\"",
            "computed": false
          }, {
            "value": "\"editorStrike\"",
            "computed": false
          }, {
            "value": "\"editorTable\"",
            "computed": false
          }, {
            "value": "\"editorUnderline\"",
            "computed": false
          }, {
            "value": "\"editorUndo\"",
            "computed": false
          }, {
            "value": "\"editorUnorderedList\"",
            "computed": false
          }, {
            "value": "\"email\"",
            "computed": false
          }, {
            "value": "\"empty\"",
            "computed": false
          }, {
            "value": "\"emsApp\"",
            "computed": false
          }, {
            "value": "\"exit\"",
            "computed": false
          }, {
            "value": "\"expand\"",
            "computed": false
          }, {
            "value": "\"expandMini\"",
            "computed": false
          }, {
            "value": "\"exportAction\"",
            "computed": false
          }, {
            "value": "\"eye\"",
            "computed": false
          }, {
            "value": "\"eyeClosed\"",
            "computed": false
          }, {
            "value": "\"faceHappy\"",
            "computed": false
          }, {
            "value": "\"faceNeutral\"",
            "computed": false
          }, {
            "value": "\"faceSad\"",
            "computed": false
          }, {
            "value": "\"filebeatApp\"",
            "computed": false
          }, {
            "value": "\"filter\"",
            "computed": false
          }, {
            "value": "\"flag\"",
            "computed": false
          }, {
            "value": "\"folderClosed\"",
            "computed": false
          }, {
            "value": "\"folderOpen\"",
            "computed": false
          }, {
            "value": "\"fullScreen\"",
            "computed": false
          }, {
            "value": "\"gear\"",
            "computed": false
          }, {
            "value": "\"gisApp\"",
            "computed": false
          }, {
            "value": "\"glasses\"",
            "computed": false
          }, {
            "value": "\"globe\"",
            "computed": false
          }, {
            "value": "\"grab\"",
            "computed": false
          }, {
            "value": "\"grabHorizontal\"",
            "computed": false
          }, {
            "value": "\"graphApp\"",
            "computed": false
          }, {
            "value": "\"grid\"",
            "computed": false
          }, {
            "value": "\"grokApp\"",
            "computed": false
          }, {
            "value": "\"heart\"",
            "computed": false
          }, {
            "value": "\"heartbeatApp\"",
            "computed": false
          }, {
            "value": "\"heatmap\"",
            "computed": false
          }, {
            "value": "\"help\"",
            "computed": false
          }, {
            "value": "\"iInCircle\"",
            "computed": false
          }, {
            "value": "\"importAction\"",
            "computed": false
          }, {
            "value": "\"indexClose\"",
            "computed": false
          }, {
            "value": "\"indexEdit\"",
            "computed": false
          }, {
            "value": "\"indexFlush\"",
            "computed": false
          }, {
            "value": "\"indexManagementApp\"",
            "computed": false
          }, {
            "value": "\"indexMapping\"",
            "computed": false
          }, {
            "value": "\"indexOpen\"",
            "computed": false
          }, {
            "value": "\"indexPatternApp\"",
            "computed": false
          }, {
            "value": "\"indexRollupApp\"",
            "computed": false
          }, {
            "value": "\"indexSettings\"",
            "computed": false
          }, {
            "value": "\"metricsApp\"",
            "computed": false
          }, {
            "value": "\"inputOutput\"",
            "computed": false
          }, {
            "value": "\"inspect\"",
            "computed": false
          }, {
            "value": "\"invert\"",
            "computed": false
          }, {
            "value": "\"ip\"",
            "computed": false
          }, {
            "value": "\"keyboardShortcut\"",
            "computed": false
          }, {
            "value": "\"kqlField\"",
            "computed": false
          }, {
            "value": "\"kqlFunction\"",
            "computed": false
          }, {
            "value": "\"kqlOperand\"",
            "computed": false
          }, {
            "value": "\"kqlSelector\"",
            "computed": false
          }, {
            "value": "\"kqlValue\"",
            "computed": false
          }, {
            "value": "\"lensApp\"",
            "computed": false
          }, {
            "value": "\"link\"",
            "computed": false
          }, {
            "value": "\"list\"",
            "computed": false
          }, {
            "value": "\"listAdd\"",
            "computed": false
          }, {
            "value": "\"lock\"",
            "computed": false
          }, {
            "value": "\"lockOpen\"",
            "computed": false
          }, {
            "value": "\"logsApp\"",
            "computed": false
          }, {
            "value": "\"logoAerospike\"",
            "computed": false
          }, {
            "value": "\"logoApache\"",
            "computed": false
          }, {
            "value": "\"logoAPM\"",
            "computed": false
          }, {
            "value": "\"logoAppSearch\"",
            "computed": false
          }, {
            "value": "\"logoAWS\"",
            "computed": false
          }, {
            "value": "\"logoAWSMono\"",
            "computed": false
          }, {
            "value": "\"logoAzure\"",
            "computed": false
          }, {
            "value": "\"logoAzureMono\"",
            "computed": false
          }, {
            "value": "\"logoBeats\"",
            "computed": false
          }, {
            "value": "\"logoBusinessAnalytics\"",
            "computed": false
          }, {
            "value": "\"logoCeph\"",
            "computed": false
          }, {
            "value": "\"logoCloud\"",
            "computed": false
          }, {
            "value": "\"logoCloudEnterprise\"",
            "computed": false
          }, {
            "value": "\"logoCode\"",
            "computed": false
          }, {
            "value": "\"logoCodesandbox\"",
            "computed": false
          }, {
            "value": "\"logoCouchbase\"",
            "computed": false
          }, {
            "value": "\"logoDocker\"",
            "computed": false
          }, {
            "value": "\"logoDropwizard\"",
            "computed": false
          }, {
            "value": "\"logoElastic\"",
            "computed": false
          }, {
            "value": "\"logoElasticsearch\"",
            "computed": false
          }, {
            "value": "\"logoElasticStack\"",
            "computed": false
          }, {
            "value": "\"logoEnterpriseSearch\"",
            "computed": false
          }, {
            "value": "\"logoEtcd\"",
            "computed": false
          }, {
            "value": "\"logoGCP\"",
            "computed": false
          }, {
            "value": "\"logoGCPMono\"",
            "computed": false
          }, {
            "value": "\"logoGithub\"",
            "computed": false
          }, {
            "value": "\"logoGmail\"",
            "computed": false
          }, {
            "value": "\"logoGolang\"",
            "computed": false
          }, {
            "value": "\"logoHAproxy\"",
            "computed": false
          }, {
            "value": "\"logoIBM\"",
            "computed": false
          }, {
            "value": "\"logoIBMMono\"",
            "computed": false
          }, {
            "value": "\"logoKafka\"",
            "computed": false
          }, {
            "value": "\"logoKibana\"",
            "computed": false
          }, {
            "value": "\"logoKubernetes\"",
            "computed": false
          }, {
            "value": "\"logoLogging\"",
            "computed": false
          }, {
            "value": "\"logoLogstash\"",
            "computed": false
          }, {
            "value": "\"logoMaps\"",
            "computed": false
          }, {
            "value": "\"logoMemcached\"",
            "computed": false
          }, {
            "value": "\"logoMetrics\"",
            "computed": false
          }, {
            "value": "\"logoMongodb\"",
            "computed": false
          }, {
            "value": "\"logoMySQL\"",
            "computed": false
          }, {
            "value": "\"logoNginx\"",
            "computed": false
          }, {
            "value": "\"logoOsquery\"",
            "computed": false
          }, {
            "value": "\"logoPhp\"",
            "computed": false
          }, {
            "value": "\"logoPostgres\"",
            "computed": false
          }, {
            "value": "\"logoPrometheus\"",
            "computed": false
          }, {
            "value": "\"logoRabbitmq\"",
            "computed": false
          }, {
            "value": "\"logoRedis\"",
            "computed": false
          }, {
            "value": "\"logoSecurity\"",
            "computed": false
          }, {
            "value": "\"logoSiteSearch\"",
            "computed": false
          }, {
            "value": "\"logoSketch\"",
            "computed": false
          }, {
            "value": "\"logoSlack\"",
            "computed": false
          }, {
            "value": "\"logoUptime\"",
            "computed": false
          }, {
            "value": "\"logoWebhook\"",
            "computed": false
          }, {
            "value": "\"logoWindows\"",
            "computed": false
          }, {
            "value": "\"logstashFilter\"",
            "computed": false
          }, {
            "value": "\"logstashIf\"",
            "computed": false
          }, {
            "value": "\"logstashInput\"",
            "computed": false
          }, {
            "value": "\"logstashOutput\"",
            "computed": false
          }, {
            "value": "\"logstashQueue\"",
            "computed": false
          }, {
            "value": "\"machineLearningApp\"",
            "computed": false
          }, {
            "value": "\"magnet\"",
            "computed": false
          }, {
            "value": "\"magnifyWithMinus\"",
            "computed": false
          }, {
            "value": "\"magnifyWithPlus\"",
            "computed": false
          }, {
            "value": "\"managementApp\"",
            "computed": false
          }, {
            "value": "\"mapMarker\"",
            "computed": false
          }, {
            "value": "\"memory\"",
            "computed": false
          }, {
            "value": "\"menuLeft\"",
            "computed": false
          }, {
            "value": "\"menuRight\"",
            "computed": false
          }, {
            "value": "\"merge\"",
            "computed": false
          }, {
            "value": "\"metricbeatApp\"",
            "computed": false
          }, {
            "value": "\"minimize\"",
            "computed": false
          }, {
            "value": "\"minusInCircle\"",
            "computed": false
          }, {
            "value": "\"minusInCircleFilled\"",
            "computed": false
          }, {
            "value": "\"monitoringApp\"",
            "computed": false
          }, {
            "value": "\"moon\"",
            "computed": false
          }, {
            "value": "\"node\"",
            "computed": false
          }, {
            "value": "\"notebookApp\"",
            "computed": false
          }, {
            "value": "\"number\"",
            "computed": false
          }, {
            "value": "\"offline\"",
            "computed": false
          }, {
            "value": "\"online\"",
            "computed": false
          }, {
            "value": "\"package\"",
            "computed": false
          }, {
            "value": "\"packetbeatApp\"",
            "computed": false
          }, {
            "value": "\"partial\"",
            "computed": false
          }, {
            "value": "\"pause\"",
            "computed": false
          }, {
            "value": "\"pencil\"",
            "computed": false
          }, {
            "value": "\"pin\"",
            "computed": false
          }, {
            "value": "\"pinFilled\"",
            "computed": false
          }, {
            "value": "\"pipelineApp\"",
            "computed": false
          }, {
            "value": "\"play\"",
            "computed": false
          }, {
            "value": "\"plusInCircle\"",
            "computed": false
          }, {
            "value": "\"plusInCircleFilled\"",
            "computed": false
          }, {
            "value": "\"popout\"",
            "computed": false
          }, {
            "value": "\"questionInCircle\"",
            "computed": false
          }, {
            "value": "\"refresh\"",
            "computed": false
          }, {
            "value": "\"reportingApp\"",
            "computed": false
          }, {
            "value": "\"save\"",
            "computed": false
          }, {
            "value": "\"savedObjectsApp\"",
            "computed": false
          }, {
            "value": "\"scale\"",
            "computed": false
          }, {
            "value": "\"search\"",
            "computed": false
          }, {
            "value": "\"searchProfilerApp\"",
            "computed": false
          }, {
            "value": "\"securityAnalyticsApp\"",
            "computed": false
          }, {
            "value": "\"securityApp\"",
            "computed": false
          }, {
            "value": "\"shard\"",
            "computed": false
          }, {
            "value": "\"share\"",
            "computed": false
          }, {
            "value": "\"snowflake\"",
            "computed": false
          }, {
            "value": "\"sortable\"",
            "computed": false
          }, {
            "value": "\"sortDown\"",
            "computed": false
          }, {
            "value": "\"sortLeft\"",
            "computed": false
          }, {
            "value": "\"sortRight\"",
            "computed": false
          }, {
            "value": "\"sortUp\"",
            "computed": false
          }, {
            "value": "\"spacesApp\"",
            "computed": false
          }, {
            "value": "\"sqlApp\"",
            "computed": false
          }, {
            "value": "\"starEmpty\"",
            "computed": false
          }, {
            "value": "\"starEmptySpace\"",
            "computed": false
          }, {
            "value": "\"starFilled\"",
            "computed": false
          }, {
            "value": "\"starFilledSpace\"",
            "computed": false
          }, {
            "value": "\"starMinusEmpty\"",
            "computed": false
          }, {
            "value": "\"starMinusFilled\"",
            "computed": false
          }, {
            "value": "\"starPlusEmpty\"",
            "computed": false
          }, {
            "value": "\"starPlusFilled\"",
            "computed": false
          }, {
            "value": "\"stats\"",
            "computed": false
          }, {
            "value": "\"stop\"",
            "computed": false
          }, {
            "value": "\"stopFilled\"",
            "computed": false
          }, {
            "value": "\"stopSlash\"",
            "computed": false
          }, {
            "value": "\"storage\"",
            "computed": false
          }, {
            "value": "\"string\"",
            "computed": false
          }, {
            "value": "\"submodule\"",
            "computed": false
          }, {
            "value": "\"swatchInput\"",
            "computed": false
          }, {
            "value": "\"symlink\"",
            "computed": false
          }, {
            "value": "\"tableOfContents\"",
            "computed": false
          }, {
            "value": "\"tableDensityExpanded\"",
            "computed": false
          }, {
            "value": "\"tableDensityCompact\"",
            "computed": false
          }, {
            "value": "\"tableDensityNormal\"",
            "computed": false
          }, {
            "value": "\"tag\"",
            "computed": false
          }, {
            "value": "\"tear\"",
            "computed": false
          }, {
            "value": "\"temperature\"",
            "computed": false
          }, {
            "value": "\"timelionApp\"",
            "computed": false
          }, {
            "value": "\"training\"",
            "computed": false
          }, {
            "value": "\"trash\"",
            "computed": false
          }, {
            "value": "\"upgradeAssistantApp\"",
            "computed": false
          }, {
            "value": "\"uptimeApp\"",
            "computed": false
          }, {
            "value": "\"user\"",
            "computed": false
          }, {
            "value": "\"usersRolesApp\"",
            "computed": false
          }, {
            "value": "\"vector\"",
            "computed": false
          }, {
            "value": "\"videoPlayer\"",
            "computed": false
          }, {
            "value": "\"visArea\"",
            "computed": false
          }, {
            "value": "\"visAreaStacked\"",
            "computed": false
          }, {
            "value": "\"visBarHorizontal\"",
            "computed": false
          }, {
            "value": "\"visBarHorizontalStacked\"",
            "computed": false
          }, {
            "value": "\"visBarVertical\"",
            "computed": false
          }, {
            "value": "\"visBarVerticalStacked\"",
            "computed": false
          }, {
            "value": "\"visControls\"",
            "computed": false
          }, {
            "value": "\"visGauge\"",
            "computed": false
          }, {
            "value": "\"visGoal\"",
            "computed": false
          }, {
            "value": "\"visHeatmap\"",
            "computed": false
          }, {
            "value": "\"visLine\"",
            "computed": false
          }, {
            "value": "\"visMapCoordinate\"",
            "computed": false
          }, {
            "value": "\"visMapRegion\"",
            "computed": false
          }, {
            "value": "\"visMetric\"",
            "computed": false
          }, {
            "value": "\"visPie\"",
            "computed": false
          }, {
            "value": "\"visTable\"",
            "computed": false
          }, {
            "value": "\"visTagCloud\"",
            "computed": false
          }, {
            "value": "\"visText\"",
            "computed": false
          }, {
            "value": "\"visTimelion\"",
            "computed": false
          }, {
            "value": "\"visualizeApp\"",
            "computed": false
          }, {
            "value": "\"visVega\"",
            "computed": false
          }, {
            "value": "\"visVisualBuilder\"",
            "computed": false
          }, {
            "value": "\"watchesApp\"",
            "computed": false
          }, {
            "value": "\"wrench\"",
            "computed": false
          }, {
            "value": "\"tokenClass\"",
            "computed": false
          }, {
            "value": "\"tokenProperty\"",
            "computed": false
          }, {
            "value": "\"tokenEnum\"",
            "computed": false
          }, {
            "value": "\"tokenVariable\"",
            "computed": false
          }, {
            "value": "\"tokenMethod\"",
            "computed": false
          }, {
            "value": "\"tokenAnnotation\"",
            "computed": false
          }, {
            "value": "\"tokenException\"",
            "computed": false
          }, {
            "value": "\"tokenInterface\"",
            "computed": false
          }, {
            "value": "\"tokenParameter\"",
            "computed": false
          }, {
            "value": "\"tokenField\"",
            "computed": false
          }, {
            "value": "\"tokenElement\"",
            "computed": false
          }, {
            "value": "\"tokenFunction\"",
            "computed": false
          }, {
            "value": "\"tokenBoolean\"",
            "computed": false
          }, {
            "value": "\"tokenString\"",
            "computed": false
          }, {
            "value": "\"tokenArray\"",
            "computed": false
          }, {
            "value": "\"tokenNumber\"",
            "computed": false
          }, {
            "value": "\"tokenConstant\"",
            "computed": false
          }, {
            "value": "\"tokenObject\"",
            "computed": false
          }, {
            "value": "\"tokenEvent\"",
            "computed": false
          }, {
            "value": "\"tokenKey\"",
            "computed": false
          }, {
            "value": "\"tokenNull\"",
            "computed": false
          }, {
            "value": "\"tokenStruct\"",
            "computed": false
          }, {
            "value": "\"tokenPackage\"",
            "computed": false
          }, {
            "value": "\"tokenOperator\"",
            "computed": false
          }, {
            "value": "\"tokenEnumMember\"",
            "computed": false
          }, {
            "value": "\"tokenRepo\"",
            "computed": false
          }, {
            "value": "\"tokenSymbol\"",
            "computed": false
          }, {
            "value": "\"tokenFile\"",
            "computed": false
          }, {
            "value": "\"tokenModule\"",
            "computed": false
          }, {
            "value": "\"tokenNamespace\"",
            "computed": false
          }]
        }, {
          "name": "string"
        }, {
          "name": "element"
        }]
      },
      "required": true,
      "description": "`Enum` is any of the named icons listed in the docs, `Element` is any React SVG element, and `string` is usually a URL to an SVG file"
    },
    "color": {
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "enum",
          "value": [{
            "value": "\"default\"",
            "computed": false
          }, {
            "value": "\"primary\"",
            "computed": false
          }, {
            "value": "\"secondary\"",
            "computed": false
          }, {
            "value": "\"success\"",
            "computed": false
          }, {
            "value": "\"accent\"",
            "computed": false
          }, {
            "value": "\"warning\"",
            "computed": false
          }, {
            "value": "\"danger\"",
            "computed": false
          }, {
            "value": "\"text\"",
            "computed": false
          }, {
            "value": "\"subdued\"",
            "computed": false
          }, {
            "value": "\"ghost\"",
            "computed": false
          }]
        }]
      },
      "required": false,
      "description": "One of EUI's color palette or a valid CSS color value https://developer.mozilla.org/en-US/docs/Web/CSS/color_value.\nNote that coloring only works if your SVG is removed of fill attributes."
    },
    "size": {
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"original\"",
          "computed": false
        }, {
          "value": "\"s\"",
          "computed": false
        }, {
          "value": "\"m\"",
          "computed": false
        }, {
          "value": "\"l\"",
          "computed": false
        }, {
          "value": "\"xl\"",
          "computed": false
        }, {
          "value": "\"xxl\"",
          "computed": false
        }]
      },
      "required": false,
      "description": "Note that every size other than `original` assumes the provided SVG sits on a square viewbox."
    },
    "title": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": "Descriptive title for naming the icon based on its use"
    },
    "aria-labelledby": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": "Its value should be one or more element IDs"
    },
    "onIconLoad": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": "Callback when the icon has been loaded & rendered"
    }
  }
};