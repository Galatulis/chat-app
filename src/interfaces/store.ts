import { Store as ReduxStore } from 'redux';

import { Action } from './action';
import { IGlobalState } from './state';

export type Store = ReduxStore<IGlobalState, Action>;
