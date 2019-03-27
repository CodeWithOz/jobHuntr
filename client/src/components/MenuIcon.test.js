import React from 'react';
import { shallow } from 'enzyme';
import MenuIcon from './MenuIcon';

describe('MenuIcon renders', () => {
  test('a Font Awesome icon', () => {
    const wrapper = shallow(<MenuIcon />);
    expect(wrapper.find('.fas.fa-bars').length).toEqual(1);
  });
});
