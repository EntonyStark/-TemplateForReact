import React from "react";

const order = props => {
	const ingrideentsSummary = Object.keys(props.ingridients).map(el => (
		<li key={el}>
			<span style={{ textTransform: "capitalize" }}>{el}:</span> {props.ingridients[el]}
		</li>
	));
	return (
		<React.Fragment>
			<h3>Your order</h3>
			<p>A delicios burger with the following ingridients: </p>
			<ul>{ingrideentsSummary}</ul>
			<p>Continue or Checkout ?</p>
		</React.Fragment>
	);
};

export default order;
