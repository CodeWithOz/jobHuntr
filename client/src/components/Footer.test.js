import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer renders', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });

  test('a horizontal rule', () => {
    expect(wrapper.find('hr').length).toEqual(1);
  });

  test('a link to huntr.com', () => {
    expect(wrapper.find('[href="https://huntr.co"]').length).toEqual(1);
  });
});
