import React from "react";
import NavItem from "./navItem";

const navItems = props => {
	return (
		<ul className="nav-ul">
			{props.listItems.map(el => <NavItem key={el.text} text={el.text} link={el.link} />)}
		</ul>
	);
};

export default navItems