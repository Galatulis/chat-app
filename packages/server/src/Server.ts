import express from "express";

export default class Server {
  private readonly server: express.Express;
  private readonly middleware: express.RequestHandler[];

  public constructor(...middleware: express.RequestHandler[]) {
    this.middleware = middleware;
    this.server = express();
  }

  public async start(port = 4000) {
    if (this.middleware.length > 0) {
      this.server.use(this.middleware);
    }

    this.server.listen({ port });
  }
}
