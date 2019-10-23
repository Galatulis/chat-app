import { Action, ActionType, StoreState } from "../interfaces";

export const initialState: StoreState = {
  currentMessage: "",
  currentUser: "",
  listOfMessages: [],
  listOfUsers: [],
  isLoggedIn: false
};

export const reducers = (
  state: StoreState = initialState,
  action: Action
): StoreState => {
  switch (action.type) {
    case ActionType.ADD_MESSAGE:
    case ActionType.RECEIVE_MESSAGES:
      return {
        ...state,
        listOfMessages: [...state.listOfMessages, action.payload]
      };
    case ActionType.ADD_USER:
      return {
        ...state,
        listOfUsers: [...state.listOfUsers, action.payload]
      };
    case ActionType.LIST_USERS:
      return { ...state, listOfUsers: action.payload };
    case ActionType.SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    case ActionType.SET_CURRENT_MESSAGE:
      return { ...state, currentMessage: action.payload };
    case ActionType.SET_LOGIN_USER:
      return { ...state, isLoggedIn: action.payload };
    default:
      return state;
  }
};
