import React from "react";

import BurgerIngridient from "./BurgerIngridient";
import LocalHOC from "./../HOC/example2.js";

const burger = props => {
	const { emptyBurger } = props.lang.burgerPage;
	const someIngridients = Object.keys(props.ingridients)
		.map(elem => {
			return [...Array(props.ingridients[elem])].map((_, i) => (
				<BurgerIngridient key={elem + i} type={elem} />
			));
		})
		.reduce((arr, el) => {
			return arr.concat(el);
		}, []);
	return (
		<div className="burger-container">
			<BurgerIngridient type="bread-top" />
			{someIngridients.length !== 0 ? someIngridients : <p>{emptyBurger}</p>}
			<BurgerIngridient type="bread-bottom" />
		</div>
	);
};

export default LocalHOC(burger);
