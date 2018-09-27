export const TYPES = {
	ADD_MESSAGE: 'ADD_MESSAGE',
	RECEIVE_MESSAGES: 'RECEIVE_MESSAGES',
	ADD_USER: 'ADD_USER',
	LIST_USERS: 'LIST_USERS',
	SET_CURRENT_USER: 'SET_CURRENT_USER',
	SET_CURRENT_MESSAGE: 'SET_CURRENT_MESSAGE'
};

export const actions = {
	addMessage: payload => ({
		type: TYPES.ADD_MESSAGE,
		payload
	}),
	receiveMessages: payload => ({
		type: TYPES.RECEIVE_MESSAGES,
		payload
	}),
	addUser: payload => ({
		type: TYPES.ADD_USER,
		payload
	}),
	listUsers: payload => ({
		type: TYPES.LIST_USERS,
		payload
	}),
	setCurrentUser: payload => ({
		type: TYPES.SET_CURRENT_USER,
		payload
	}),
	setCurrentMessage: payload => ({
		type: TYPES.SET_CURRENT_MESSAGE,
		payload
	})
};
