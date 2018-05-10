import * as Types from "./../constants/ActionTypes";

import img1 from "./../image/1.jpg";
import img2 from "./../image/2.jpg";
import img3 from "./../image/3.jpg";

const initialState = {
 data: [
		{ image: img1, project: "project1", text: "What are you doing ?", id: 1, obj: null},
		{ image: img2, project: "project2", text: "Some text bla-bla-bla",  id: 2, obj: null},
		{ image: img3, project: "project3", text: "Dude how are you ?",  id: 3, obj: null},
	],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case Types.SET_ANIMATE: {
			const lol = state.data.map( el => el.id === action.payload.id ? ({...el, obj: action.payload.obj}) : el)
			return {...state, data: lol }
		}

		default:
			return state;
	}
};