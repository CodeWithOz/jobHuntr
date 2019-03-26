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
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Navbar />);
    });

    test('logging in', () => {
      expect(wrapper.find('.log-in-btn').length).toEqual(1);
    });

    test('the menu icon', () => {
      expect(wrapper.find('.fas.fa-bars').length).toEqual(1);
    });
  });
});
