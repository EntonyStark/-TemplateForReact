import * as types from '../constants/ActionTypes';

const {
	TOGGLE_DRAGS,
	SET_TOGGLE_LANGUAGE,
} = types;

export const togleDrags = payload => ({
	type: TOGGLE_DRAGS,
	payload,
});

export const setToggleLang = payload => ({
	type: SET_TOGGLE_LANGUAGE,
	payload,
});
