import * as Types from "../constants/ActionTypes";
import { updateObject } from "../utils/updateObject";

const initialState = {
	data: [],
	status: null, 
	isFetching: false,
} 

export default (state = initialState, action) => {
	switch(action.type) {
		case Types.GET_ORDERS: {
			return updateObject(state, {isFetching: true})
		}
		case Types.GET_ORDERS_SUCCESS: {
			const { status, data } = action.payload
			const pack = [];
			for (let key in data) {
				pack.push({
					...data[key],
					id: key,
				});
			}
			return updateObject(state, {isFetching: false, data: pack, status: status})
		}
		case Types.GET_ORDERS_ERROR: {
			return updateObject(state, {isFetching: false, status: action.payload})
		}
		default: 
			return state;
	}
}