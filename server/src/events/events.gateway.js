import { Bind } from "@nestjs/common";
import {
  SubscribeMessage,
  WebSocketGateway,
  MessageBody,
  ConnectedSocket,
} from "@nestjs/websockets";

@WebSocketGateway()
export class EventsGateway {
  messagesList = [];
  userList = [];

  handleConnection(client) {
    client.emit("GET_ALL_USER", this.userList);
  }

  @Bind(ConnectedSocket(), MessageBody())
  @SubscribeMessage("ADD_USER")
  addUser(client, data) {
    const currentUser = {
      id: client.id,
      name: data,
    };
    this.userList = [...this.userList, currentUser];
    client.broadcast.emit("ADD_USER", currentUser);
    return currentUser;
  }

  @Bind(ConnectedSocket(), MessageBody())
  @SubscribeMessage("ADD_MESSAGE")
  messages(client, data) {
    const currentUser = this.userList.find(({ id }) => id === client.id);
    const currentMessage = {
      author: currentUser,
      id: this.messagesList.length,
      text: data,
    };
    this.messagesList = [...this.messagesList, currentMessage];
    client.broadcast.emit("ADD_MESSAGE", currentMessage);
    return currentMessage;
  }

  handleDisconnect(client) {
    const currentUser = this.userList.find(({ id }) => id === client.id);
    if (currentUser) {
      client.broadcast.emit("REMOVE_USER", currentUser);
      this.userList = this.userList.filter(({ id }) => id !== client.id);
    }
  }
}
