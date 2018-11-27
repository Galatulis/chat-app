import { Action, IMessage, IUser } from '../interfaces';

export const actions = {
	addMessage: (payload: IMessage): Action => ({
		payload,
		type: 'ADD_MESSAGE'
	}),
	addUser: (payload: IUser): Action => ({
		payload,
		type: 'ADD_USER'
	}),
	listUsers: (payload: IUser[]): Action => ({
		payload,
		type: 'LIST_USERS'
	}),
	receiveMessages: (payload: IMessage): Action => ({
		payload,
		type: 'RECEIVE_MESSAGES'
	}),
	setCurrentMessage: (payload: string): Action => ({
		payload,
		type: 'SET_CURRENT_MESSAGE'
	}),
	setCurrentUser: (payload: string): Action => ({
		payload,
		type: 'SET_CURRENT_USER'
	})
};
