import * as express from 'express';
import { Request, Response } from 'express';
import JobsService from '../../service/jobsService';
import { JobsStatus } from '../../constants';
const router = express.Router();

router.get('/invited', async (req: Request, res: Response) => {
  try {
    const result = await JobsService.getInvitedJobs();
    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get('/accepted', async (req: Request, res: Response) => {
  try {
    const result = await JobsService.getAcceptedJobs();
    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post('/accept-job/:jobId', async (req: Request, res: Response) => {
  try {
    const { jobId } = req.params;

    const result = await JobsService.changeJobStatus(
      jobId,
      JobsStatus.ACCEPTED
    );
    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post('/decline-job/:jobId', async (req: Request, res: Response) => {
  try {
    const { jobId } = req.params;

    const result = await JobsService.changeJobStatus(
      jobId,
      JobsStatus.DECLINED
    );
    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

export default router;
