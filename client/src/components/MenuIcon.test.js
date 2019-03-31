import React from 'react';
import { shallow } from 'enzyme';
import { MenuIcon } from './MenuIcon';

describe('MenuIcon renders', () => {
  test('a Font Awesome icon', () => {
    const wrapper = shallow(<MenuIcon />);
    expect(wrapper.find('.fas.fa-bars').length).toEqual(1);
  });
});

describe('MenuIcon calls handleClick when clicked', () => {
  const mock = jest.fn();
  const wrapper = shallow(<MenuIcon handleClick={mock} />);
  expect(mock).not.toHaveBeenCalled();
  wrapper.find('button').simulate('click');
  expect(mock).toHaveBeenCalledTimes(1);
});
