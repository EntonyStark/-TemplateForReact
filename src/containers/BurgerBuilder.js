import React from "react";

import NavBar from "./../components/navigation";
import Burger from "./../components/Burger/Burger";
import BuildControls from "./../components/Burger/BuildControls";
import Modal from "./../components/UI/Modal";
import Order from "./../components/Burger/order";
import { prices } from "./../constants/BurgerPrices";

class BurgerBuilder extends React.Component {
	state = {
		ingridients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0,
		},
		totalPrise: 4,
		purchasable: false,
		openModal: false,
	};

	updatePurchaseState = ingridients => {
		const sum = Object.keys(ingridients).map( el => {
			return ingridients[el]
		}).reduce((sum, el) => {
			return sum + el
		}, 0)
		console.log('222', sum)
		this.setState({purchasable: sum > 0})
	}

	addIngridientHandler = type => {
		const newCount = this.state.ingridients[type] + 1;
		const newIngredients = { ...this.state.ingridients };
		newIngredients[type] = newCount;

		const newPrice = this.state.totalPrise + prices[type];
		
		this.setState({ totalPrise: newPrice, ingridients: newIngredients });
		this.updatePurchaseState(newIngredients)
	};

	removeIngridientHandler = type => {
		const newCount = this.state.ingridients[type] - 1;
		if (newCount < 0) return console.log("error", "newCount < 0");

		const newIngredients = { ...this.state.ingridients };
		newIngredients[type] = newCount;

		const newPrice = this.state.totalPrise - prices[type];

		this.setState({ totalPrise: newPrice, ingridients: newIngredients });
		this.updatePurchaseState(newIngredients)
	};

	openModalHandler = () => {
		this.setState({openModal: true})
	}

	closeModalHandler = () => {
		this.setState({openModal: false})
	}

	render() {
		const disabledInfo = { ...this.state.ingridients };
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <=0
		}
		return (
			<React.Fragment>
				<NavBar />
				<Modal 
					closeModal={this.closeModalHandler}
					showModal={this.state.openModal}>
					<Order ingridients={this.state.ingridients} />
				</Modal>
				<Burger ingridients={this.state.ingridients} />
				<BuildControls
					price={this.state.totalPrise}
					purchasable={this.state.purchasable}
					disabled={disabledInfo}
					showModal={this.openModalHandler}
					ingridientRemoved={this.removeIngridientHandler}
					ingridientAdded={this.addIngridientHandler}
				/>
			</React.Fragment>
		);
	}
}

export default BurgerBuilder;
