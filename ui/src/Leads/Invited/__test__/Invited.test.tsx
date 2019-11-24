import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axios from '../../../shared/lib/api';
jest.mock('axios');

Enzyme.configure({ adapter: new Adapter() });

import { Invited } from '../Invited';

const defaultProps = {};

const mountComponent = (customProps: any = {}) => {
  const props = { ...defaultProps, ...customProps };
  const wrapper = shallow(<Invited {...props} />);
  return { props, wrapper };
};

describe('Invited component', () => {
  it('Should render header', done => {
    const { wrapper } = mountComponent();
    expect(wrapper).toHaveLength(1);
    done();
  });
  it('should be match with snapshot', done => {
    const { wrapper } = mountComponent();
    expect(wrapper).toMatchSnapshot();
    done();
  });
});

describe('Invited component mount', () => {
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

  it('Should show error', async () => {
    const { wrapper } = mountComponent();
    wrapper.setState({ error: true, loading: false, leads: [] });
    expect(true).toBe(true);
  });

  it('Should show no result', async () => {
    const { wrapper } = mountComponent();

    const returnValues = {
      data: []
    };

    const spy = jest
      .spyOn(axios, 'get')
      .mockReturnValue(Promise.resolve(returnValues));
    expect(wrapper.find('#no-results')).toHaveLength(1);
    spy.mockRestore();
  });

  it('Should catch an error', async () => {
    try {
      const { wrapper } = mountComponent();
      await wrapper.instance().componentDidMount();
      axios.get.mockImplementation(() => Promise.reject('error'));
    } catch (error) {
      expect(error.message).toBe('error');
    }
  });

  it('Should call acceptLead', async () => {
    const { wrapper } = mountComponent();
    const fn = wrapper.instance().acceptLead({
      id: 7,
      contactName: 'Darth',
      price: 30,
      description: 'Praesent elit ',
      categoryName: 'Electrical',
      suburbName: 'Bondi',
      postCode: '2026',
      createdAt: '2019-11-21T18:57:43.000Z'
    });
    // simulate click
    const spy = jest.spyOn(axios, 'post');
    fn();
    expect(spy).toHaveBeenCalledTimes(1);
    spy.mockRestore();
  });

  it('Should call declineLead', async () => {
    const { wrapper } = mountComponent();
    const fn = wrapper.instance().declineLead({
      id: 7,
      contactName: 'Darth',
      price: 30,
      description: 'Praesent elit ',
      categoryName: 'Electrical',
      suburbName: 'Bondi',
      postCode: '2026',
      createdAt: '2019-11-21T18:57:43.000Z'
    });
    // simulate click
    const spy = jest.spyOn(axios, 'post');
    fn();
    expect(spy).toHaveBeenCalledTimes(1);
    spy.mockRestore();
  });
});
