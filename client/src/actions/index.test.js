import { toggleNavMenu } from './';

describe('toggleNavMenu', () => {
  test('is a function', () => {
    expect(typeof toggleNavMenu).toEqual('function');
  });

  describe('returns', () => {
    test('a function', () => {
      expect(typeof toggleNavMenu()).toEqual('function');
    });
  });
});
