import React from 'react';
import PropTypes from 'prop-types';
import Button from '../UI/button';

import LocalHoc from '../HOC/example2';

const order = ({
	success, closeModal, price, ingridients, lang,
}) => {
	const {
		yourOrder,
		description,
		totalPrise,
		choice,
		cancelButton,
		okButton,
	} = lang.burgerPage;
	const ingrideentsSummary = Object.keys(ingridients).map(el => (
		<li key={el}>
			<span style={{ textTransform: 'capitalize' }}>{lang.burgerPage[el]}:</span>{' '}
			{ingridients[el]}
		</li>
	));
	return (
		<React.Fragment>
			<h3>{yourOrder}</h3>
			<p>{`${description} :`}</p>
			<ul>{ingrideentsSummary}</ul>
			<p>
				<strong>{`${totalPrise}: ${price.toFixed(2)}`}</strong>
			</p>
			<p>{choice}</p>
			<Button
				className="button-custom"
				type="button-custom--danger"
				text={cancelButton}
				onClick={closeModal}
			/>
			<Button
				className="button-custom"
				type="button-custom--success"
				text={okButton}
				onClick={success}
			/>
		</React.Fragment>
	);
};

order.propTypes = {
	success: PropTypes.func,
	closeModal: PropTypes.func,
	price: PropTypes.number,
	ingridients: PropTypes.object,
	lang: PropTypes.object,
};

export default LocalHoc(order);
