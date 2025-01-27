/**
 * These keys are used for navigating cascading menu UI components.
 *
 * UP: Select the previous item in the list.
 * DOWN: Select the next item in the list.
 * LEFT: Show the previous menu.
 * RIGHT: Show the next menu for the selected item.
 * ESC: Deselect the current selection and hide the list.
 * TAB: Normal tabbing navigation is still supported.
 */
import { DOWN, ESCAPE, LEFT, RIGHT, UP, TAB } from '../key_codes';
export var cascadingMenuKeyCodes = {
  DOWN: DOWN,
  ESCAPE: ESCAPE,
  LEFT: LEFT,
  RIGHT: RIGHT,
  UP: UP,
  TAB: TAB
};