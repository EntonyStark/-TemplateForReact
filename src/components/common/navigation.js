import React from "react";
import { Link } from "react-router-dom";

import LocalHOC from "./../HOC/example2";

const NavBar = props => {
	const {main, delay, drags, local } = props.lang
	return (
		<ul className="nav-ul">
			<li className="nav-li"><Link className="nav-li-a" to="/">{main}</Link></li>
			<li className="nav-li"><Link className="nav-li-a" to="/delay">{delay}</Link></li>
			<li className="nav-li"><Link className="nav-li-a" to="/drags">{drags}</Link></li>
			<li className="nav-li"><Link className="nav-li-a" to="/local">{local}</Link></li>
			<li className="nav-li"><Link className="nav-li-a" to="/anim">GreenSock</Link></li>
		</ul>
	)
}


export default LocalHOC(NavBar)