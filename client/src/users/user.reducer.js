import { userAction } from "./user.action";

const initialState = {
  userList: [],
  isLoggedIn: false,
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case userAction.ADD_USER:
      return {
        ...state,
        userList: [...state.userList, action.payload],
      };
    case userAction.REMOVE_USER:
      return {
        ...state,
        userList: state.userList.filter(user => user.id !== action.payload.id),
      };
    case userAction.LOAD_USERS:
      return { ...state, userList: action.payload };
    case userAction.TOGGLE_LOGIN:
      return { ...state, isLoggedIn: !state.isLoggedIn };
    default:
      return state;
  }
}

export const userListSelector = state => state.user.userList;

export const isLoggedInSelector = state => state.user.isLoggedIn;
