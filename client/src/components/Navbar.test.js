import React from 'react';
import { shallow } from 'enzyme';
import { Navbar } from './Navbar';
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
      expect(wrapper.find({ text: 'login' }).is(NavBtn)).toEqual(true);
      expect(wrapper.find({ text: 'login' }).length).toEqual(1);
    });

    test('the menu icon', () => {
      expect(wrapper.find(MenuIcon).length).toEqual(1);
    });

    test('home', () => {
      expect(wrapper.find({ text: 'home' }).is(NavBtn)).toEqual(true);
      expect(wrapper.find({ text: 'home' }).length).toEqual(1);
    });
  });

  test(`'shown' class on nav buttons based on navMenuShown prop`, () => {
    const wrapper = shallow(<Navbar navMenuShown={true} />);
    expect(wrapper.find('.btn-list.shown').length).toEqual(1);

    wrapper.setProps({ navMenuShown: false });
    expect(wrapper.find('.btn-list.shown').length).toEqual(0);
  });
});

describe('Button for', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Navbar />);
  });

  describe('login', () => {
    test('is not a link', () => {
      expect(wrapper.find({ text: 'login' }).prop('isLink')).toBe(false);
    });
  });

  describe('home', () => {
    let homeBtn;

    beforeEach(() => {
      homeBtn = wrapper.find({ text: 'home' });
    });

    test('is a link', () => {
      expect(homeBtn.prop('isLink')).toBe(true);
    });

    test(`has a 'to' prop`, () => {
      expect(homeBtn.prop('to')).toBeDefined();
    });
  });
});
