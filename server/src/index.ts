import * as express from 'express';

const server = express();
// const port = 8080;
const port = 9000;

server.use('/', (req, res) => {
  res.send('Hi there');
});

server.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
