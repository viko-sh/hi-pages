import axios from '../../shared/lib/api';

export class DefaultLeadsApi {
  getInvited() {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await axios.get('/api/jobs/invited');
        resolve(result.data);
      } catch (err) {
        reject(err);
      }
    });
  }

  getAccepted() {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await axios.get('/api/jobs/accepted');
        resolve(result.data);
      } catch (err) {
        reject(err);
      }
    });
  }

  async acceptLead(id: number) {
    try {
      await axios.post(`/api/jobs/accept-job/${id}`);
    } catch (err) {
      throw new Error(err);
    }
  }

  async declineLead(id: number) {
    try {
      await axios.post(`/api/jobs/decline-job/${id}`);
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default new DefaultLeadsApi();
