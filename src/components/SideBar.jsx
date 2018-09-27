import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
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
	}
};

const SideBar = ({ classes, listOfUsers }) => {
	return (
		<div className={classes.SideBar}>
			{ listOfUsers.map(user => (
				<p key={user.id} className={classes.TextUser}>
					{ user.name }
				</p>)) }
		</div>
	);
};

SideBar.propTypes = {
	classes: PropTypes.object.isRequired,
	listOfUsers: PropTypes.array.isRequired
};

export default injectSheet(styles)(SideBar);
