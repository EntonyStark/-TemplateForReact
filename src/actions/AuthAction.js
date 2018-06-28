import {
	REG_REQUEST, REG_REQUEST_SUCCESS, REG_REQUEST_FAIL, LOG_OUT,
} from '../constants/ActionTypes';


export const regRequest = payload => ({
	type: REG_REQUEST,
	payload,
});

export const regRequestSuccess = payload => ({
	type: REG_REQUEST_SUCCESS,
	payload,
});

export const regRequestFail = payload => ({
	type: REG_REQUEST_FAIL,
	payload,
});

export const logOut = payload => ({
	type: LOG_OUT,
	payload,
});
