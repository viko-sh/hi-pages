import models from '../models';
import { JobsStatus } from '../constants';

export default class JobsService {
  static async getInvitedJobs() {
    const result = await models.job.findAll({
      attributes: [
        'id',
        'status',
        'suburb_id',
        'category_id',
        'contact_name',
        'price',
        'description'
      ],
      where: { status: JobsStatus.NEW },
      include: [
        {
          attributes: ['name', 'postcode'],
          model: models.suburb,
          as: 'suburb'
        },
        {
          attributes: ['name'],
          model: models.category,
          as: 'category'
        }
      ]
    });
    return result;
  }

  static async getAcceptedJobs() {
    const result = await models.job.findAll({
      attributes: [
        'id',
        'status',
        'suburb_id',
        'category_id',
        'contact_name',
        'contact_phone',
        'contact_email',
        'price',
        'description'
      ],
      where: { status: JobsStatus.ACCEPTED },
      include: [
        {
          attributes: ['name', 'postcode'],
          model: models.suburb,
          as: 'suburb'
        },
        {
          attributes: ['name'],
          model: models.category,
          as: 'category'
        }
      ]
    });

    return result;
  }

  static async changeJobStatus(id: number, status: JobsStatus) {
    const result = await models.job.update({ status }, { where: { id } });
    console.log('changeJobStatus: ', result);
    return result;
  }
}
