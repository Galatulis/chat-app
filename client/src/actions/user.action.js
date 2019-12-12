import { ActionType } from "./index";

export function addUser(payload) {
  return {
    payload,
    type: ActionType.ADD_USER
  };
}

export function listUsers(payload) {
  return {
    payload,
    type: ActionType.LIST_USERS
  };
}

export function setCurrentUser(payload) {
  return {
    payload,
    type: ActionType.SET_CURRENT_USER
  };
}

export function setLoginUser(payload) {
  return {
    payload,
    type: ActionType.SET_LOGIN_USER
  };
}
