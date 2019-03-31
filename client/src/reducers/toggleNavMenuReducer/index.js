import { INITIAL_STATE, TOGGLE_NAV_MENU } from '../../constants';

const toggleNavMenuReducer = (
  currentState = INITIAL_STATE.navMenuShown,
  { type }
) => {
  if (type !== TOGGLE_NAV_MENU) {
    return currentState;
  }
};

export default toggleNavMenuReducer;
