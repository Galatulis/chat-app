import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import Server from "./Server";

dotenv.config();

const port = parseInt(process.env.SERVER_PORT || 4000);
const middleware = [
  cors(),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: false }),
];

const server = new Server(...middleware);

server.start(port);
