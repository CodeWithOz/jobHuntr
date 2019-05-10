import React from 'react';
import { shallow } from 'enzyme';
import LinkBtn from './LinkBtn';

describe('LinkBtn renders', () => {
  test('a button', () => {
    const wrapper = shallow(<LinkBtn />);
    expect(wrapper.find('button').length).toEqual(1);
  });
});
