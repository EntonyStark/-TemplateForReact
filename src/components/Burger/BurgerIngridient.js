import React from 'react';
import PropTypes from 'prop-types';

class BurgerIngridient extends React.Component {
	static propTypes = {
		type: PropTypes.string.isRequired,
	}

	render() {
		let ingridient = null;

		switch (this.props.type) {
		case ('bread-bottom'):
			ingridient = <div className="bread-bottom"></div>;
			break;
		case ('bread-top'):
			ingridient = (<div className="bread-top">
				<div className="seeds1"></div>
				<div className="seeds2"></div>
			</div>);
			break;
		case ('meat'):
			ingridient = <div className="meat"></div>;
			break;
		case ('cheese'):
			ingridient = <div className="cheese"></div>;
			break;
		case ('salad'):
			ingridient = <div className="salad"></div>;
			break;
		case ('bacon'):
			ingridient = <div className="bacon"></div>;
			break;
		default: ingridient = null;
		}

		return ingridient;
	}
}

export default BurgerIngridient;
