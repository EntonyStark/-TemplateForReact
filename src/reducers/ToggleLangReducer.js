import * as Types from '../constants/ActionTypes';

const initialState = {
	lang: 'ru',
};

export default (state = initialState, action) => {
	switch (action.type) {
	case Types.TOGGLE_LANGUAGE: {
		return { ...state, lang: action.payload };
	}

	default:
		return state;
	}
};
