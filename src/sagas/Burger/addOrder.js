import { call, put } from "redux-saga/effects";
import axios from "axios";
import { BASE_URL } from "../../constants/ActionTypes";
import * as actions from "../../actions/BurgerAction";

export default function* addOrder({payload}) {
	try {
		const fetchData = yield call(axios, {
			url: `${BASE_URL}/orders.json`,
			method: "POST",
			headers: {
					'content-type': 'application/json',
			},
		  data: payload,
		})
		yield put(actions.addOrderSucces(fetchData.status));
	} catch (e) {
		yield put(actions.addOrderError(e.response.status));
	}
}