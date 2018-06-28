import { takeEvery } from 'redux-saga/effects';
import * as Types from '../../constants/ActionTypes';
import getIngridients from './getingridients';
import getOrders from './getOrders';
import addOrder from './addOrder';

function* burger() {
	yield takeEvery(Types.GET_INGRIDIENTS, getIngridients);
	yield takeEvery(Types.GET_ORDERS, getOrders);
	yield takeEvery(Types.ADD_ORDER, addOrder);
}

export default burger;
