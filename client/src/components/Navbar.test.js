import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';

describe('Navbar renders', () => {
  test('a logo image', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find('.logo').length).toEqual(1);
    expect(wrapper.find('.logo').is('img')).toEqual(true);
  });
});
