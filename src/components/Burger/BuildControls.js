import React from "react";
import Item from "./BuildItem";
import LocalHOC from "./../HOC/example2.js";

const controls = [
	{ labelRu: "Салат", labelEn: "Salad", type: "salad" },
	{ labelRu: "Бекон", labelEn: "Bacon", type: "bacon" },
	{ labelRu: "Сыр", labelEn: "Cheese", type: "cheese" },
	{ labelRu: "Мясо", labelEn: "Meat", type: "meat" },
];

const buildControls = props => {
	const { currentPrise, orderNow } = props.lang.burgerPage;
	return (
		<div className="burger-control-container">
			<p>
				{`${currentPrise}:`} {`${props.price > 4 ? props.price.toFixed(2) : 4} $`}
			</p>
			{controls.map(el => (
				<Item
					added={() => props.ingridientAdded(el.type)}
					removed={() => props.ingridientRemoved(el.type)}
					key={el.labelEn}
					label={props.toggleLang === "ru" ? el.labelRu : el.labelEn}
					disabled={props.disabled[el.type]}
				/>
			))}
			<button onClick={props.showModal} disabled={!props.purchasable} className="order-button">
				{orderNow}
			</button>
		</div>
	);
};

export default LocalHOC(buildControls);
