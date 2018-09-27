import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';

const styles = {
	PanelMessage: {
		border: '1px solid #ddd',
		borderRadius: '3px',
		boxShadow: '1px 3px 5px rgba(0,0,0,0.2)',
		gridArea: 'content',
		padding: '10px 5px',
		overflow: 'auto'
	},
	TextMessage: {
		borderBottom: '1px solid #e9e9e9',
		color: '#555',
		margin: '0 20px',
		padding: '14px 0px',
		textIndent: '12px'
	},
	TextMessageAuthor: {
		color: '#42b0f4',
		textTransform: 'uppercase'
	}
};

const MessageList = ({ classes, listOfMessages }) => {
	return (
		<div className={classes.PanelMessage}>
			{ listOfMessages.map(message => (
				<p key={message.id} className={classes.TextMessage}>
					<span className={classes.TextMessageAuthor}>
						{ message.author }
					</span>
					&nbsp;&#58;&nbsp; { message.text }
				</p>)) }
		</div>
	);
};

const mapStateToProps = (state) => ({
	listOfMessages: state.listOfMessages
});

MessageList.propTypes = {
	classes: PropTypes.object.isRequired,
	listOfMessages: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(injectSheet(styles)(MessageList));
