import React from "react";

import HeaderContainer from "./HeaderContainer";
import Burger from "./../components/Burger/Burger";
import BuildControls from "./../components/Burger/BuildControls";
import Modal from "./../components/UI/Modal";
import Order from "./../components/Burger/order";
import { prices } from "./../constants/BurgerPrices";
import Spinner from "../components/UI/Spinner";
import withError from "../components/HOC/errorHandler";

import instance from "../axios";

class BurgerBuilder extends React.Component {
	state = {
		ingridients: null,
		totalPrise: 4,
		purchasable: false,
		openModal: false,
		loading: false,
		error: false,
	};

	componentDidMount () {
		instance.get('/ingridients.json')
			.then(response => {
				this.setState({ingridients: response.data})
			})
			.catch(error => this.setState({error: true}) );
	}

	updatePurchaseState = ingridients => {
		const sum = Object.keys(ingridients)
			.map(el => {
				return ingridients[el];
			})
			.reduce((sum, el) => {
				return sum + el;
			}, 0);
		this.setState({ purchasable: sum > 0 });
	};

	addIngridientHandler = type => {
		const newCount = this.state.ingridients[type] + 1;
		const newIngredients = { ...this.state.ingridients };
		newIngredients[type] = newCount;

		const newPrice = this.state.totalPrise + prices[type];

		this.setState({ totalPrise: newPrice, ingridients: newIngredients });
		this.updatePurchaseState(newIngredients);
	};

	removeIngridientHandler = type => {
		const newCount = this.state.ingridients[type] - 1;
		if (newCount < 0) return console.log("error", "newCount < 0");

		const newIngredients = { ...this.state.ingridients };
		newIngredients[type] = newCount;

		const newPrice = this.state.totalPrise - prices[type];

		this.setState({ totalPrise: newPrice, ingridients: newIngredients });
		this.updatePurchaseState(newIngredients);
	};

	openModalHandler = () => {
		this.setState({ openModal: true });
	};

	closeModalHandler = () => {
		this.setState({ openModal: false });
	};

	successRequestHandler = () => {
		this.setState({loading: true})
		const order = {
			ingridients: this.state.ingridients,
			totalPrise: this.state.totalPrise,
			customer: {
				name: "Tony",
				adress: {
					country: "Ukraine",
					city: "Kharkiv",
					street: "Testovaya",
				},
				email: "test@test.com",
			},
		};

		instance
			.post("/orders.json", order)
			.then(response => this.setState({loading: false, openModal: false }) )
			.catch(error => this.setState({loading: false, openModal: false }) );
	};

	render() {
		const { ingridients, loading, error } = this.state

		const disabledInfo = { ...this.state.ingridients };
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}

		let burger = error ? <p style={{textAlign: `center`, marginTop: `15px`}}>fail loading data</p> : <Spinner />
		if(ingridients) {
			burger = (<React.Fragment>
				<Burger ingridients={this.state.ingridients} />
					<BuildControls
						ingridients={this.state.ingridients}
						price={this.state.totalPrise}
						purchasable={this.state.purchasable}
						disabled={disabledInfo}
						showModal={this.openModalHandler}
						ingridientRemoved={this.removeIngridientHandler}
						ingridientAdded={this.addIngridientHandler}
					/>
				</React.Fragment>)
		}
		return (
			<React.Fragment>
				<HeaderContainer />
				<div className="burger-page">
					<Modal closeModal={this.closeModalHandler} showModal={this.state.openModal}>
						{loading || !ingridients ? (
							<Spinner />
						) : (
							<Order
								success={this.successRequestHandler}
								price={this.state.totalPrise}
								closeModal={this.closeModalHandler}
								ingridients={this.state.ingridients}
							/>
						)}
					</Modal>
					{burger}
				</div>
			</React.Fragment>
		);
	}
}

export default withError(BurgerBuilder, instance);
