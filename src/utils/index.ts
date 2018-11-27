import { Styles } from 'react-jss';

export function createStyles<C extends string>(styles: Styles<C>): Styles<C> {
	return styles;
}
