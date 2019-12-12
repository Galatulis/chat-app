import { ActionType } from "../actions";

const initialState = {
  currentMessage: "",
  listOfMessages: [],
};

export function messageReducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.ADD_MESSAGE:
    case ActionType.RECEIVE_MESSAGES:
      return {
        ...state,
        listOfMessages: [...state.listOfMessages, action.payload],
      };
    case ActionType.SET_CURRENT_MESSAGE:
      return { ...state, currentMessage: action.payload };
    default:
      return state;
  }
}
