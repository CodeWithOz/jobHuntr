import { combineReducers } from 'redux';

const dummyReducer = () => 'dummy state';

export default combineReducers({
  dummyState: dummyReducer
});
