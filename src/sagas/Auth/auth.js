import { call, put } from "redux-saga/effects";
import axios from "axios";
import { REG_URL, FIREBASE_KEY, AUTH_URL } from "../../constants/ActionTypes";
import * as actions from "../../actions/AuthAction";
import saveCred from '../../utils/saveToken';

export default function* regRequest({payload}) {
	const { val, history, flag, totalPrice } = payload

	const pack = {...val, returnSecureToken: true}
	
	const url = flag ? `${AUTH_URL}${FIREBASE_KEY}` : `${REG_URL}${FIREBASE_KEY}`

	try {
		const fetchData = yield call(axios, {
			url: url,
			method: "POST",
			headers: {
					'content-type': 'application/json',
			},
		  data: pack,
		})

		saveCred(fetchData.data)

		yield put(actions.regRequestSuccess(fetchData));
		yield history.push(totalPrice !== 4 ? `/checkout` : `/`)
	} catch (e) {
		yield put(actions.regRequestFail(e.response.status));
	}
}