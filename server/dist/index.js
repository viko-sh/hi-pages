"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const jobsRoutes_1 = require("./routes/api/jobsRoutes");
const server = express();
// const port = 8080;
const port = 9000;
server.use('/api/jobs', jobsRoutes_1.default);
server.use(function (error, req, res, next) {
    // Will **not** get called. You'll get Express' default error
    // handler, which returns `error.toString()` in the error body
    console.log('will not print');
    res.json({ message: error.message });
});
server.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
