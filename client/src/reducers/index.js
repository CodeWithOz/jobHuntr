import { combineReducers } from 'redux';
import toggleNavMenuReducer from './toggleNavMenuReducer';

export default combineReducers({
  navMenuShown: toggleNavMenuReducer
});
