import { actions, TYPES } from '../store';

const { addUser, addMessage, listUsers, receiveMessages } = actions;

export const socket = new WebSocket(`ws://${process.env.REACT_APP_DOMAIN || 'localhost'}:${process.env.REACT_APP_PORT || 4000}`);

const setupSocket = (dispatch, name) => {
	socket.onopen = () => {
		socket.send(JSON.stringify({
			type: TYPES.ADD_USER,
			payload: {
				name
			}
		}));
	};
	socket.onmessage = (event) => {
		const { type, payload } = JSON.parse(event.data);
		switch (type) {
		case TYPES.ADD_MESSAGE:
			dispatch(addMessage({ id: payload.id, text: payload.text, author: payload.author }));
			break;
		case TYPES.RECEIVE_MESSAGES:
			dispatch(receiveMessages({ id: payload.id, text: payload.text, author: payload.author }));
			break;
		case TYPES.ADD_USER:
			dispatch(addUser({ id: payload.id, name: payload.name }));
			break;
		case TYPES.LIST_USERS:
			dispatch(listUsers(payload));
			break;
		default:
			break;
		}
	};
	return socket;
};

export default setupSocket;
