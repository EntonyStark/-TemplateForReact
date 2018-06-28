import React from 'react';
import PropTypes from 'prop-types';
import { SSL_OP_CRYPTOPRO_TLSEXT_BUG } from 'constants';
import Logo from '../UI/logo';
import NavItems from './navItems';
import Backdrop from '../UI/Backdrop';

const sideDrawer = ({
	showBackdrop, closeDrawer, listItems, user,
}) => {
	let clasess = 'side-drawer side-drawer--close';
	if (showBackdrop) clasess = 'side-drawer side-drawer--open';

	return (
		<React.Fragment>
			<Backdrop showBackdrop={showBackdrop} cliked={closeDrawer} />
			<div className={clasess}>
				<Logo />
				<nav>
					<NavItems listItems={listItems} user={user}/>
				</nav>
			</div>
		</React.Fragment>
	);
};
sideDrawer.propTypes = {
	showBackdrop: PropTypes.bool,
	closeDrawer: PropTypes.func,
	user: PropTypes.string,
	listItems: PropTypes.array,
};

export default sideDrawer;
