import { IGlobalState, IMessage, IUser } from './state';

export type Action =
	| {
			type: 'ADD_MESSAGE';
			payload: IMessage;
	  }
	| {
			type: 'RECEIVE_MESSAGES';
			payload: IMessage;
	  }
	| {
			type: 'ADD_USER';
			payload: IUser;
	  }
	| {
			type: 'LIST_USERS';
			payload: IUser[];
	  }
	| {
			type: 'SET_CURRENT_USER';
			payload: string;
	  }
	| {
			type: 'SET_CURRENT_MESSAGE';
			payload: string;
	  };

export type Dispatch = (action: Action | ThunkAction | PromiseAction) => any;

export type GetState = () => IGlobalState;

export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;

export type PromiseAction = Promise<Action>;
