import { createStore, Store } from "redux";

import { Action, GlobalState } from "../interfaces";
import { reducers } from "../reducers";

const store: Store<GlobalState, Action> = createStore(reducers);

export default store;
