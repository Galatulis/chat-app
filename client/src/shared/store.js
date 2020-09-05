import { createStore, combineReducers } from "redux";

import { messageReducer } from "../messages/message.reducer";
import { userReducer } from "../users/user.reducer";

const rootReducer = combineReducers({
  message: messageReducer,
  user: userReducer,
});

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
