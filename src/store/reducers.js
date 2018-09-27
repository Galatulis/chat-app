import { TYPES } from './actions';

const initialState = {
	listOfUsers: [],
	listOfMessages: [],
	currentUser: '',
	currentMessage: ''
};

export const reducers = (state = initialState, { type, payload }) => {
	switch (type) {
	case TYPES.ADD_MESSAGE:
	case TYPES.RECEIVE_MESSAGES:
		return Object.assign({}, state, { listOfMessages: [...state.listOfMessages, payload] });
	case TYPES.ADD_USER:
		return Object.assign({}, state, { listOfUsers: [...state.listOfUsers, payload] });
	case TYPES.LIST_USERS:
		return Object.assign({}, state, { listOfUsers: payload });
	case TYPES.SET_CURRENT_USER:
		return Object.assign({}, state, { currentUser: payload });
	case TYPES.SET_CURRENT_MESSAGE:
		return Object.assign({}, state, { currentMessage: payload });
	default:
		return state;
	}
};
