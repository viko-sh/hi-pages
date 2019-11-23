import * as express from 'express';
import jobRoutes from './routes/api/jobsRoutes';

const server = express();
// const port = 8080;
const port = 9000;

server.use('/api/jobs', jobRoutes);

server.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
