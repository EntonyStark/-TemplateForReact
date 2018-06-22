import React from "react";

import Logo from "./../UI/logo";
import NavItems from "./navItems";

const NavBar = props => {
	return (
		<header className="toolbar">
			<div className="menu-button" onClick={props.toggleDrawer}>
				<div />
				<div />
				<div />
			</div>
			<Logo />
			<nav className="dekstop-only">
				<NavItems listItems={props.listItems} user={props.user}/>
			</nav>
		</header>
	);
};

export default NavBar;
