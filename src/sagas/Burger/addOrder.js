import { call, put } from "redux-saga/effects";
import axios from "axios";
import { BASE_URL } from "../../constants/ActionTypes";
import * as actions from "../../actions/BurgerAction";
import checkToken from "../../utils/checkToken";

export default function* addOrder({payload}) {

	const { val, history } = payload
	const validToken = checkToken()
	if(!validToken) {
		return history.push("/")
	}

	const userId = localStorage.getItem("userId");
	if(!userId) {
		return history.push("/")
	}

	const pack = {...val, userId: userId }

	try {
		const token = localStorage.getItem("token");
		const fetchData = yield call(axios, {
			url: `${BASE_URL}/orders.json?auth=${token}`,
			method: "POST",
			headers: {
					'content-type': 'application/json',
			},
		  data: pack,
		})
		yield put(actions.addOrderSucces(fetchData.status));
	} catch (e) {
		yield put(actions.addOrderError(e.response.status));
	}
}