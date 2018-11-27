import { actions } from '../store';
import { Action, Dispatch } from '../interfaces';

const { addUser, addMessage, listUsers, receiveMessages } = actions;

export const socket = new WebSocket(
	`wss://${process.env.REACT_APP_DOMAIN || 'localhost'}:${process.env
		.REACT_APP_PORT || 4000}`
);

const setupSocket = (dispatch: Dispatch, name: string) => {
	socket.onopen = () => {
		socket.send(
			JSON.stringify({
				payload: {
					name
				},
				type: 'ADD_USER'
			})
		);
	};
	socket.onmessage = event => {
		const action: Action = JSON.parse(String(event.data));
		switch (action.type) {
			case 'ADD_MESSAGE':
				dispatch(
					addMessage({
						author: action.payload.author,
						id: action.payload.id,
						text: action.payload.text
					})
				);
				break;
			case 'RECEIVE_MESSAGES':
				dispatch(
					receiveMessages({
						author: action.payload.author,
						id: action.payload.id,
						text: action.payload.text
					})
				);
				break;
			case 'ADD_USER':
				dispatch(addUser({ id: action.payload.id, name: action.payload.name }));
				break;
			case 'LIST_USERS':
				dispatch(listUsers(action.payload));
				break;
			default:
				break;
		}
	};
	return socket;
};

export default setupSocket;
