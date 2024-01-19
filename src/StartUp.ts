import express from "express";
import appRouter from "./routes/appRoute";

class StartUp {
  private _app: express.Application;

  constructor() {
    this._app = express();
    this._app.use("/", appRouter);
  }

  public start(port: number, callback: Function): void {
    return this._app.listen(port, callback);
  }
}

export default new StartUp();
