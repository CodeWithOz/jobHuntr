import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';
import Main from './Main';
import LandingPage from './pages/LandingPage';
import DemoPage from './pages/DemoPage';

describe('Main renders', () => {
  describe('a Route', () => {
    test('whose component is LandingPage', () => {
      const wrapper = shallow(<Main />);
      expect(wrapper.find({ component: LandingPage }).length).toEqual(1);
      expect(wrapper.find({ component: LandingPage }).is(Route)).toEqual(true);
    });

    test('whose component is DemoPage', () => {
      const wrapper = shallow(<Main />);
      expect(wrapper.find({ component: DemoPage }).length).toEqual(1);
      expect(wrapper.find({ component: DemoPage }).is(Route)).toEqual(true);
    });
  });
});
