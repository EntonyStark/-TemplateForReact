import * as Types from "./../constants/ActionTypes";

const initialState = {
 all: null,
 data: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case Types.TOGGLE_DRAGS: {
			if (action.payload.status === 'set') {
				return {
					...state, 
					data: state.data.concat([state.all[Math.floor(Math.random() * state.all.length + 1) - 1].name])
				}
			} else {
				return {...state, data: []}
			}
		}
		case Types.SET_TOGGLE_LANGUAGE: {
			return {...state, all: action.payload}
		}

		default:
			return state;
	}
};