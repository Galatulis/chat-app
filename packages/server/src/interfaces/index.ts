export interface Message {
  id: number;
  text: string;
  author: string;
}

export interface User {
  id: number;
  name: string;
}

export interface RequestData {
  type: string;
  payload: any;
}
