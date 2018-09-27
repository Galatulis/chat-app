import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';
import { actions } from '../store';

const styles = {
	PanelControl: {
		border: '1px solid #ddd',
		borderRadius: '3px',
		boxShadow: '1px 3px 5px rgba(0,0,0,0.2)',
		display: 'grid',
		gridArea: 'control',
		gridTemplateRows: '60% 40%'
	},
	InputMessage: {
		background: '#fff',
		border: 0,
		borderBottom: '1px solid #eee',
		boxSizing: 'border-box',
		color: '#555',
		font: {
			size: '16px'
		},
		padding: '20px 20px',
		width: '100%'
	},
	ButtonSend: {
		background: '#42b0f4',
		borderRadius: '0 0 4px 4px',
		border: '2px solid #42b0f4',
		color: '#fff',
		fontSize: '18px',
		padding: '5px 0',
		width: '100%'
	}
};

class MessageInput extends Component {
	handleChange = (event) => {
		const { setCurrentMessage } = this.props;
		setCurrentMessage(event.target.value);
	}
	handleSubmit = (event) => {
		const { setCurrentMessage } = this.props;
		event.preventDefault();
		setCurrentMessage('');
	}
	render() {
		const { classes, currentMessage } = this.props;
		return (
			<form
				className={classes.PanelControl}
				onSubmit={this.handleSubmit}
			>
				<input
					className={classes.InputMessage}
					onChange={this.handleChange}
					value={currentMessage}
					type='text'
				/>
				<button className={classes.ButtonSend}>Send</button>
			</form>
		);
	}
}

const mapStateToProps = (state) => ({
	currentMessage: state.currentMessage
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentMessage: payload => dispatch(actions.setCurrentMessage(payload))
});

MessageInput.propTypes = {
	classes: PropTypes.object.isRequired,
	currentMessage: PropTypes.string.isRequired,
	setCurrentMessage: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(MessageInput));
