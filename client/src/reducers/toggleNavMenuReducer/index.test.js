import toggleNavMenuReducer from './';
import { INITIAL_STATE } from '../../constants';

describe('toggleNavMenuReducer', () => {
  test('is a function', () => {
    expect(typeof toggleNavMenuReducer).toEqual('function');
  });

  describe('returns', () => {
    test('the initial state by default', () => {
      const state = toggleNavMenuReducer(undefined, {});
      expect(state).toEqual(INITIAL_STATE.navMenuShown);
    });

    test(`the current state when action doesn't match`, () => {
      let currentState = false;
      let state = toggleNavMenuReducer(currentState, {});
      expect(state).toEqual(currentState);

      currentState = true;
      state = toggleNavMenuReducer(currentState, {});
      expect(state).toEqual(currentState);
    });
  });
});
