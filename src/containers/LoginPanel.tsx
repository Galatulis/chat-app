import React, { Component, FormEvent } from 'react';
import injectSheet, { WithSheet } from 'react-jss';
import { connect } from 'react-redux';

import { actions } from '../store';
import { IGlobalState } from '../interfaces';
import { createStyles } from '../utils';

const styles = () =>
	createStyles({
		ButtonLogin: {
			background: '#42b0f4',
			border: '2px solid #42b0f4',
			borderRadius: '0 0 4px 4px',
			color: '#fff',
			fontSize: '18px',
			padding: '5px 0',
			width: '100%'
		},
		InputUserName: {
			background: '#fff',
			border: '0px',
			borderBottom: '1px solid #eee',
			boxSizing: 'border-box',
			color: '#555',
			fontSize: '16px',
			padding: '20px 20px',
			textAlign: 'center',
			width: '100%'
		},
		PanelLogin: {
			border: '1px solid #ddd',
			borderRadius: '3px',
			boxShadow: '1px 3px 5px rgba(0,0,0,0.2)',
			display: 'grid',
			margin: '30vh auto',
			maxWidth: '400px'
		}
	});

interface IProps extends WithSheet<typeof styles> {
	currentUser: string;
	logIn: (_: string) => void;
	setCurrentUser: (_: string) => void;
}

interface IState {
	userName: string;
}

class LoginPanel extends Component<IProps, IState> {
	public state = {
		userName: ''
	};
	public handleChange = (event: FormEvent<HTMLInputElement>) => {
		this.setState({ userName: event.currentTarget.value });
	};
	public handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		const { userName } = this.state;
		const { setCurrentUser, logIn } = this.props;
		event.preventDefault();
		if (userName !== '') {
			setCurrentUser(userName);
			logIn(userName);
		}
	};
	public render() {
		const { classes } = this.props;
		return (
			<form className={classes.PanelLogin} onSubmit={this.handleSubmit}>
				<input
					className={classes.InputUserName}
					onChange={this.handleChange}
					value={this.state.userName}
					type='text'
				/>
				<button className={classes.ButtonLogin}>Login</button>
			</form>
		);
	}
}

const mapStateToProps = (state: IGlobalState) => ({
	currentUser: state.currentUser
});

const mapDispatchToProps = (dispatch: any) => ({
	setCurrentUser: (payload: string) => dispatch(actions.setCurrentUser(payload))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(injectSheet(styles)(LoginPanel));
