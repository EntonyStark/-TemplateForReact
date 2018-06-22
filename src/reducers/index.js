import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import ToggleLang from "./ToggleLangReducer";
import ToggleDrags from "./ToggleDragsReducer";
import Burger from "./BurgerReducer";
import Order from "./OrsersReducer";
import addOrder from "./OrderReducer";
import auth from "./AuthReducer";

export default combineReducers({
	router: routerReducer,
	form: formReducer,
	toggleLang: ToggleLang,
	toggleDrags: ToggleDrags,
	burger: Burger,
	order: Order,
	addOrder,
	auth,
});
