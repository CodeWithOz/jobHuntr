import { toggleNavMenu } from './';
import { TOGGLE_NAV_MENU } from '../constants';

describe('toggleNavMenu', () => {
  test('is a function', () => {
    expect(typeof toggleNavMenu).toEqual('function');
  });

  describe('returns', () => {
    test('the correct type', () => {
      const action = toggleNavMenu();
      expect(action.type).toBeDefined();
      expect(action.type).toEqual(TOGGLE_NAV_MENU);
    });
  });
});
