import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../UI/logo';
import NavItems from './navItems';

const NavBar = ({ toggleDrawer, listItems, user }) => (
	<header className="toolbar">
		<div className="menu-button" onClick={toggleDrawer}>
			<div />
			<div />
			<div />
		</div>
		<Logo />
		<nav className="dekstop-only">
			<NavItems listItems={listItems} user={user}/>
		</nav>
	</header>
);
NavBar.propTypes = {
	toggleDrawer: PropTypes.func,
	listItems: PropTypes.array,
	user: PropTypes.string,
};

export default NavBar;
