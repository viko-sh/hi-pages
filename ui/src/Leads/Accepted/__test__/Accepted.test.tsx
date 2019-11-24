import React from 'react';
import { mount, shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axios from '../../../shared/lib/api';

Enzyme.configure({ adapter: new Adapter() });

import { Accepted } from '../Accepted';

const defaultProps = {};

const mountComponent = (customProps: any = {}) => {
  const props = { ...defaultProps, ...customProps };
  const wrapper = shallow(<Accepted {...props} />);
  return { props, wrapper };
};

describe('Accepted component', () => {
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

describe('Accepted component ', () => {
  it('Should get records', async () => {
    const { wrapper } = mountComponent();

    const returnValues = {
      data: [
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
      ]
    };

    const spy = jest
      .spyOn(axios, 'get')
      .mockReturnValue(Promise.resolve(returnValues));

    await wrapper.instance().componentDidMount();
    expect(returnValues.data).toStrictEqual(wrapper.state().leads);
    spy.mockRestore();
  });

  it('Should show no result', async () => {
    const { wrapper } = mountComponent();

    const returnValues = {
      data: []
    };

    const spy = jest
      .spyOn(axios, 'get')
      .mockReturnValue(Promise.resolve(returnValues));

    expect(wrapper.find('div')).toHaveLength(1);
    spy.mockRestore();
  });
});
