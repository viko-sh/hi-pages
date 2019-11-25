import JobsService from '../jobsService';
import models from '../../models';
import { JobsStatus } from '../../constants';

const mockJobA = {
  id: 1,
  contactName: 'Darth Doe',
  price: 30,
  description: 'text',
  categoryName: 'Electrical',
  suburbName: 'Bondi',
  postCode: '2026',
  createdAt: '2019-11-21T18:57:43.000Z'
};

const mockJobB = {
  id: 2,
  contactName: 'Lando Doe',
  price: 62,
  description: 'text',
  categoryName: 'Building',
  suburbName: 'Newtown',
  postCode: '2042',
  createdAt: '2019-11-21T18:57:43.000Z'
};

const a = {
  ...mockJobA,
  get: () => {
    return mockJobA;
  }
};

const b = {
  ...mockJobB,
  get: () => {
    return mockJobB;
  }
};

const mockData = [a, b];

const mockJobModel = {
  // tslint:disable-next-line:no-empty
  findAll: () => {},
  // tslint:disable-next-line:no-empty
  update: () => {}
};

mockJobModel.update = () => {
  return Promise.resolve([1]);
};

mockJobModel.findAll = () => {
  return Promise.resolve(mockData);
};

models['job'] = mockJobModel;

describe('Jobs Service ', () => {
  it('List all active jobs - should get jobs array', async () => {
    const result = await JobsService.getInvitedJobs();

    expect(result.length).toEqual(2);
  });

  it('List all accepted jobs - should get jobs array', async () => {
    const result = await JobsService.getAcceptedJobs();
    expect(result.length).toEqual(2);
  });

  it('Update change status - should return array', async () => {
    const result = await JobsService.changeJobStatus(1, JobsStatus.NEW);
    expect(result.length).toEqual(1);
  });

  it('Should catch an error on getInvitedJobs', async () => {
    try {
      mockJobModel.findAll = undefined;
      await JobsService.getInvitedJobs();
    } catch (err) {
      expect(err).toEqual(err);
    }
  });

  it('Should catch an error on getAcceptedJobs', async () => {
    try {
      mockJobModel.findAll = undefined;
      await JobsService.getAcceptedJobs();
    } catch (err) {
      expect(err).toEqual(err);
    }
  });
});
