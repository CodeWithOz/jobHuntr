import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';
import Main from './Main';
import LandingPage from './pages/LandingPage';

describe('Main renders', () => {
  describe('a Route', () => {
    test('whose component is LandingPage', () => {
      const wrapper = shallow(<Main />);
      expect(wrapper.find({ component: LandingPage }).length).toEqual(1);
      expect(wrapper.find({ component: LandingPage }).is(Route)).toEqual(true);
    });
  });
});
