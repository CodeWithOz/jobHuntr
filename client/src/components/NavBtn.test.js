import React from 'react';
import { shallow } from 'enzyme';
import NavBtn from './NavBtn';

describe('NavBtn renders', () => {
  test('its text prop', () => {
    const text = 'test';
    const wrapper = shallow(<NavBtn text={text} />);
    expect(wrapper.text()).toContain(text);
  });
});
