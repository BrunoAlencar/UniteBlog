"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const express = require("express");
const index_1 = require("./routes/index");
class Server {
    static bootstrap() {
        return new Server();
    }
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }
    config() {
        let mongoose = require('mongoose');
        mongoose.connect("mongodb://localhost/UniteBlog");
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
    }
    routes() {
        let router;
        router = express.Router();
        this.app.use(router);
        index_1.IndexRoute.create(router);
    }
}
exports.Server = Server;
