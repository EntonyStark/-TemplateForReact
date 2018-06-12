import * as Types from "../constants/ActionTypes";
import { updateObject } from "../utils/updateObject";

const initialState = {
	status: null,
	isFetching: false,
}

export default (state = initialState, action) => {
	switch(action.type) {
		case Types.ADD_ORDER: {
			return updateObject(state, {isFetching: true})
		}
		case Types.ADD_ORDER_SUCCESS: {
			return updateObject(state, {isFetching: false, status: action.payload})
		}
		case Types.ADD_ORDER_ERROR: {
			return updateObject(state, {isFetching: false, status: action.payload})
		}
		default: 
			return state
	}
}