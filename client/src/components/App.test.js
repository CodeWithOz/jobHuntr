import React from 'react';
import { shallow } from 'enzyme';
import { HashRouter } from 'react-router-dom';
import App, { appConfig } from './App';
import Navbar from './Navbar';

describe('App renders', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test('a Navbar', () => {
    expect(wrapper.find(Navbar).length).toEqual(1);
  });

  test('a HashRouter for URL routing', () => {
    expect(wrapper.find(HashRouter).length).toEqual(1);
  });
});

describe('App correctly assigns', () => {
  test('Navbar title', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Navbar).prop('title')).toEqual(appConfig.title);
  });
});
