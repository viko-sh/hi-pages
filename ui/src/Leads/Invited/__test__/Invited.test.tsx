import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import { InvitedInner } from '../Invited';

const defaultProps = {
  leads: [
    {
      id: 7,
      contactName: 'Darth',
      price: 30,
      description: 'Praesent elit ',
      categoryName: 'Electrical',
      suburbName: 'Bondi',
      postCode: '2026',
      createdAt: '2019-11-21T18:57:43.000Z'
    },
    {
      id: 4,
      contactName: 'Kylo',
      price: 15,
      description: 'Proin semper ',
      categoryName: 'Handyman',
      suburbName: 'Surry Hills',
      postCode: '2010',
      createdAt: '2019-11-21T18:57:43.000Z'
    }
  ],
  getInvited: jest.fn
};

const mountComponent = (customProps: any = {}) => {
  const props = { ...defaultProps, ...customProps };
  const wrapper = shallow(<InvitedInner {...props} />);
  return { props, wrapper };
};

describe('Invited component', () => {
  it('Should render', done => {
    const { wrapper } = mountComponent();
    expect(wrapper).toHaveLength(1);
    done();
  });
  it('should be match with snapshot', done => {
    const { wrapper } = mountComponent();
    wrapper.instance().componentDidMount();
    expect(wrapper).toMatchSnapshot();
    done();
  });
});
