'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const express = require('express');
const server = express();
const port = 8080;
// const port = 9000;
server.use('/', (req, res) => {
  res.send('Hi there testing');
});
server.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map
