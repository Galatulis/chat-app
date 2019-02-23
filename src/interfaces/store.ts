import { Store as ReduxStore } from "redux";

import { Action } from "./action";
import { GlobalState } from "./state";

export type Store = ReduxStore<GlobalState, Action>;
