import { call, put } from "redux-saga/effects";
import axios from "axios";
import { BASE_URL } from "../../constants/ActionTypes";
import * as actions from "../../actions/BurgerAction";
import checkToken from "../../utils/checkToken";

export default function* getOrders({payload}) {
	
	const validToken = checkToken()
	if(!validToken) {
		return payload.push("/")
	}

	try {
		const token = localStorage.getItem("token");
		const userId = localStorage.getItem("userId");
		const fetchData = yield call(axios, {
			url: `${BASE_URL}/orders.json?auth=${token}&orderBy="userId"&equalTo="${userId}"`,
			method: "GET"
		})
		yield put(actions.getOrdersSucces({data: fetchData.data, status: fetchData.status}));
	} catch (e) {
		yield put(actions.getOrdersError(e.response.status));
	}
}