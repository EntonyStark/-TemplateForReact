import { call, put } from "redux-saga/effects";
import axios from "axios";
import { BASE_URL } from "../../constants/ActionTypes";
import * as actions from "../../actions/BurgerAction";

export default function* getIngridients(payload) {
	try {
		const fetchData = yield call(axios, {
			url: `${BASE_URL}/ingridients.json`,
			method: "GET"
		})

		yield put(actions.getIngridientsSucces({data: fetchData.data, status: fetchData.status}));
	} catch (e) {
		yield put(actions.getIngridientsError(e.response.status));
	}
}