import React from "react";
import NavItem from "./navItem";

const navItems = props => {
	return (
		<ul className="nav-ul">
			{[].map(el => 
				el.link === `/orders` && !props.user ? null : <NavItem key={el.text} text={el.text} link={el.link} />
			)}
		</ul>
	);
};

export default navItems