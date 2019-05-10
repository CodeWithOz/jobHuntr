import React from 'react';
import { shallow } from 'enzyme';
import { LinkBtn } from './LinkBtn';

describe('LinkBtn renders', () => {
  test('a button', () => {
    const wrapper = shallow(<LinkBtn />);
    expect(wrapper.find('button').length).toEqual(1);
  });

  test('a button that gets the props passed to LinkBtn', () => {
    const className = 'test',
      children = 'test',
      wrapper = shallow(<LinkBtn className={className}>{children}</LinkBtn>);

    expect(wrapper.find('button').prop('children')).toEqual(children);
    expect(wrapper.find('button').prop('className')).toEqual(className);
  });
});

describe('When clicked, the inner button', () => {
  test(`pushes the 'to' prop to the history stack`, () => {
    const props = {
      history: {
        push: jest.fn()
      },
      to: 'test'
    };
    const wrapper = shallow(<LinkBtn {...props} />);
    const innerBtn = wrapper.find('button');

    expect(props.history.push).not.toHaveBeenCalled();
    innerBtn.simulate('click');
    expect(props.history.push).toHaveBeenCalledTimes(1);
    expect(props.history.push).toHaveBeenCalledWith(props.to);
  });
});
