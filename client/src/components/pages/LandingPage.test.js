import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from './LandingPage';
import Button from '../Button';

describe('Landing page renders', () => {
  test('a login button', () => {
    const wrapper = shallow(<LandingPage />);
    expect(wrapper.find({ type: 'login' }).length).toEqual(1);
    expect(wrapper.find({ type: 'login' }).is(Button)).toEqual(true);
  });
});
