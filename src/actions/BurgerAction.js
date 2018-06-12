import * as Types from "./../constants/ActionTypes";

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
} = Types

export const addIngridient = payload => {
  return {
    type: ADD_INGRIDIENT,
    payload
  };
};

export const removeIngridient = payload => {
  return {
    type: REMOVE_INGRIDIENT,
    payload
  };
};

export const getIngridients = payload => {
  return {
    type: GET_INGRIDIENTS,
    payload
  };
};

export const getIngridientsSucces = payload => {
  return {
    type: GET_INGRIDIENTS_SUCCESS,
    payload
  };
};

export const getIngridientsError = payload => {
  return {
    type: GET_INGRIDIENTS_ERROR,
    payload
  };
};

export const getOrders = payload => {
  return {
    type: GET_ORDERS,
    payload
  };
};

export const getOrdersSucces = payload => {
  return {
    type: GET_ORDERS_SUCCESS,
    payload
  };
};

export const getOrdersError = payload => {
  return {
    type: GET_ORDERS_ERROR,
    payload
  };
};

export const addOrder = payload => {
  return {
    type: ADD_ORDER,
    payload
  };
};

export const addOrderSucces = payload => {
  return {
    type: ADD_ORDER_SUCCESS,
    payload
  };
};

export const addOrderError = payload => {
  return {
    type: ADD_ORDER_ERROR,
    payload
  };
};