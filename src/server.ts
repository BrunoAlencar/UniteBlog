import * as bodyParser from "body-parser";
import * as express from "express";
import { IndexRoute } from "./routes/index";

export class Server {

  public app: express.Application;

  public static bootstrap(): Server {
    return new Server();
  }

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  public config() {
    let mongoose = require('mongoose');
    mongoose.connect("mongodb://localhost/UniteBlog");
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({
      extended: true
    }));
  }

  public routes() {
    let router: express.Router;
    router = express.Router();
    this.app.use(router);
    IndexRoute.create(router);
  }
}
