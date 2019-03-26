import React from 'react';
import { shallow } from 'enzyme';
import App, { appConfig } from './App';
import Navbar from './Navbar';

describe('App renders', () => {
  test('a Navbar', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Navbar).length).toEqual(1);
  });
});

describe('App correctly assigns', () => {
  test('Navbar title', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Navbar).prop('title')).toEqual(appConfig.title);
  });
});
