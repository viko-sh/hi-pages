"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const jobsRoutes_1 = require("./routes/api/jobsRoutes");
const server = express();
// const port = 8080;
const port = 9000;
server.use('/api/jobs', jobsRoutes_1.default);
server.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
