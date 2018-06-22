import React from "react";
import { reduxForm, Field } from "redux-form";
import { input } from "../UI/formFunc/form";
import { validate } from  "../UI/formFunc/validate";
import Spinner from "../UI/Spinner";

const authForm = props => {
	const { isFetching, auth, togglerFormHandler, handleSubmit, status, user, history, totalPrice } = props
	
	const submit = (values, dispatch) => {
		props.regRequest({val: values, flag: props.auth, history: history, price: totalPrice})
		props.reset("authForm")
	}
	
	const checkStatus = status => {	
		let requestStatus = null;
		switch(status){
			case(200): {
				requestStatus = `Успех`
				break;
			}
			case(400): {
				requestStatus = `Этот юзер уже существует`
				break;
			}
			case(404): {
				requestStatus = `Что-то сломалось`
				break;
			}
			default: 
				return null
		}

		return requestStatus
	}

	const logOut = () => {
		localStorage.removeItem("user");
		localStorage.removeItem("token");
		localStorage.removeItem("tokenExp");
	}

	return (
		<form className="auth-container" onSubmit={handleSubmit(submit)}>
			{isFetching ? (<Spinner />
				) : (
				<React.Fragment>
					<Field 
						name="email"
						placeholder="Your Mail"
						id="email"
						type="email"
						className="input-element"
						errorClass="--invalid"
						component={input}/>
					<Field 
						name="password"
						placeholder="Your Password"
						id="password"
						type="password"
						className="input-element"
						errorClass="--invalid"
						component={input}/>
						<span className="error">{checkStatus(status)}</span>
					{user ? (
						<button className="button-custom" type="button" onClick={logOut}>LogOut</button>
						) : (
						<div>
							<button className="button-custom" type="submit">Ок</button>
							<button className="button-custom toggle" type="button" onClick={togglerFormHandler}>
								{auth ? "Войти" : "Зарегистрироваться"}
							</button>
						</div>)}
				</React.Fragment>
				)}
		</form>
	)
}

export default reduxForm({form: "authForm", validate})(authForm)