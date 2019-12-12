import { createStore, combineReducers } from "redux";

import { messageReducer, userReducer } from "../reducers";

const rootReducer = combineReducers({
  message: messageReducer,
  user: userReducer,
});

export default createStore(rootReducer);
