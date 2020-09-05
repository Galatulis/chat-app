export const messageAction = {
  ADD_MESSAGE: "ADD_MESSAGE",
  LOAD_MESSAGES: "LOAD_MESSAGES",
};

export function addMessage(payload) {
  return {
    payload,
    type: messageAction.ADD_MESSAGE,
  };
}

export function loadMessages(payload) {
  return {
    payload,
    type: messageAction.LOAD_MESSAGES,
  };
}
