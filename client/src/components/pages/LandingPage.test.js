import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from './LandingPage';
import Button from '../Button';

describe('Landing page renders', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<LandingPage />);
  });

  test('a login button', () => {
    expect(wrapper.find({ type: 'login' }).length).toEqual(1);
    expect(wrapper.find({ type: 'login' }).is(Button)).toEqual(true);
  });

  test('a preview image', () => {
    expect(wrapper.find('.preview-img').length).toEqual(1);
    expect(wrapper.find('.preview-img').is('img')).toEqual(true);
  });
});
