import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';

describe('Navbar renders', () => {
  test('a logo image', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find('.logo').length).toEqual(1);
    expect(wrapper.find('.logo').is('img')).toEqual(true);
  });

  test('the supplied title', () => {
    const title = 'test';
    const wrapper = shallow(<Navbar title={title} />);
    expect(wrapper.text()).toContain(title);
  });

  describe('a button for', () => {
    test('logging in', () => {
      const wrapper = shallow(<Navbar />);
      expect(wrapper.find('.log-in-btn').length).toEqual(1);
    });
  });
});
