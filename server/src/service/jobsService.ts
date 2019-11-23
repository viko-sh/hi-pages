import models from '../models';
import { JobsStatus } from '../constants';

export default class JobsService {
  static async getInvitedJobs() {
    // throw new Error('we had an error');

    const result = await models.job.findAll({
      where: { status: JobsStatus.NEW },
      include: [
        {
          model: models.category,
          as: 'category'
        }
      ]
    });
    return result;
  }

  static async getAcceptedJobs() {
    const result = await models.job.findAll({
      where: { status: JobsStatus.ACCEPTED }
    });
    return result;
  }

  static async changeJobStatus(id: number, status: JobsStatus) {
    const result = await models.job.update({ status }, { where: { id } });
    console.log('changeJobStatus: ', result);
    return result;
  }
}
