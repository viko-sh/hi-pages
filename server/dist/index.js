"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const jobsRoutes_1 = require("./routes/api/jobsRoutes");
const server = express();
const port = 8080;
server.use(cors());
server.use(bodyParser.json());
server.use('/api/jobs', jobsRoutes_1.default);
server.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
