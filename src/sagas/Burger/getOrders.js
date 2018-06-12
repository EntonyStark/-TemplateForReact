import { call, put } from "redux-saga/effects";
import axios from "axios";
import { BASE_URL } from "../../constants/ActionTypes";
import * as actions from "../../actions/BurgerAction";

export default function* getOrders(payload) {
	try {
		const fetchData = yield call(axios, {
			url: `${BASE_URL}/orders.json`,
			method: "GET"
		})
		yield put(actions.getOrdersSucces({data: fetchData.data, status: fetchData.status}));
	} catch (e) {
		yield put(actions.getOrdersError(e.response.status));
	}
}