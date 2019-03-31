import { INITIAL_STATE, TOGGLE_NAV_MENU } from '../../constants';

const toggleNavMenuReducer = (
  currentState = INITIAL_STATE.navMenuShown,
  { type, payload }
) => {
  return type === TOGGLE_NAV_MENU ? payload : currentState;
};

export default toggleNavMenuReducer;
