import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import App from './App';

const mountComponent = () => {
  const wrapper = shallow(<App />);
  return { wrapper };
};
it('renders without crashing', () => {
  // Arrange (no Act required)
  const { wrapper } = mountComponent();
  // Assert
  expect(wrapper).toMatchSnapshot();
});
