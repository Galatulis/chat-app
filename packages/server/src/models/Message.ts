import User from "./User";

export default class Message {
  private static idCount = 0;

  public id: number;
  public sender: User;
  public content: string;

  public constructor(sender: User, content: string) {
    this.id = Message.idCount;
    this.sender = sender;
    this.content = content;

    Message.idCount++;
  }
}
