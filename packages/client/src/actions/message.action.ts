import { Action, ActionType, Message } from "../interfaces";

export function addMessage(payload: Message): Action {
  return {
    payload,
    type: ActionType.ADD_MESSAGE
  };
}

export function receiveMessages(payload: Message): Action {
  return {
    payload,
    type: ActionType.RECEIVE_MESSAGES
  };
}

export function setCurrentMessage(payload: string): Action {
  return {
    payload,
    type: ActionType.SET_CURRENT_MESSAGE
  };
}
