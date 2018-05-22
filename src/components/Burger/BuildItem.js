import React from "react";
import LocalHOC from "./../HOC/example2.js";

const item = props => {
	const { more, less } = props.lang.burgerPage 
	return <div className="burger-control">
		<div className="burger-control-label">{props.label}</div>
		<button disabled={props.disabled} onClick={props.removed} className="burger-control-less">
			{less}
		</button>
		<button onClick={props.added} className="burger-control-more">
			{more}
		</button>
	</div>
}

export default LocalHOC(item);
