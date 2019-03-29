import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button renders', () => {
  test(`its 'type' prop`, () => {
    const type = 'test';
    const wrapper = shallow(<Button type={type} />);
    expect(wrapper.text()).toContain(type);
  });
});
