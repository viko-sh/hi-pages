import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import { HeaderInner } from '../Header';

const defaultProps = {
  location: {
    pathname: '/accepted'
  }
};

const mountComponent = (customProps: any = {}) => {
  const props = { ...defaultProps, ...customProps };
  const wrapper = shallow(<HeaderInner {...props} />);
  return { props, wrapper };
};

describe('Header component', () => {
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
