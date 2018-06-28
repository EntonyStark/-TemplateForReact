import { takeEvery } from 'redux-saga/effects';
import * as Types from '../../constants/ActionTypes';
import authREquest from './auth';

function* auth() {
	yield takeEvery(Types.REG_REQUEST, authREquest);
}

export default auth;
