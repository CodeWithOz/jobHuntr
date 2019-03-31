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
  });
});
