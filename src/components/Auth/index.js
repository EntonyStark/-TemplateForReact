import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { input } from '../UI/formFunc/form';
import validate from '../UI/formFunc/validate';
import Spinner from '../UI/Spinner';

const authForm = ({
	reset, regRequest, auth, isFetching, togglerFormHandler, handleSubmit, history, status, user, totalPrice,
}) => {
	const submit = (values, dispatch) => {
		regRequest({
			val: values, flag: auth, history, price: totalPrice,
		});
		reset('authForm');
	};

	const checkStatus = () => {
		let requestStatus = null;
		switch (status) {
		case (200): {
			requestStatus = 'Успех';
			break;
		}
		case (400): {
			requestStatus = 'Этот юзер уже существует';
			break;
		}
		case (404): {
			requestStatus = 'Что-то сломалось';
			break;
		}
		default:
			return null;
		}

		return requestStatus;
	};

	const logOut = () => {
		localStorage.removeItem('user');
		localStorage.removeItem('token');
		localStorage.removeItem('tokenExp');
	};
	console.log(user, 'user');
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
					<span className="error">{checkStatus()}</span>
					{user ? (
						<button className="button-custom" type="button" onClick={logOut}>LogOut</button>
					) : (
						<div>
							<button className="button-custom" type="submit">Ок</button>
							<button className="button-custom toggle" type="button" onClick={togglerFormHandler}>
								{auth ? 'Войти' : 'Зарегистрироваться'}
							</button>
						</div>)}
				</React.Fragment>
			)}
		</form>
	);
};
authForm.propTypes = {
	reset: PropTypes.func,
	regRequest: PropTypes.func,
	togglerFormHandler: PropTypes.func,
	handleSubmit: PropTypes.func,
	history: PropTypes.object,
	auth: PropTypes.bool,
	isFetching: PropTypes.bool,
	status: PropTypes.number,
	totalPrice: PropTypes.number,
	user: PropTypes.string,
};

export default reduxForm({ form: 'authForm', validate })(authForm);
