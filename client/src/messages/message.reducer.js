import { messageAction } from "./message.action";

const initialState = {
  messageList: [],
};

export function messageReducer(state = initialState, action) {
  switch (action.type) {
    case messageAction.ADD_MESSAGE:
      return {
        ...state,
        messageList: [...state.messageList, action.payload],
      };
    case messageAction.LOAD_MESSAGES:
      return { ...state, messageList: action.payload };
    default:
      return state;
  }
}

export const messageListSelector = (state) => state.message.messageList;
