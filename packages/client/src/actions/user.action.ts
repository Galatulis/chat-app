import { Action, ActionType, User } from "../interfaces";

export function addUser(payload: User): Action {
  return {
    payload,
    type: ActionType.ADD_USER
  };
}

export function listUsers(payload: User[]): Action {
  return {
    payload,
    type: ActionType.LIST_USERS
  };
}

export function setCurrentUser(payload: string): Action {
  return {
    payload,
    type: ActionType.SET_CURRENT_USER
  };
}

export function setLoginUser(payload: boolean): Action {
  return {
    payload,
    type: ActionType.SET_LOGIN_USER
  };
}
