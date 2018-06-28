import React from 'react';
import PropTypes from 'prop-types';

const orders = ({ customer, totalPrice, ingridients }) => {
	const someIngridients = Object.keys(ingridients).map(elem => ({
		name: elem,
		value: ingridients[elem],
	}));
	const list = someIngridients.map(el => (
		<span className="item" key={el.name}>
			{el.name} ({el.value})
		</span>
	));
	return (
		<div className="order-block">
			<p>Ingridients: {list}</p>
			<div className="customer">
				<span>
					Total Price :{' '}
					<strong>
						USD {totalPrice ? Number.parseFloat(totalPrice).toFixed(2) : 'free'}
					</strong>
				</span>
				<span>Customer: {customer.name}</span>
			</div>
		</div>
	);
};

orders.propTypes = {
	customer: PropTypes.object,
	totalPrice: PropTypes.number,
	ingridients: PropTypes.object,
};

export default orders;
