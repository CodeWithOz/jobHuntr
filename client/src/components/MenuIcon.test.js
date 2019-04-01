import React from 'react';
import { shallow } from 'enzyme';
import { MenuIcon } from './MenuIcon';

describe('MenuIcon renders', () => {
  describe('a Font Awesome icon', () => {
    test('for bars when navMenuShown is false', () => {
      const wrapper = shallow(<MenuIcon navMenuShown={false} />);
      expect(wrapper.find('.fas.fa-bars').length).toEqual(1);
      expect(wrapper.find('.fas.fa-times').length).toEqual(0);
    });
  });
});

describe('MenuIcon calls handleClick when clicked', () => {
  const mock = jest.fn();
  const wrapper = shallow(<MenuIcon handleClick={mock} />);
  expect(mock).not.toHaveBeenCalled();
  wrapper.find('button').simulate('click');
  expect(mock).toHaveBeenCalledTimes(1);
});
