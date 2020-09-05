export const userAction = {
  ADD_USER: "ADD_USER",
  REMOVE_USER: "REMOVE_USER",
  LOAD_USERS: "LOAD_USERS",
  TOGGLE_LOGIN: "TOGGLE_LOGIN",
};

export function addUser(payload) {
  return { payload, type: userAction.ADD_USER };
}

export function removeUser(payload) {
  return { payload, type: userAction.REMOVE_USER };
}

export function loadUsers(payload) {
  return { payload, type: userAction.LOAD_USERS };
}

export function toggleLogin() {
  return { type: userAction.TOGGLE_LOGIN };
}
