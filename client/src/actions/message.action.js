import { ActionType } from "./index";

export function addMessage(payload) {
  return {
    payload,
    type: ActionType.ADD_MESSAGE,
  };
}

export function receiveMessages(payload) {
  return {
    payload,
    type: ActionType.RECEIVE_MESSAGES,
  };
}

export function setCurrentMessage(payload) {
  return {
    payload,
    type: ActionType.SET_CURRENT_MESSAGE,
  };
}
