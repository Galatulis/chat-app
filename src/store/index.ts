import { createStore, Store } from 'redux';

import { Action, IGlobalState } from '../interfaces';
import { actions } from './actions';
import { reducers } from './reducers';

export { actions };

const store: Store<IGlobalState, Action> = createStore(reducers);

export default store;
