import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

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
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.PanelControl}>
				<input className={classes.InputMessage} type='text' />
				<button className={classes.ButtonSend}>Send</button>
			</div>
		);
	}
}

MessageInput.propTypes = {
	classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(MessageInput);
