import { Action, Message, User } from "../interfaces";

export const actions = {
  addMessage: (payload: Message): Action => ({
    payload,
    type: "ADD_MESSAGE"
  }),
  addUser: (payload: User): Action => ({
    payload,
    type: "ADD_USER"
  }),
  listUsers: (payload: User[]): Action => ({
    payload,
    type: "LIST_USERS"
  }),
  receiveMessages: (payload: Message): Action => ({
    payload,
    type: "RECEIVE_MESSAGES"
  }),
  setCurrentMessage: (payload: string): Action => ({
    payload,
    type: "SET_CURRENT_MESSAGE"
  }),
  setCurrentUser: (payload: string): Action => ({
    payload,
    type: "SET_CURRENT_USER"
  })
};
