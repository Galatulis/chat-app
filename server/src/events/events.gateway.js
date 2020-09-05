import { SubscribeMessage, WebSocketGateway } from "@nestjs/websockets";

@WebSocketGateway()
export class EventsGateway {
  messagesList = [];
  userList = [];

  handleConnection(client) {
    client.emit("GET_ALL_USER", this.userList);
    client.emit("GET_ALL_MESSAGE", this.messagesList);
  }

  @SubscribeMessage("ADD_USER")
  handleUserEvents(client, data) {
    const currentUser = {
      id: client.id,
      name: data,
    };
    this.userList = [...this.userList, currentUser];
    client.broadcast.emit("ADD_USER", currentUser);
    client.emit("ADD_USER", currentUser);
  }

  @SubscribeMessage("ADD_MESSAGE")
  handleMessageEvents(client, data) {
    const currentUser = this.userList.find(({ id }) => id === client.id);
    const currentMessage = {
      author: currentUser,
      id: this.messagesList.length,
      text: data,
    };
    this.messagesList = [...this.messagesList, currentMessage];
    client.broadcast.emit("ADD_MESSAGE", currentMessage);
    client.emit("ADD_MESSAGE", currentMessage);
  }

  handleDisconnect(client) {
    const currentUser = this.userList.find(({ id }) => id === client.id);
    if (currentUser) {
      client.broadcast.emit("REMOVE_USER", currentUser);
      this.userList = this.userList.filter(({ id }) => id !== client.id);
    }
  }
}
