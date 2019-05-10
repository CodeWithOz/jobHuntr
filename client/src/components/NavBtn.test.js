import React from 'react';
import { shallow } from 'enzyme';
import NavBtn from './NavBtn';
import LinkBtn from './LinkBtn';

describe('NavBtn renders', () => {
  test('its text prop', () => {
    const text = 'test';
    const wrapper = shallow(<NavBtn text={text} />);
    expect(wrapper.text()).toContain(text);
  });

  describe('a LinkBtn', () => {
    test('according to isLink prop', () => {
      const wrapper = shallow(<NavBtn isLink />);
      expect(wrapper.find(LinkBtn).length).toEqual(1);

      wrapper.setProps({ isLink: false });
      expect(wrapper.find(LinkBtn).length).toEqual(0);
    });

    test(`with the correct 'to' prop`, () => {
      const to = 'test';
      const wrapper = shallow(<NavBtn isLink to={to} />);

      expect(wrapper.find(LinkBtn).prop('to')).toEqual(to);
    });
  });
});
