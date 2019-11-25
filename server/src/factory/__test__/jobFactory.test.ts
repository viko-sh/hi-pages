import { JobsStatus } from '../../constants';
import { InvitedJobFactory } from './../invitedJobFactory';
import { AcceptedJobFactory } from './../acceptedJobFactory';

describe('Jobs Factory', () => {
  it('JobsFactory toJason method should return invited shape', () => {
    const data = {
      id: 5,
      status: JobsStatus.NEW,
      suburb_id: 5,
      category_id: 5,
      contact_name: 'Lando Calrissian',
      price: 62,
      description: 'text',
      createdAt: '2019-11-21T18:57:43.000Z',
      suburb: { name: 'Newtown', postcode: 2042 },
      category: { name: 'Building' }
    };

    const result = {
      categoryName: 'Building',
      contactEmail: undefined,
      contactName: 'Lando',
      contactPhone: undefined,
      createdAt: '2019-11-21T18:57:43.000Z',
      description: 'text',
      id: 5,
      postCode: 2042,
      price: 62,
      suburbName: 'Newtown'
    };

    const job = new InvitedJobFactory(data);
    expect(result).toEqual(job.toResult());
  });

  it('JobsFactory toJason method should return accepted shape', () => {
    const data = {
      id: 5,
      status: JobsStatus.ACCEPTED,
      suburb_id: 5,
      category_id: 5,
      contact_name: 'Lando',
      price: 62,
      description: 'text',
      createdAt: '2019-11-21T18:57:43.000Z',
      suburb: { name: 'Newtown', postcode: 2042 },
      category: { name: 'Building' }
    };

    const result = {
      categoryName: 'Building',
      contactEmail: undefined,
      contactName: 'Lando',
      contactPhone: undefined,
      createdAt: '2019-11-21T18:57:43.000Z',
      description: 'text',
      id: 5,
      postCode: 2042,
      price: 62,
      suburbName: 'Newtown'
    };

    const job = new AcceptedJobFactory(data);
    expect(result).toEqual(job.toResult());
  });
});
