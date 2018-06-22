import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import NavItems from "./navItems";
import navItem from "./navItem"

configure({adapter: new Adapter()})

describe("nav.js", () => {
	
	let wrapper;
	beforeEach( () => {
		wrapper = shallow(<NavItems />)
	})

	it("should render 6 links", () => {
		expect(wrapper.find(navItem)).toHaveLength(6)
	});

	it("should render 7 links", () => {
		// wrapper.setProps({listItems: []})
		wrapper = shallow(<NavItems listItems={[]} />)
		expect(wrapper.find(navItem)).toHaveLength(7)
	});

});