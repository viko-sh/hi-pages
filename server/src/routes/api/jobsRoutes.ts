import * as express from 'express';
import { Request, Response } from 'express';
import JobsService from '../../service/jobsService';

const router = express.Router();

router.get('/invited', async (req: Request, res: Response) => {
  try {
    const result = await JobsService.getInvitedJobs();
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
});

router.get('/accepted', async (req: Request, res: Response) => {
  try {
    const result = await JobsService.getAcceptedJobs();
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
});

export default router;
