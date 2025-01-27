"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiTableRowCell = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _services = require("../../services");

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EuiTableRowCell = function EuiTableRowCell(_ref) {
  var _ref$align = _ref.align,
      align = _ref$align === void 0 ? _services.LEFT_ALIGNMENT : _ref$align,
      children = _ref.children,
      className = _ref.className,
      truncateText = _ref.truncateText,
      showOnHover = _ref.showOnHover,
      _ref$textOnly = _ref.textOnly,
      textOnly = _ref$textOnly === void 0 ? true : _ref$textOnly,
      hasActions = _ref.hasActions,
      isExpander = _ref.isExpander,
      _ref$mobileOptions = _ref.mobileOptions,
      mobileOptions = _ref$mobileOptions === void 0 ? {
    show: true
  } : _ref$mobileOptions,
      header = _ref.header,
      hideForMobile = _ref.hideForMobile,
      isMobileHeader = _ref.isMobileHeader,
      isMobileFullWidth = _ref.isMobileFullWidth,
      style = _ref.style,
      width = _ref.width,
      rest = _objectWithoutProperties(_ref, ["align", "children", "className", "truncateText", "showOnHover", "textOnly", "hasActions", "isExpander", "mobileOptions", "header", "hideForMobile", "isMobileHeader", "isMobileFullWidth", "style", "width"]);

  var cellClasses = (0, _classnames.default)('euiTableRowCell', {
    'euiTableRowCell--hasActions': hasActions,
    'euiTableRowCell--isExpander': isExpander,
    'euiTableRowCell--hideForDesktop': mobileOptions.only || isMobileHeader,
    'euiTableRowCell--enlargeForMobile': mobileOptions.enlarge || isMobileHeader,
    'euiTableRowCell--isMobileFullWidth': mobileOptions.fullWidth || isMobileFullWidth || isMobileHeader
  });
  var contentClasses = (0, _classnames.default)('euiTableCellContent', className, {
    'euiTableCellContent--alignRight': align === _services.RIGHT_ALIGNMENT,
    'euiTableCellContent--alignCenter': align === _services.CENTER_ALIGNMENT,
    'euiTableCellContent--showOnHover': showOnHover,
    'euiTableCellContent--truncateText': truncateText,
    // We're doing this rigamarole instead of creating `euiTableCellContent--textOnly` for BWC
    // purposes for the time-being.
    'euiTableCellContent--overflowingContent': textOnly !== true
  });
  var mobileContentClasses = (0, _classnames.default)('euiTableCellContent', className, {
    'euiTableCellContent--alignRight': mobileOptions.align === _services.RIGHT_ALIGNMENT || align === _services.RIGHT_ALIGNMENT,
    'euiTableCellContent--alignCenter': mobileOptions.align === _services.CENTER_ALIGNMENT || align === _services.RIGHT_ALIGNMENT,
    'euiTableCellContent--showOnHover': mobileOptions.showOnHover || showOnHover,
    'euiTableCellContent--truncateText': mobileOptions.truncateText || truncateText,
    // We're doing this rigamarole instead of creating `euiTableCellContent--textOnly` for BWC
    // purposes for the time-being.
    'euiTableCellContent--overflowingContent': mobileOptions.textOnly !== true || textOnly !== true
  });
  var childClasses = (0, _classnames.default)({
    euiTableCellContent__text: textOnly === true,
    euiTableCellContent__hoverItem: showOnHover
  });
  var styleObj = (0, _utils.resolveWidthAsStyle)(style, width);

  function modifyChildren(children) {
    var modifiedChildren = children;

    if (textOnly === true) {
      modifiedChildren = _react.default.createElement("span", {
        className: childClasses
      }, children);
    } else if (_react.default.isValidElement(children)) {
      modifiedChildren = _react.default.Children.map(children, function (child) {
        return _react.default.cloneElement(child, {
          className: (0, _classnames.default)(child.props.className, childClasses)
        });
      });
    }

    return modifiedChildren;
  }

  var childrenNode = modifyChildren(children);
  var hideForMobileClasses = 'euiTableRowCell--hideForMobile';
  var showForMobileClasses = 'euiTableRowCell--hideForDesktop';
  var cellRender;

  if (mobileOptions.show === false || hideForMobile) {
    cellRender = _react.default.createElement("td", _extends({
      className: "".concat(cellClasses, " ").concat(hideForMobileClasses),
      style: styleObj
    }, rest), _react.default.createElement("div", {
      className: contentClasses
    }, childrenNode));
  } else {
    cellRender = _react.default.createElement("td", _extends({
      className: cellClasses,
      style: styleObj
    }, rest), (mobileOptions.header || header) && !isMobileHeader && _react.default.createElement("div", {
      className: "euiTableRowCell__mobileHeader ".concat(showForMobileClasses)
    }, mobileOptions.header || header), mobileOptions.render ? _react.default.createElement(_react.Fragment, null, _react.default.createElement("div", {
      className: "".concat(mobileContentClasses, " ").concat(showForMobileClasses)
    }, modifyChildren(mobileOptions.render)), _react.default.createElement("div", {
      className: "".concat(contentClasses, " ").concat(hideForMobileClasses)
    }, childrenNode)) : _react.default.createElement("div", {
      className: contentClasses
    }, childrenNode));
  }

  return cellRender;
};

exports.EuiTableRowCell = EuiTableRowCell;
EuiTableRowCell.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,
  align: _propTypes.default.oneOf(["left", "right", "center"]),

  /**
     * Don't allow line breaks within cells
     */
  showOnHover: _propTypes.default.bool,

  /**
     * Setting `textOnly` to `false` will break words unnecessarily on FF and
     * IE.  To combat this problem on FF, wrap contents with the css utility
     * `.eui-textBreakWord`.
     */
  textOnly: _propTypes.default.bool,

  /**
     * _Should only be used for action cells_
     */
  truncateText: _propTypes.default.bool,
  width: _propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.number.isRequired]),

  /**
     * Indicates if the column is dedicated to icon-only actions (currently
     * affects mobile only)
     */
  hasActions: _propTypes.default.bool,

  /**
     * _DEPRECATED: use `mobileOptions.header`_
     * The column's header title for use in mobile view (will be added as a
     * data-attr)
     */
  header: _propTypes.default.string,

  /**
     * _DEPRECATED: use `mobileOptions.show = false`_
     * Indicates if the column should not show for mobile users (typically
     * hidden because a custom mobile header utilizes the column's contents)
     */
  hideForMobile: _propTypes.default.bool,

  /**
     * Indicates if the column is dedicated as the expandable row toggle
     */
  isExpander: _propTypes.default.bool,

  /**
     * _DEPRECATED: use `mobileOptions.fullWidth`_
     * Allocates 100% of the width of the container in mobile view
     * (typically cells are contained to 50%)
     */
  isMobileFullWidth: _propTypes.default.bool,

  /**
     * _DEPRECATED: use `mobileOptions.only = true & mobileOptions.header = * false`_
     * Indicates if the column was created to be the row's heading in mobile
     * view.  It won't display column's header inline and it the column will
     * be hidden at larger screens)
     */
  isMobileHeader: _propTypes.default.bool,

  /**
     * Mobile options for displaying differently at small screens
     */
  mobileOptions: _propTypes.default.shape({
    /**
       * If false, will not render the cell at all for mobile
       */
    show: _propTypes.default.bool,

    /**
       * Only show for mobile? If true, will not render the column at all for desktop
       */
    only: _propTypes.default.bool,

    /**
       * Custom render/children if different from desktop
       */
    render: _propTypes.default.node,

    /**
       * The column's header for use in mobile view (automatically passed down
       * when using `EuiBasicTable`).
       * Or pass `false` to not show a header at all.
       */
    header: _propTypes.default.oneOfType([_propTypes.default.node.isRequired, _propTypes.default.bool.isRequired]),

    /**
       * Increase text size compared to rest of cells
       */
    enlarge: _propTypes.default.bool,

    /**
       * Allocates 100% of the width of the container in mobile view
       * (typically cells are contained to 50%)
       */
    fullWidth: _propTypes.default.bool,

    /**
       * Horizontal alignment of the text in the cell
       */
    align: _propTypes.default.oneOf(["left", "right", "center"]),

    /**
       * Don't allow line breaks within cells
       */
    showOnHover: _propTypes.default.bool,

    /**
       * Setting `textOnly` to `false` will break words unnecessarily on FF and
       * IE.  To combat this problem on FF, wrap contents with the css utility
       * `.eui-textBreakWord`.
       */
    textOnly: _propTypes.default.bool,

    /**
       * _Should only be used for action cells_
       */
    truncateText: _propTypes.default.bool,
    width: _propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.number.isRequired])
  })
};