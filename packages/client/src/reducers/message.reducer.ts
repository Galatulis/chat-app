import { Action, ActionType, MessageState } from "../interfaces";

const initialState: MessageState = {
  currentMessage: "",
  listOfMessages: []
};

export function messageReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionType.ADD_MESSAGE:
    case ActionType.RECEIVE_MESSAGES:
      return {
        ...state,
        listOfMessages: [...state.listOfMessages, action.payload]
      };
    case ActionType.SET_CURRENT_MESSAGE:
      return { ...state, currentMessage: action.payload };
    default:
      return state;
  }
}
