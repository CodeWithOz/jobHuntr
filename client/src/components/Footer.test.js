import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer renders', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });

  test('a link to huntr.com', () => {
    expect(wrapper.find('[href="https://huntr.co"]').length).toEqual(1);
  });

  test('a link to the github repo', () => {
    expect(
      wrapper.find('[href="https://github.com/CodeWithOz/jobHuntr"]').length
    ).toEqual(1);
  });

  test('a link to my LinkedIn', () => {
    expect(
      wrapper.find('[href="https://www.linkedin.com/in/uchechukwu-ozoemena/"]')
        .length
    ).toEqual(1);
  });
});
