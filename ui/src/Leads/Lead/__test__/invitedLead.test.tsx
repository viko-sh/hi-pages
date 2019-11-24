import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import { InvitedLead } from '../invitedLead';

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
  const wrapper = shallow(<InvitedLead {...props} />);
  return { props, wrapper };
};

describe('AcceptedLead component', () => {
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
});
