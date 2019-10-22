export default class User {
  private static idCount = 0;

  public id: number;
  public name: string;

  public constructor(name: string) {
    this.id = User.idCount;
    this.name = name;

    User.idCount++;
  }
}
