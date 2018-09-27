import { createStore } from 'redux';
import { reducers } from './reducers';
import { actions, TYPES } from './actions';

export { actions, TYPES };

export default createStore(reducers);
