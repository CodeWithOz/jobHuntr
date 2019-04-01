import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';
import MenuIcon from './MenuIcon';
import NavBtn from './NavBtn';

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
      expect(wrapper.find({ type: 'login' }).is(NavBtn)).toEqual(true);
      expect(wrapper.find({ type: 'login' }).length).toEqual(1);
    });

    test('the menu icon', () => {
      expect(wrapper.find(MenuIcon).length).toEqual(1);
    });

    test('home', () => {
      expect(wrapper.find({ type: 'home' }).is(NavBtn)).toEqual(true);
      expect(wrapper.find({ type: 'home' }).length).toEqual(1);
    });
  });

  test(`'shown' class on nav buttons based on navMenuShown prop`, () => {
    const wrapper = shallow(<Navbar navMenuShown={true} />);
    expect(wrapper.find('.btn-list.shown').length).toEqual(1);

    wrapper.setProps({ navMenuShown: false });
    expect(wrapper.find('.btn-list.shown').length).toEqual(0);
  });
});
