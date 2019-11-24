import React from 'react';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import { LeadActions } from '../LeadActions';

const defaultProps = {
  id: 7,
  contactName: 'Darth',
  price: 30,
  description: 'Praesent elit ',
  categoryName: 'Electrical',
  suburbName: 'Bondi',
  postCode: '2026',
  createdAt: '2019-11-21T18:57:43.000Z'
};

const mountComponent = (customProps: any = {}) => {
  const props = { ...defaultProps, ...customProps };
  const wrapper = mount(<LeadActions {...props} />);
  return { props, wrapper };
};

describe('LeadActions component', () => {
  it('Should render header', done => {
    const { wrapper } = mountComponent();
    expect(wrapper).toHaveLength(1);
    done();
  });
  it('should be match with snapshot', done => {
    // Arrange (no Act required)
    const { wrapper } = mountComponent();
    // Assert
    expect(wrapper).toMatchSnapshot();
    done();
  });

  it('onAccept should be called on a click', () => {
    const fn = jest.fn();

    const { wrapper } = mountComponent({
      onAccept: fn
    });

    wrapper.find('button.accept').simulate('click');
    expect(fn).toBeCalled();
  });

  it('onDecline should be called on a click', () => {
    const fn = jest.fn();

    const { wrapper } = mountComponent({
      onDecline: fn
    });

    wrapper.find('button.decline').simulate('click');
    expect(fn).toBeCalled();
  });
});
