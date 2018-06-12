import React from "react";
import { connect } from "react-redux";
import * as actions from "./../../actions/BurgerAction";
import { NotificationContainer } from "react-notifications";

import HeaderContainer from "../HeaderContainer";
import Burger from "./../../components/Burger/Burger";
import BuildControls from "./../../components/Burger/BuildControls";
import Modal from "./../../components/UI/Modal";
import Order from "./../../components/Burger/order";
import Spinner from "../../components/UI/Spinner";
import { notificationSuccess, notificationFail } from "../../utils/notification";

class BurgerBuilder extends React.Component {
	state = {
		openModal: false,
		loading: true,
	};

	componentDidMount () {
		this.props.getIngridients()
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

	shouldComponentUpdate (nextProps, nextState){
		return nextProps.totalPrice !== !this.props.totalPrice
	}	

	openModalHandler = () => this.setState({ openModal: true })

	closeModalHandler = () => this.setState({ openModal: false })

	successRequestHandler = () => this.props.history.push('/checkout')

	render() {
		const { ingridients, totalPrice, purchasable, status } = this.props

		const disabledInfo = { ...this.props.ingridients };
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}
		let burger = status === 404 ? <p style={{textAlign: `center`, marginTop: `15px`}}>fail loading data</p> : <Spinner />
		if(ingridients) {
			burger = (<React.Fragment>
				<Burger ingridients={ingridients} />
					<BuildControls
						ingridients={ingridients}
						price={totalPrice}
						purchasable={purchasable}
						disabled={disabledInfo}
						showModal={this.openModalHandler}
						ingridientRemoved={this.props.removeIngridient}
						ingridientAdded={this.props.addIngridient}
					/>
				</React.Fragment>)
		}
		return (
			<React.Fragment>
				<HeaderContainer />
				<div className="burger-page">
					<Modal closeModal={this.closeModalHandler} showModal={this.state.openModal}>
						{!ingridients ? (
							<Spinner />
						) : (
							<Order
								success={this.successRequestHandler}
								price={totalPrice}
								closeModal={this.closeModalHandler}
								ingridients={ingridients}
							/>
						)}
					</Modal>
					{burger}
				</div>
				<NotificationContainer />
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		status: state.burger.status,
		isFetching: state.burger.isFetching, 
		purchasable: state.burger.purchasable,
		totalPrice: state.burger.totalPrice,
		ingridients: state.burger.ingridients,
	};
};

export default connect(mapStateToProps, actions)(BurgerBuilder);
