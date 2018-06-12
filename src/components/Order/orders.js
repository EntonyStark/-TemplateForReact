import React from "react";

const orders = props => {
	const someIngridients = Object.keys(props.ingridients).map(elem => ({
		name: elem,
		value: props.ingridients[elem],
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
					Total Price :{" "}
					<strong>
						USD {props.totalPrice ? Number.parseFloat(props.totalPrice).toFixed(2) : "free"}
					</strong>
				</span>
				<span>Customer: {props.customer.name}</span>
			</div>
		</div>
	);
};

export default orders;
