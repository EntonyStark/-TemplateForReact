import React from "react";
import { Link, withRouter } from "react-router-dom";

const navItem = props => {
	const { text, link, match } = props;
	return (
		<li className="nav-li">
			<Link
				className={link === match.path ? "nav-li-a nav-li-a--active" : "nav-li-a"}
				to={props.link}
			>
				{text}
			</Link>
		</li>
	);
};

export default withRouter(navItem);
