import { Action, ActionType, Message, User } from "../interfaces";

const actions = {
  addMessage: (payload: Message): Action => ({
    payload,
    type: ActionType.ADD_MESSAGE
  }),
  addUser: (payload: User): Action => ({
    payload,
    type: ActionType.ADD_USER
  }),
  listUsers: (payload: User[]): Action => ({
    payload,
    type: ActionType.LIST_USERS
  }),
  receiveMessages: (payload: Message): Action => ({
    payload,
    type: ActionType.RECEIVE_MESSAGES
  }),
  setCurrentMessage: (payload: string): Action => ({
    payload,
    type: ActionType.SET_CURRENT_MESSAGE
  }),
  setCurrentUser: (payload: string): Action => ({
    payload,
    type: ActionType.SET_CURRENT_USER
  })
};

export default actions;
