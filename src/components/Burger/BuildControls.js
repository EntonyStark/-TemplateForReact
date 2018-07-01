import React from 'react';
import PropTypes from 'prop-types';
import Item from './BuildItem';
import LocalHOC from '../HOC/example2';

const buildControls = ({
	ingridients,
	lang,
	price,
	ingridientAdded,
	ingridientRemoved,
	disabled,
	showModal,
	purchasable,
	user,
}) => {
	const controls = Object.keys(ingridients);
	const { currentPrise, orderNow, less } = lang.burgerPage;
	console.log('ingridients', ingridients);
	return (
		<div className="burger-control-container">
			<p>
				{`${currentPrise}:`} {`${price > 4 ? price.toFixed(2) : 4} $`}
			</p>
			{controls.map(el => (
				<Item
					less={less}
					more={lang.burgerPage.more}
					added={ingridientAdded.bind(null, el)}
					removed={ingridientRemoved.bind(null, el)}
					key={el}
					disabled={ingridients[el] === 0}
					label={lang.burgerPage[el]}
				/>
			))}
			<button
				onClick={showModal}
				disabled={!purchasable}
				className="order-button">
				{user ? orderNow : 'Войди и кушай'}
			</button>
		</div>
	);
};

buildControls.propTypes = {
	lang: PropTypes.object,
	disabled: PropTypes.bool,
	purchasable: PropTypes.bool,
	ingridientRemoved: PropTypes.func,
	ingridientAdded: PropTypes.func,
	showModal: PropTypes.func,
	price: PropTypes.number,
	ingridients: PropTypes.object,
	user: PropTypes.string,
};

export default LocalHOC(buildControls);
