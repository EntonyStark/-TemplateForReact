import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as actions from "./../../actions/BurgerAction";
import { NotificationContainer } from "react-notifications";

import Orders from "../../components/Order/orders";
import HeaderContainer from "../HeaderContainer";
import { notificationSuccess, notificationFail } from "../../utils/notification";


class OrdersContainer extends Component {

	state = { loading: true }

	componentDidMount() {
		this.props.getOrders()
	}

	componentDidUpdate (){	
		const { status, isFetching } = this.props
		if (status && this.state.loading) {
			if(status === 200 && !isFetching) {
				notificationSuccess("ПОЕХАЛО", "МЫ В ЭФИРЕ")
				this.setState({loading: false})
			}
			if(status === 404 && !isFetching) {
				notificationFail("БАБАХ", "ВСЕ ПРОПАЛО")
				this.setState({loading: false})
			}
		}
	}

	render() {
		const { data } = this.props;
		return (
			<Fragment>
				<HeaderContainer />
				<div className="orders-container">
					{data.map(el => (
						<Orders 
							key={el.id}
							customer={el.customer} 
							ingridients={el.ingridients} 
							totalPrice={el.totalPrise} />
					))}
				</div>
				<NotificationContainer />
			</Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		data: state.order.data,
		status: state.order.status,
		isFetching: state.order.isFetching,
	}
}

export default connect(mapStateToProps, actions)(OrdersContainer)
