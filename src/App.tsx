import React, { Component, Fragment } from "react";
import injectSheet, { WithSheet } from "react-jss";

import { MessageList, SideBar, TitleBar } from "./components";
import { LoginPanel, MessageInput } from "./containers";
import { socket } from "./socket";
import { createStyles } from "./utils";

interface State {
	loggedIn: boolean;
}

class App extends Component<WithSheet<typeof styles>, State> {
	public state = {
		loggedIn: false
	};
	public logIn = (name: string) => {
		this.setState({ loggedIn: true });
		socket.send(
			JSON.stringify({
				payload: {
					name
				},
				type: "ADD_USER"
			})
		);
	};
	public componentDidMount() {
		document.title = "Chat App";
	}
	public render() {
		const { classes } = this.props;
		return (
			<Fragment>
				{!this.state.loggedIn ? (
					<LoginPanel logIn={this.logIn} />
				) : (
					<div className={classes.GridContainer}>
						<TitleBar />
						<SideBar />
						<MessageList />
						<MessageInput />
					</div>
				)}
			</Fragment>
		);
	}
}

function styles() {
	return createStyles({
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
	});
}

export default injectSheet(styles)(App);
