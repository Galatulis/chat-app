import React from "react";
import injectSheet, { WithSheet } from "react-jss";
import { connect } from "react-redux";

import { GlobalState, User } from "../interfaces";
import { createStyles } from "../utils";

interface Props extends WithSheet<typeof styles> {
	listOfUsers: User[];
}

const SideBar = ({ classes, listOfUsers }: Props) => {
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

function styles() {
	return createStyles({
		SideBar: {
			border: "1px solid #ddd",
			borderRadius: "3px",
			boxShadow: "1px 3px 5px rgba(0,0,0,0.2)",
			gridArea: "sidebar",
			overflow: "auto",
			padding: "10px 20px"
		},
		TextUser: {
			color: "#42b0f4",
			textTransform: "uppercase"
		}
	});
}

const mapStateToProps = (state: GlobalState) => ({
	listOfUsers: state.listOfUsers
});

export default connect(mapStateToProps)(injectSheet(styles)(SideBar));
