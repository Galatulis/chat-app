import React from 'react';
import injectSheet, { WithSheet } from 'react-jss';

import { createStyles } from '../utils';

interface IProps extends WithSheet<typeof styles> {}

const TitleBar = ({ classes }: IProps) => {
	return (
		<div className={classes.PanelTitle}>
			<p className={classes.TextTitle}>chat-app</p>
		</div>
	);
};

const styles = () =>
	createStyles({
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
		}
	});

export default injectSheet(styles)(TitleBar);
