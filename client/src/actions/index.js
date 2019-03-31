import { TOGGLE_NAV_MENU } from '../constants';

export const toggleNavMenu = () => dispatch => {
  dispatch({ type: TOGGLE_NAV_MENU });
};
