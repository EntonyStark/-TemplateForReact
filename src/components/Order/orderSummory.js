import React from 'react';
import PropTypes from 'prop-types';
import Burger from '../Burger/Burger';
import Button from '../UI/button';

const orderSummory = ({
	lang, ingridients, cancelClick, okClick,
}) => {
	const { cancelButton, okButton } = lang.burgerPage;
	return <div className="checkout-container">
		<h1>We hope it tastes well!</h1>
		<div className="burger-area">
			<Burger ingridients={ingridients} />
		</div>
		<Button
			className="button-custom"
			type="button-custom--danger"
			text={cancelButton}
			onClick={cancelClick}
		/>
		<Button
			className="button-custom"
			type="button-custom--success"
			text={okButton}
			onClick={okClick}
		/>
	</div>;
};
orderSummory.propTypes = {
	lang: PropTypes.object,
	ingridients: PropTypes.object,
	okClick: PropTypes.func,
	cancelClick: PropTypes.func,
};

export default orderSummory;
