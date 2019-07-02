import { StoreState, Message, User } from "./stateTypes";

export enum ActionType {
  ADD_MESSAGE = "ADD_MESSAGE",
  RECEIVE_MESSAGES = "RECEIVE_MESSAGES",
  ADD_USER = "ADD_USER",
  LIST_USERS = "LIST_USERS",
  SET_CURRENT_USER = "SET_CURRENT_USER",
  SET_CURRENT_MESSAGE = "SET_CURRENT_MESSAGE"
}

export type Action =
  | {
      type: ActionType.ADD_MESSAGE;
      payload: Message;
    }
  | {
      type: ActionType.RECEIVE_MESSAGES;
      payload: Message;
    }
  | {
      type: ActionType.ADD_USER;
      payload: User;
    }
  | {
      type: ActionType.LIST_USERS;
      payload: User[];
    }
  | {
      type: ActionType.SET_CURRENT_USER;
      payload: string;
    }
  | {
      type: ActionType.SET_CURRENT_MESSAGE;
      payload: string;
    };

export type Dispatch = (action: Action | ThunkAction | PromiseAction) => void;

export type GetState = () => StoreState;

export type ThunkAction = (dispatch: Dispatch, getState: GetState) => void;

export type PromiseAction = Promise<Action>;
