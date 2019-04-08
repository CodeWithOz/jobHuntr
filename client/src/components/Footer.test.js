import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer renders', () => {
  test('a horizontal rule', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('hr').length).toEqual(1);
  });
});
