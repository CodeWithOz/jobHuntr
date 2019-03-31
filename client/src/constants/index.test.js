import { INITIAL_STATE, TOGGLE_NAV_MENU } from './';

test('TOGGLE_NAV_MENU has the correct value', () => {
  expect(TOGGLE_NAV_MENU).toEqual('TOGGLE_NAV_MENU');
});

test('INITIAL_STATE has the correct navMenuShown value', () => {
  expect(INITIAL_STATE.navMenuShown).toEqual(false);
});
