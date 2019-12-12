import { ActionType } from "../actions";

const initialState = {
  currentUser: "",
  listOfUsers: [],
  isLoggedIn: false
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.ADD_USER:
      return {
        ...state,
        listOfUsers: [...state.listOfUsers, action.payload]
      };
    case ActionType.LIST_USERS:
      return { ...state, listOfUsers: action.payload };
    case ActionType.SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    case ActionType.SET_LOGIN_USER:
      return { ...state, isLoggedIn: action.payload };
    default:
      return state;
  }
}
