import * as types from '../constants/ActionTypes';

const {
	TOGGLE_LANGUAGE,
} = types;

export default payload => ({
	type: TOGGLE_LANGUAGE,
	payload,
});
