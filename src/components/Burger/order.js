import React from "react";
import Button from "./../UI/button";

import LocalHoc from "./../HOC/example2";

const order = props => {
	const {
		yourOrder,
		description,
		totalPrise,
		choice,
		cancelButton,
		okButton,
	} = props.lang.burgerPage;
	const ingrideentsSummary = Object.keys(props.ingridients).map(el => (
		<li key={el}>
			<span style={{ textTransform: "capitalize" }}>{props.lang.burgerPage[el]}:</span>{" "}
			{props.ingridients[el]}
		</li>
	));
	return (
		<React.Fragment>
			<h3>{yourOrder}</h3>
			<p>{`${description} :`}</p>
			<ul>{ingrideentsSummary}</ul>
			<p>
				<strong>{`${totalPrise}: ${props.price.toFixed(2)}`}</strong>
			</p>
			<p>{choice}</p>
			<Button
				className="button-custom"
				type="button-custom--danger"
				text={cancelButton}
				onClick={props.closeModal}
			/>
			<Button
				className="button-custom"
				type="button-custom--success"
				text={okButton}
				onClick={props.closeModal}
			/>
		</React.Fragment>
	);
};

export default LocalHoc(order);
