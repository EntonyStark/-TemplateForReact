import * as Types from '../constants/ActionTypes';

const {
	ADD_INGRIDIENT,
	REMOVE_INGRIDIENT,
	GET_INGRIDIENTS,
	GET_INGRIDIENTS_SUCCESS,
	GET_INGRIDIENTS_ERROR,
	GET_ORDERS,
	GET_ORDERS_SUCCESS,
	GET_ORDERS_ERROR,
	ADD_ORDER,
	ADD_ORDER_SUCCESS,
	ADD_ORDER_ERROR,
} = Types;

export const addIngridient = payload => ({
	type: ADD_INGRIDIENT,
	payload,
});

export const removeIngridient = payload => ({
	type: REMOVE_INGRIDIENT,
	payload,
});

export const getIngridients = payload => ({
	type: GET_INGRIDIENTS,
	payload,
});

export const getIngridientsSucces = payload => ({
	type: GET_INGRIDIENTS_SUCCESS,
	payload,
});

export const getIngridientsError = payload => ({
	type: GET_INGRIDIENTS_ERROR,
	payload,
});

export const getOrders = payload => ({
	type: GET_ORDERS,
	payload,
});

export const getOrdersSucces = payload => ({
	type: GET_ORDERS_SUCCESS,
	payload,
});

export const getOrdersError = payload => ({
	type: GET_ORDERS_ERROR,
	payload,
});

export const addOrder = payload => ({
	type: ADD_ORDER,
	payload,
});

export const addOrderSucces = payload => ({
	type: ADD_ORDER_SUCCESS,
	payload,
});

export const addOrderError = payload => ({
	type: ADD_ORDER_ERROR,
	payload,
});
