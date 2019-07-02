import { Store as ReduxStore } from "redux";

import { Action } from "./actionTypes";
import { StoreState } from "./stateTypes";

export type Store = ReduxStore<StoreState, Action>;
