import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import BurgerBuilder from "./BurgerBuilder";
import BuildControls from "../../components/Burger/BuildControls"

configure({adapter: new Adapter()})

describe("burger", () => {
	
	let wrapper;
	beforeEach( () => {
		wrapper = shallow(<BurgerBuilder />)
	})

	it("should render BuildControls when reseiveing ingridients", () => {
		wrapper.setProps([{ingridients: {salad: 2}}])
		expect(wrapper.find(BuildControls)).toHaveLength(1)
	});

});