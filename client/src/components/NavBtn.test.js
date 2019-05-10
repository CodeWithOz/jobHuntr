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

  test('a LinkBtn according to isLink prop', () => {
    const wrapper = shallow(<NavBtn isLink />);
    expect(wrapper.find(LinkBtn).length).toEqual(1);

    wrapper.setProps({ isLink: false });
    expect(wrapper.find(LinkBtn).length).toEqual(0);
  });
});
