import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./../../actions/BurgerAction";
import { reduxForm, Field } from "redux-form";
import { NotificationContainer } from "react-notifications";
import { notificationSuccess, notificationFail } from "../../utils/notification";

import Button from "../../components/UI/button";
import Spinner from "../../components/UI/Spinner";
import LocalHoc from "../../components/HOC/example2";
import { input, select } from "../../components/UI/formFunc/form";
import { validate } from "../../components/UI/formFunc/validate";


class ContactData extends Component {

	state = { loading: true }

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

	submit = (value, dispatch) => {
		const order = {
			ingridients: this.props.ingridients,
			totalPrise: this.props.totalPrise,
			customer: value,
		};
		this.props.addOrder(order)
	}

	render() {
		const { handleSubmit, isFetching } = this.props;
		
		const options = [
			{value: "fastest", displayValue: "Fastest"},
			{value: "cheapest", displayValue: "Cheapest"},
		]

		return (
			<div className="contact-data">
				<NotificationContainer />
				<h4>Enter your Contact Data</h4>
				{isFetching ? (
					<Spinner />
				) : (
					<form onSubmit={handleSubmit(this.submit)}>
						<Field
							name="name"
							placeholder="Your name"
							id="name"
							type="text"
							className="input-element"
							errorClass="--invalid"
							component={input}
						 />
						 <Field
							name="email"
							placeholder="Your Mail"
							id="email"
							type="text"
							className="input-element"
							errorClass="--invalid"
							component={input}
						 />
						<Field
							name="adress"
							placeholder="Your Adress"
							id="adress"
							type="text"
							className="input-element"
							errorClass="--invalid"
							component={input}
						 />
						 <Field
							name="deliveryMethod"
							className="select-element"
							errorClass="--invalid"
							options={options}
							component={select}
						 />
						<Button
							className="button-custom"
							type="button-custom--success"
							text="Order"
						/>
					</form>
				)}
			</div>
		);
	}
}
ContactData = reduxForm({
	form: "ContactData", validate
})(ContactData)

const mapStateToProps = state => {
	return {
		status: state.addOrder.status,
		isFetching: state.addOrder.isFetching,
	}
}

const component =  LocalHoc(ContactData);

export default connect(mapStateToProps, actions)(component);