"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const models = require('./models');
const server = express();
// const port = 8080;
const port = 9000;
server.use('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const result = yield models.job.findAll();
    // console.log(models);
    console.log(result);
    res.json(result);
}));
server.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
