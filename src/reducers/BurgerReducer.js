import * as Types from "../constants/ActionTypes";
import { prices } from "../constants/BurgerPrices";
import { updateObject } from "../utils/updateObject";

const initialState = {
	ingridients: null,
	isFetching: false,
	status: null,
	totalPrice: 4,
	purchasable: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case Types.GET_INGRIDIENTS: {
			return updateObject(state, {isFetching: true})
		}
		case Types.GET_INGRIDIENTS_SUCCESS: {
			const { status, data } = action.payload
			return updateObject(state, {ingridients: data, isFetching: false, status: status})
		}
		case Types.GET_INGRIDIENTS_ERROR: {
			return updateObject(state, {status: action.payload, isFetching: false})
		}
		case Types.ADD_INGRIDIENT: {
			const newList = {
				...state.ingridients,
				[action.payload]: state.ingridients[action.payload] + 1
			}

			const sum = Object.keys(newList)
				.map(el => newList[el]).reduce((sum, el) => sum + el, 0);
			return updateObject(state, {
				purchasable: sum > 0, 
				totalPrice: state.totalPrice + prices[action.payload], 
				ingridients: newList
			})
		}
		case Types.REMOVE_INGRIDIENT: {
			const newList = {
				...state.ingridients,
				[action.payload]: state.ingridients[action.payload] - 1
			}
			const sum = Object.keys(newList)
				.map(el => newList[el]).reduce((sum, el) => sum + el, 0);
			return updateObject(state, {
				purchasable: sum > 0, 
				totalPrice: state.totalPrice - prices[action.payload], 
				ingridients: newList
			})
		}

		default:
			return state;
	}
};
