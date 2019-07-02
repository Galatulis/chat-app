import { Action, StoreState } from "../interfaces";

export const initialState: StoreState = {
  currentMessage: "",
  currentUser: "",
  listOfMessages: [],
  listOfUsers: []
};

export const reducers = (
  state: StoreState = initialState,
  action: Action
): StoreState => {
  switch (action.type) {
    case "ADD_MESSAGE":
    case "RECEIVE_MESSAGES":
      return {
        ...state,
        listOfMessages: [...state.listOfMessages, action.payload]
      };
    case "ADD_USER":
      return {
        ...state,
        listOfUsers: [...state.listOfUsers, action.payload]
      };
    case "LIST_USERS":
      return { ...state, listOfUsers: action.payload };
    case "SET_CURRENT_USER":
      return { ...state, currentUser: action.payload };
    case "SET_CURRENT_MESSAGE":
      return { ...state, currentMessage: action.payload };
    default:
      return state;
  }
};
