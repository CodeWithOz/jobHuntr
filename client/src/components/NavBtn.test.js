import React from 'react';
import { shallow } from 'enzyme';
import NavBtn from './NavBtn';

describe('NavBtn renders', () => {
  test('its type prop', () => {
    const type = 'test';
    const wrapper = shallow(<NavBtn type={type} />);
    expect(wrapper.text()).toContain(type);
  });
});
