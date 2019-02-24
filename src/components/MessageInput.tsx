import React, { ChangeEvent, useEffect } from "react";
import injectSheet, { WithSheet } from "react-jss";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import setupSocket, { socket } from "../services";
import { actions } from "../actions";
import { GlobalState } from "../interfaces";

interface Props extends WithSheet<typeof styles> {
	currentUser: string;
	currentMessage: string;
	dispatch: (_: any) => void;
	setCurrentMessage: (_: string) => void;
}

function MessageInput(props: Props) {
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { setCurrentMessage } = props;
		setCurrentMessage(event.target.value);
	};

	const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
		const { currentUser, currentMessage, setCurrentMessage } = props;
		event.preventDefault();
		socket.send(
			JSON.stringify({
				payload: {
					author: currentUser,
					text: currentMessage
				},
				type: "ADD_MESSAGE"
			})
		);
		setCurrentMessage("");
	};

	useEffect(() => {
		const { dispatch, currentUser } = props;
		setupSocket(dispatch, currentUser);

		return () => {};
	});

	const { classes, currentMessage } = props;
	return (
		<form className={classes.PanelControl} onSubmit={handleSubmit}>
			<input
				className={classes.InputMessage}
				onChange={handleChange}
				value={currentMessage}
				type="text"
			/>
			<button className={classes.ButtonSend}>Send</button>
		</form>
	);
}

function styles() {
	return {
		ButtonSend: {
			background: "#42b0f4",
			border: "2px solid #42b0f4",
			borderRadius: "0 0 4px 4px",
			color: "#fff",
			fontSize: "18px",
			padding: "5px 0",
			width: "100%"
		},
		InputMessage: {
			background: "#fff",
			border: "0px",
			borderBottom: "1px solid #eee",
			boxSizing: "border-box",
			color: "#555",
			fontSize: "16px",
			padding: "20px 20px",
			width: "100%"
		},
		PanelControl: {
			border: "1px solid #ddd",
			borderRadius: "3px",
			boxShadow: "1px 3px 5px rgba(0,0,0,0.2)",
			display: "grid",
			gridArea: "control",
			gridTemplateRows: "60% 40%"
		}
	};
}

const mapStateToProps = (state: GlobalState) => ({
	currentMessage: state.currentMessage,
	currentUser: state.currentUser
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	dispatch,
	setCurrentMessage: (payload: string) =>
		dispatch(actions.setCurrentMessage(payload))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(injectSheet(styles)(MessageInput));
