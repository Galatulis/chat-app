import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
	GridContainer: {
		display: 'grid',
		grid: {
			gap: '10px',
			templateAreas: '"header header"\n"sidebar content"\n"sidebar control"',
			templateColumns: '1fr 3fr',
			templateRows: '1fr 4fr 1fr'
		},
		margin: 'auto',
		maxWidth: '600px'
	},
	PanelTitle: {
		border: '1px solid #ddd',
		borderRadius: '3px',
		boxShadow: '1px 3px 5px rgba(0,0,0,0.2)',
		gridArea: 'header',
		padding: '0px'
	},
	TextTitle: {
		color: '#42b0f4',
		fontSize: '30px',
		textAlign: 'center',
		textTransform: 'lowercase'
	},
	SideBar: {
		border: '1px solid #ddd',
		borderRadius: '3px',
		boxShadow: '1px 3px 5px rgba(0,0,0,0.2)',
		gridArea: 'sidebar',
		padding: '10px 20px',
		overflow: 'auto'
	},
	TextUser: {
		color: '#42b0f4',
		textTransform: 'uppercase'
	},
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
	},
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

class App extends Component {
	state = {
		listOfMessages: [],
		listOfUsers: []
	}
	render() {
		const { classes } = this.props;
		return (
			<Fragment>
				<div className={classes.GridContainer}>
					<div className={classes.PanelTitle}>
						<p className={classes.TextTitle}>chat-app</p>
					</div>
					<div className={classes.SideBar}>
						{ this.state.listOfUsers.map(user => (
							<p key={user.id} className={classes.TextUser}>
								{ user.name }
							</p>)) }
					</div>
					<div className={classes.PanelMessage}>
						{ this.state.listOfMessages.map(message => (
							<p key={message.id} className={classes.TextMessage}>
								<span className={classes.TextMessageAuthor}>
									{ message.author }
								</span>
								&nbsp;&#58;&nbsp; { message.text }
							</p>)) }
					</div>
					<div className={classes.PanelControl}>
						<input className={classes.InputMessage} type='text' />
						<button className={classes.ButtonSend}>Send</button>
					</div>
				</div>
			</Fragment>
		);
	}
}

App.propTypes = {
	classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(App);
