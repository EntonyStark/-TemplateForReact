import React from "react";
import Item from "./BuildItem";
import LocalHOC from "./../HOC/example2.js";

const buildControls = props => {
	const controls = Object.keys(props.ingridients)
	const { currentPrise, orderNow, less, more } = props.lang.burgerPage;
	return (
		<div className="burger-control-container">
			<p>
				{`${currentPrise}:`} {`${props.price > 4 ? props.price.toFixed(2) : 4} $`}
			</p>
			{controls.map( el => (
				<Item
					less={less}
					more={more}
					added={props.ingridientAdded.bind(null, el)}
					removed={props.ingridientRemoved.bind(null, el)}
					key={el}
					label={props.lang.burgerPage[el]}
					disabled={props.disabled[el]}
				/>
			))}
			<button onClick={props.showModal} disabled={!props.purchasable} className="order-button">
				{orderNow}
			</button>
		</div>
	);
};

export default LocalHOC(buildControls);
