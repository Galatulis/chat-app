import React, { useEffect, useState } from "react";
import injectSheet, { WithSheet } from "react-jss";

import { socket } from "./services";
import {
	LoginPanel,
	MessageInput,
	MessageList,
	SideBar,
	TitleBar
} from "./components";

function App({ classes }: WithSheet<typeof styles>) {
	const [loggedIn, setLoggedIn] = useState<boolean>(false);

	const logIn = (name: string) => {
		setLoggedIn(true);

		socket.send(
			JSON.stringify({
				payload: {
					name
				},
				type: "ADD_USER"
			})
		);
	};

	useEffect(() => {
		document.title = "Chat App";
	});

	return !loggedIn ? (
		<LoginPanel logIn={logIn} />
	) : (
		<div className={classes.GridContainer}>
			<TitleBar />
			<SideBar />
			<MessageList />
			<MessageInput />
		</div>
	);
}

function styles() {
	return {
		GridContainer: {
			display: "grid",
			gridGap: "10px",
			gridTemplateAreas:
				'"header header"\n"sidebar content"\n"sidebar control"',
			gridTemplateColumns: "minmax(50px, 150px) minmax(50px, 450px)",
			gridTemplateRows:
				"minmax(50px, 100px) minmax(50px, 400px) minmax(50px, 100px)",
			margin: "auto",
			maxWidth: "600px"
		}
	};
}

export default injectSheet(styles)(App);
