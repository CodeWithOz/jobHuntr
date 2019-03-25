import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Navbar from './Navbar';

describe('App renders', () => {
  test('a Navbar', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Navbar).length).toEqual(1);
  });
});
