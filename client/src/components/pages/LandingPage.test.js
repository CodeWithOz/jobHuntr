import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
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

  test('two preview images for the first CTA', () => {
    expect(wrapper.find('.first-cta .preview-img').length).toEqual(2);
    wrapper.find('.first-cta .preview-img').forEach(node => {
      expect(node.is('img')).toEqual(true);
    });
  });

  test('one preview image for the second CTA', () => {
    expect(wrapper.find('.second-cta .preview-img').length).toEqual(1);
    expect(wrapper.find('.second-cta .preview-img').is('img')).toEqual(true);
  });

  test('two links to the demo page', () => {
    const demoUrl = '/demo';
    expect(wrapper.find({ to: demoUrl }).length).toEqual(2);
    wrapper.find({ to: demoUrl }).forEach(node => {
      expect(node.is(Link)).toEqual(true);
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
    cta2.paragraphs.forEach(paragraph => {
      expect(wrapper.text()).toContain(paragraph);
    });
    expect(wrapper.text()).toContain(cta2.action);
  });
});
