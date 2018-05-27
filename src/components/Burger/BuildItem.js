import React from "react";

const item = props => {
	const { more, less, disabled, added, label, removed } = props 
	return <div className="burger-control">
		<div className="burger-control-label">{label}</div>
		<button disabled={disabled} onClick={removed} className="burger-control-less">
			{less}
		</button>
		<button onClick={added} className="burger-control-more">
			{more}
		</button>
	</div>
}

export default item;
