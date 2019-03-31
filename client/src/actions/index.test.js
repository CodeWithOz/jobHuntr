import { toggleNavMenu } from './';
import { TOGGLE_NAV_MENU } from '../constants';

describe('toggleNavMenu', () => {
  test('is a function', () => {
    expect(typeof toggleNavMenu).toEqual('function');
  });

  describe('returns', () => {
    test('a function', () => {
      expect(typeof toggleNavMenu()).toEqual('function');
    });

    describe('a function that', () => {
      describe('dispatches an action with', () => {
        let dispatch, thunk;

        beforeEach(() => {
          dispatch = jest.fn();
          thunk = jest.fn(toggleNavMenu());
        });

        test('the correct type', () => {
          expect(thunk).not.toHaveBeenCalled();
          expect(dispatch).not.toHaveBeenCalled();

          thunk(dispatch);
          expect(dispatch).toHaveBeenCalledTimes(1);
          const dispatchedAction = dispatch.mock.calls[0][0];
          expect(dispatchedAction.type).toBeDefined();
          expect(dispatchedAction.type).toEqual(TOGGLE_NAV_MENU);
        });

        test('payload reversed from previous state', () => {
          expect(thunk).not.toHaveBeenCalled();
          expect(dispatch).not.toHaveBeenCalled();

          const navMenuShown = true;
          const getState = jest.fn(() => {
            return { navMenuShown };
          });
          thunk(dispatch, getState);
          const dispatchedAction = dispatch.mock.calls[0][0];
          expect(dispatchedAction.payload).toEqual(!navMenuShown);
        });
      });
    });
  });
});
