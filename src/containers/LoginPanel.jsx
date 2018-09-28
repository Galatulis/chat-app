import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';
import { actions } from '../store';

const styles = {
	PanelLogin: {
		border: '1px solid #ddd',
		borderRadius: '3px',
		boxShadow: '1px 3px 5px rgba(0,0,0,0.2)',
		display: 'grid',
		margin: '30vh auto',
		maxWidth: '400px'
	},
	InputUserName: {
		background: '#fff',
		border: '0px',
		borderBottom: '1px solid #eee',
		boxSizing: 'border-box',
		color: '#555',
		font: {
			size: '16px'
		},
		padding: '20px 20px',
		textAlign: 'center',
		width: '100%'
	},
	ButtonLogin: {
		background: '#42b0f4',
		borderRadius: '0 0 4px 4px',
		border: '2px solid #42b0f4',
		color: '#fff',
		fontSize: '18px',
		padding: '5px 0',
		width: '100%'
	}
};

class LoginPanel extends Component {
	state = {
		userName: ''
	}
	handleChange = (event) => {
		this.setState({ userName: event.target.value });
	};
	handleSubmit = (event) => {
		const { userName } = this.state;
		const { setCurrentUser, logIn } = this.props;
		event.preventDefault();
		if (userName !== '') {
			setCurrentUser(userName);
			logIn(userName);
		}
	};
	render() {
		const { classes } = this.props;
		return (
			<form
				className={classes.PanelLogin}
				onSubmit={this.handleSubmit}
			>
				<input
					className={classes.InputUserName}
					onChange={this.handleChange}
					value={this.state.userName}
					type='text'
				/>
				<button className={classes.ButtonLogin}>Send</button>
			</form>
		);
	}
}

const mapStateToProps = (state) => ({
	currentUser: state.currentUser
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: payload => dispatch(actions.setCurrentUser(payload))
});

LoginPanel.propTypes = {
	classes: PropTypes.object.isRequired,
	currentUser: PropTypes.string.isRequired,
	logIn: PropTypes.func.isRequired,
	setCurrentUser: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(LoginPanel));
