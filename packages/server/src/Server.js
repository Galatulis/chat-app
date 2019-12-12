import express from "express";
import * as http from "http";
import WebSocket from "ws";

export default class Server {
  constructor(...middleware) {
    this.middleware = middleware;
    this.app = express();
    this.server = http.createServer(this.app);
    this.wss = new WebSocket.Server({ server: this.server });
  }

  start(port = 4000) {
    if (this.middleware.length > 0) {
      this.app.use(this.middleware);
    }

    const broadcast = (data, ws) => {
      this.wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN && client !== ws) {
          client.send(JSON.stringify(data));
        }
      });
    };

    this.wss.on("connection", ws => {
      let lastUsersIndex;
      let lastMessagesId;

      ws.on("message", req => {
        const data = JSON.parse(req);
        switch (data.type) {
          case "ADD_MESSAGE": {
            lastMessagesId = this.listOfMessages.length;
            this.listOfMessages = [
              ...this.listOfMessages,
              {
                author: data.payload.author,
                id: lastMessagesId,
                text: data.payload.text
              }
            ];
            ws.send(
              JSON.stringify({
                payload: {
                  author: data.payload.author,
                  id: lastMessagesId,
                  text: data.payload.text
                },
                type: "ADD_MESSAGE"
              })
            );
            broadcast(
              {
                payload: {
                  author: data.payload.author,
                  id: lastMessagesId,
                  text: data.payload.text
                },
                type: "RECEIVE_MESSAGES"
              },
              ws
            );
            break;
          }
          case "ADD_USER": {
            lastUsersIndex = this.listOfUsers.length;
            this.listOfUsers = [
              ...this.listOfUsers,
              {
                id: lastUsersIndex,
                name: data.payload.name
              }
            ];
            ws.send(
              JSON.stringify({
                payload: this.listOfUsers[this.listOfUsers.length - 1],
                type: "ADD_USER"
              })
            );
            broadcast({
              payload: this.listOfUsers,
              type: "LIST_USERS"
            });
            break;
          }
          default:
            break;
        }
      });

      ws.on("close", () => {
        this.listOfUsers = this.listOfUsers.filter(
          user => user.id !== lastUsersIndex
        );
        broadcast(
          {
            payload: this.listOfUsers,
            type: "LIST_USERS"
          },
          ws
        );
      });
    });

    this.server.listen(port, () =>
      console.log(`Listening on port ${this.server.address().port}`)
    );
  }
}
