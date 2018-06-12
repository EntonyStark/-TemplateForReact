import React from "react";

import Burger from "../Burger/Burger";
import Button from "../UI/button";

const orderSummory = props => {
	const {cancelButton, okButton} = props.lang.burgerPage;
	return <div className="checkout-container">
		<h1>We hope it tastes well!</h1>
		<div className="burger-area">
			<Burger ingridients={props.ingridients} />
		</div>
		<Button
				className="button-custom"
				type="button-custom--danger"
				text={cancelButton}
				onClick={props.cancelClick}
			/>
		<Button
				className="button-custom"
				type="button-custom--success"
				text={okButton}
				onClick={props.okClick}
			/>
	</div>
}

export default orderSummory