import modles from '../models';
import { JobsStatus } from '../constants';
export default class JobsService {
  static async getInvitedJobs() {
    const result = await modles.job.findAll({
      where: { status: JobsStatus.NEW }
    });
    return result;
  }

  static async getAcceptedJobs() {
    const result = await modles.job.findAll({
      where: { status: JobsStatus.ACCEPTED }
    });
    return result;
  }
}
