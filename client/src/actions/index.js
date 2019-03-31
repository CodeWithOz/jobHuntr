import { TOGGLE_NAV_MENU } from '../constants';

export const toggleNavMenu = () => (dispatch, getState) => {
  dispatch({ type: TOGGLE_NAV_MENU, payload: !getState().navMenuShown });
};
