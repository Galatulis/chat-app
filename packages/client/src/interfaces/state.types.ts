export interface Message {
  id: number;
  text: string;
  author: string;
}

export interface User {
  id: number;
  name: string;
}

export interface MessageState {
  listOfMessages: Message[];
  currentMessage: string;
}

export interface UserState {
  listOfUsers: User[];
  currentUser: string;
  isLoggedIn: boolean;
}

export interface StoreState {
  message: MessageState;
  user: UserState;
}
