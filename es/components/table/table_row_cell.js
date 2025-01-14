function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { Fragment } from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
import { LEFT_ALIGNMENT, RIGHT_ALIGNMENT, CENTER_ALIGNMENT } from '../../services';
import { resolveWidthAsStyle } from './utils';
export var EuiTableRowCell = function EuiTableRowCell(_ref) {
  var _ref$align = _ref.align,
      align = _ref$align === void 0 ? LEFT_ALIGNMENT : _ref$align,
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

  var cellClasses = classNames('euiTableRowCell', {
    'euiTableRowCell--hasActions': hasActions,
    'euiTableRowCell--isExpander': isExpander,
    'euiTableRowCell--hideForDesktop': mobileOptions.only || isMobileHeader,
    'euiTableRowCell--enlargeForMobile': mobileOptions.enlarge || isMobileHeader,
    'euiTableRowCell--isMobileFullWidth': mobileOptions.fullWidth || isMobileFullWidth || isMobileHeader
  });
  var contentClasses = classNames('euiTableCellContent', className, {
    'euiTableCellContent--alignRight': align === RIGHT_ALIGNMENT,
    'euiTableCellContent--alignCenter': align === CENTER_ALIGNMENT,
    'euiTableCellContent--showOnHover': showOnHover,
    'euiTableCellContent--truncateText': truncateText,
    // We're doing this rigamarole instead of creating `euiTableCellContent--textOnly` for BWC
    // purposes for the time-being.
    'euiTableCellContent--overflowingContent': textOnly !== true
  });
  var mobileContentClasses = classNames('euiTableCellContent', className, {
    'euiTableCellContent--alignRight': mobileOptions.align === RIGHT_ALIGNMENT || align === RIGHT_ALIGNMENT,
    'euiTableCellContent--alignCenter': mobileOptions.align === CENTER_ALIGNMENT || align === RIGHT_ALIGNMENT,
    'euiTableCellContent--showOnHover': mobileOptions.showOnHover || showOnHover,
    'euiTableCellContent--truncateText': mobileOptions.truncateText || truncateText,
    // We're doing this rigamarole instead of creating `euiTableCellContent--textOnly` for BWC
    // purposes for the time-being.
    'euiTableCellContent--overflowingContent': mobileOptions.textOnly !== true || textOnly !== true
  });
  var childClasses = classNames({
    euiTableCellContent__text: textOnly === true,
    euiTableCellContent__hoverItem: showOnHover
  });
  var styleObj = resolveWidthAsStyle(style, width);

  function modifyChildren(children) {
    var modifiedChildren = children;

    if (textOnly === true) {
      modifiedChildren = React.createElement("span", {
        className: childClasses
      }, children);
    } else if (React.isValidElement(children)) {
      modifiedChildren = React.Children.map(children, function (child) {
        return React.cloneElement(child, {
          className: classNames(child.props.className, childClasses)
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
    cellRender = React.createElement("td", _extends({
      className: "".concat(cellClasses, " ").concat(hideForMobileClasses),
      style: styleObj
    }, rest), React.createElement("div", {
      className: contentClasses
    }, childrenNode));
  } else {
    cellRender = React.createElement("td", _extends({
      className: cellClasses,
      style: styleObj
    }, rest), (mobileOptions.header || header) && !isMobileHeader && React.createElement("div", {
      className: "euiTableRowCell__mobileHeader ".concat(showForMobileClasses)
    }, mobileOptions.header || header), mobileOptions.render ? React.createElement(Fragment, null, React.createElement("div", {
      className: "".concat(mobileContentClasses, " ").concat(showForMobileClasses)
    }, modifyChildren(mobileOptions.render)), React.createElement("div", {
      className: "".concat(contentClasses, " ").concat(hideForMobileClasses)
    }, childrenNode)) : React.createElement("div", {
      className: contentClasses
    }, childrenNode));
  }

  return cellRender;
};
EuiTableRowCell.propTypes = {
  className: PropTypes.string,
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string,
  align: PropTypes.oneOf(["left", "right", "center"]),

  /**
     * Don't allow line breaks within cells
     */
  showOnHover: PropTypes.bool,

  /**
     * Setting `textOnly` to `false` will break words unnecessarily on FF and
     * IE.  To combat this problem on FF, wrap contents with the css utility
     * `.eui-textBreakWord`.
     */
  textOnly: PropTypes.bool,

  /**
     * _Should only be used for action cells_
     */
  truncateText: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]),

  /**
     * Indicates if the column is dedicated to icon-only actions (currently
     * affects mobile only)
     */
  hasActions: PropTypes.bool,

  /**
     * _DEPRECATED: use `mobileOptions.header`_
     * The column's header title for use in mobile view (will be added as a
     * data-attr)
     */
  header: PropTypes.string,

  /**
     * _DEPRECATED: use `mobileOptions.show = false`_
     * Indicates if the column should not show for mobile users (typically
     * hidden because a custom mobile header utilizes the column's contents)
     */
  hideForMobile: PropTypes.bool,

  /**
     * Indicates if the column is dedicated as the expandable row toggle
     */
  isExpander: PropTypes.bool,

  /**
     * _DEPRECATED: use `mobileOptions.fullWidth`_
     * Allocates 100% of the width of the container in mobile view
     * (typically cells are contained to 50%)
     */
  isMobileFullWidth: PropTypes.bool,

  /**
     * _DEPRECATED: use `mobileOptions.only = true & mobileOptions.header = * false`_
     * Indicates if the column was created to be the row's heading in mobile
     * view.  It won't display column's header inline and it the column will
     * be hidden at larger screens)
     */
  isMobileHeader: PropTypes.bool,

  /**
     * Mobile options for displaying differently at small screens
     */
  mobileOptions: PropTypes.shape({
    /**
       * If false, will not render the cell at all for mobile
       */
    show: PropTypes.bool,

    /**
       * Only show for mobile? If true, will not render the column at all for desktop
       */
    only: PropTypes.bool,

    /**
       * Custom render/children if different from desktop
       */
    render: PropTypes.node,

    /**
       * The column's header for use in mobile view (automatically passed down
       * when using `EuiBasicTable`).
       * Or pass `false` to not show a header at all.
       */
    header: PropTypes.oneOfType([PropTypes.node.isRequired, PropTypes.bool.isRequired]),

    /**
       * Increase text size compared to rest of cells
       */
    enlarge: PropTypes.bool,

    /**
       * Allocates 100% of the width of the container in mobile view
       * (typically cells are contained to 50%)
       */
    fullWidth: PropTypes.bool,

    /**
       * Horizontal alignment of the text in the cell
       */
    align: PropTypes.oneOf(["left", "right", "center"]),

    /**
       * Don't allow line breaks within cells
       */
    showOnHover: PropTypes.bool,

    /**
       * Setting `textOnly` to `false` will break words unnecessarily on FF and
       * IE.  To combat this problem on FF, wrap contents with the css utility
       * `.eui-textBreakWord`.
       */
    textOnly: PropTypes.bool,

    /**
       * _Should only be used for action cells_
       */
    truncateText: PropTypes.bool,
    width: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired])
  })
};