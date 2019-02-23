export interface Message {
	id: number;
	text: string;
	author: string;
}

export interface User {
	id: number;
	name: string;
}

export interface GlobalState {
	listOfUsers: User[];
	listOfMessages: Message[];
	currentUser: string;
	currentMessage: string;
}
