export interface IMessage {
	id: number;
	text: string;
	author: string;
}

export interface IUser {
	id: number;
	name: string;
}

export interface IGlobalState {
	listOfUsers: IUser[];
	listOfMessages: IMessage[];
	currentUser: string;
	currentMessage: string;
}
