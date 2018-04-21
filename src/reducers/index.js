import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import ToggleLang from "./ToggleLangReducer";
import ToggleDrags from "./ToggleDragsReducer";

export default combineReducers({
	router: routerReducer,
	form: formReducer,
	toggleLang: ToggleLang,
	toggleDrags: ToggleDrags,
});
