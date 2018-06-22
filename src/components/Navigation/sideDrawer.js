import React from "react";

import Logo from "./../UI/logo";
import NavItems from "./navItems";
import Backdrop from "./../UI/Backdrop";

const sideDrawer = props => {
	
	let clasess = "side-drawer side-drawer--close"
	if(props.showBackdrop) clasess = "side-drawer side-drawer--open"

	return (
		<React.Fragment>
			<Backdrop showBackdrop={props.showBackdrop} cliked={props.closeDrawer} />
			<div className={clasess}>
				<Logo />
				<nav>
					<NavItems listItems={props.listItems} user={props.user}/>
				</nav>
			</div>
		</React.Fragment>	
	)
}

export default sideDrawer