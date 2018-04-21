import React from "react";
import NavBar from "./navigation";

import LocalHOC from "./HOC/example2.js";

const MainPage = props => {
	return (
		<React.Fragment>
			<NavBar />
			<h1 className="first">{props.lang.title}</h1>
		</React.Fragment>
	);
};

export default LocalHOC(MainPage);
