import React from "react";
import { Link } from "react-router-dom";

import LocalHOC from "./HOC/example2.js";

const NavBar = props => {
	const {main, list, drugs, burgerPage } = props.lang
	return (
		<ul className="nav-ul">
			<li className="nav-li"><Link className="nav-li-a" to="/">{main}</Link></li>
			<li className="nav-li"><Link className="nav-li-a" to="/users">{list}</Link></li>
			<li className="nav-li"><Link className="nav-li-a" to="/drugs">{drugs}</Link></li>
			<li className="nav-li"><Link className="nav-li-a" to="/burger">{burgerPage.burger}</Link></li>
		</ul>
	)
}


export default LocalHOC(NavBar)