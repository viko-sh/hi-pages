import * as express from 'express';
const models = require('./models');

const server = express();
// const port = 8080;
const port = 9000;

server.use('/', async (req, res) => {
  const result = await models.job.findAll();
  // console.log(models);
  console.log(result);
  res.json(result);
});

server.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
