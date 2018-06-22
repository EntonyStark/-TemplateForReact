import * as Types from "../constants/ActionTypes";
 
const initialState = {
	data: null,
	status: null,
	isFetching: false,
	error: null,
}

export default (state = initialState, action) => {
	switch(action.type) {
		case Types.REG_REQUEST: {
			return {...state, isFetching: true}
		}
		case Types.REG_REQUEST_SUCCESS: {
			const { data, status } = action.payload
			return {...state, data: data, status: status, isFetching: false}
		}
		case Types.REG_REQUEST_FAIL: {
			return {...state, status: action.payload, error: true, isFetching: false}
		}		
		case Types.LOG_OUT: {
			return {...state, status: null, error: false, data: null}
		}
		default: return state
	}
}