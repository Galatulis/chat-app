import { GlobalState, Message, User } from "./state";

export type Action =
  | {
      type: "ADD_MESSAGE";
      payload: Message;
    }
  | {
      type: "RECEIVE_MESSAGES";
      payload: Message;
    }
  | {
      type: "ADD_USER";
      payload: User;
    }
  | {
      type: "LIST_USERS";
      payload: User[];
    }
  | {
      type: "SET_CURRENT_USER";
      payload: string;
    }
  | {
      type: "SET_CURRENT_MESSAGE";
      payload: string;
    };

export type Dispatch = (action: Action | ThunkAction | PromiseAction) => void;

export type GetState = () => GlobalState;

export type ThunkAction = (dispatch: Dispatch, getState: GetState) => void;

export type PromiseAction = Promise<Action>;
