import React from "react";
import NavBar from './../common/navigation';

const ToggleLang = ({onClickRu, onClickEn}) => {
	return (
		<React.Fragment>
			<NavBar />
			<div className="toggle-block">
    		<button className="toggle-btn" type="button" onClick={onClickRu}>RU</button>
    		<button className="toggle-btn" type="button" onClick={onClickEn}>EN</button>
			</div>
    </React.Fragment>
	)
}

export default ToggleLang