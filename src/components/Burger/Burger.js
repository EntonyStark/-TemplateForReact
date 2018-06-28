import React from 'react';
import PropTypes from 'prop-types';
import BurgerIngridient from './BurgerIngridient';
import LocalHOC from '../HOC/example2';

const burger = ({ lang, ingridients }) => {
	const { emptyBurger } = lang.burgerPage;
	const template = ingridients || {};
	const someIngridients = Object.keys(template)
		.map(elem => [...Array(ingridients[elem])].map((_, i) => (
			<BurgerIngridient key={elem + i} type={elem} />
		)))
		.reduce((arr, el) => arr.concat(el), []);
	return (
		<div className="burger-container">
			<BurgerIngridient type="bread-top" />
			{someIngridients.length !== 0 ? someIngridients : <p>{emptyBurger}</p>}
			<BurgerIngridient type="bread-bottom" />
		</div>
	);
};
burger.propTypes = {
	lang: PropTypes.object,
	ingridients: PropTypes.object,
};

export default LocalHOC(burger);
