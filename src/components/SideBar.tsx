import React from 'react';
import injectSheet, { WithSheet } from 'react-jss';
import { connect } from 'react-redux';

import { IGlobalState, IUser } from '../interfaces';
import { createStyles } from '../utils';

const styles = () =>
	createStyles({
		SideBar: {
			border: '1px solid #ddd',
			borderRadius: '3px',
			boxShadow: '1px 3px 5px rgba(0,0,0,0.2)',
			gridArea: 'sidebar',
			overflow: 'auto',
			padding: '10px 20px'
		},
		TextUser: {
			color: '#42b0f4',
			textTransform: 'uppercase'
		}
	});

interface IProps extends WithSheet<typeof styles> {
	listOfUsers: IUser[];
}

const SideBar = ({ classes, listOfUsers }: IProps) => {
	return (
		<div className={classes.SideBar}>
			{listOfUsers.map(user => (
				<p key={user.id} className={classes.TextUser}>
					{user.name}
				</p>
			))}
		</div>
	);
};

const mapStateToProps = (state: IGlobalState) => ({
	listOfUsers: state.listOfUsers
});

export default connect(mapStateToProps)(injectSheet(styles)(SideBar));
