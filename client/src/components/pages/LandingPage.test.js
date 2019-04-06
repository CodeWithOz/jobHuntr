import React from 'react';
import { shallow } from 'enzyme';
import LandingPage, { landingPageConfig } from './LandingPage';
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

  test('two preview images', () => {
    expect(wrapper.find('.preview-img').length).toEqual(2);
    wrapper.find('.preview-img').forEach(node => {
      expect(node.is('img')).toEqual(true);
    });
  });

  test('the CTA text', () => {
    const { cta1, cta2 } = landingPageConfig;

    // first CTA
    expect(wrapper.text()).toContain(cta1.text1);
    expect(wrapper.text()).toContain(cta1.text2);
    expect(wrapper.text()).toContain(cta1.demoText);

    // second CTA
    expect(wrapper.text()).toContain(cta2.heading);
    expect(wrapper.text()).toContain(cta2.paragraph);
    expect(wrapper.text()).toContain(cta2.cta);
  });
});
