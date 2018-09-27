import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { TitleBar, SideBar, MessageList } from './components';
import { MessageInput } from './containers';

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
	}
};

class App extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.GridContainer}>
				<TitleBar />
				<SideBar />
				<MessageList />
				<MessageInput />
			</div>
		);
	}
}

App.propTypes = {
	classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(App);
