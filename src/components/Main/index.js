import React from "react";
import NavBar from './../navigation';

import LocalHOC from "./../HOC/example2.js";

const mainPage = (props) => {
	const {title, switchLang } = props.lang.mainPage
	return (
		<React.Fragment>
			<NavBar />
			<div className="main-container">
				<h1 className="greeting">{`${title} :)`}</h1>
				<div className="toggle-block">
					<span className="toggle-title">{`${switchLang} :`}</span>
	    		<button className="toggle-btn" type="button" onClick={props.onClickRu}>RU</button>
	    		<button className="toggle-btn" type="button" onClick={props.onClickEn}>EN</button>
				</div>
			</div>
    </React.Fragment>
	)
}

export default LocalHOC(mainPage)