import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import HeaderContainer from "../HeaderContainer";
import LocalHoc from "../../components/HOC/example2";
import OrderSummory from "../../components/Order/orderSummory";
import ContactData from "./ContactDataContainer";

class CheckoutContainer extends Component {
	state = { contactData: false };

	componentDidMount () {
		if(!this.props.ingridients) this.props.history.push(`/burger`)
	}

	cancelHandler = () => this.props.history.goBack();
	okHandler = () => this.setState({ contactData: true });

	render() {
		const { totalPrice, ingridients } = this.props
		return (
			<Fragment>
				<HeaderContainer />
				<OrderSummory
					cancelClick={this.cancelHandler}
					okClick={this.okHandler}
					ingridients={this.state.ingridients}
					{...this.props}
				/>
				{this.state.contactData && (
					<ContactData ingridients={ingridients} totalPrise={totalPrice} {...this.props} />
				)}
			</Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		totalPrice: state.burger.totalPrice,
		ingridients: state.burger.ingridients,
	};
};

const component = LocalHoc(CheckoutContainer);

export default connect(mapStateToProps)(component);
