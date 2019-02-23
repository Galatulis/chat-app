import { createStore, Store } from "redux";

import { Action, GlobalState } from "../interfaces";
import { actions } from "./actions";
import { reducers } from "./reducers";

export { actions };

const store: Store<GlobalState, Action> = createStore(reducers);

export default store;
