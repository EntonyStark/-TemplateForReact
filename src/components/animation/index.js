import React from "react";
import FirstAnimation from "./content";
import PropTypes from "prop-types";
import { TimelineMax, Power4, Linear, Back } from "gsap";
import {timeLine} from "./tlfunc";

class Main extends React.Component {
	static contextTypes = {
		data: PropTypes.array,
	};
	
	// lol = data => {
	// 	const mainTL = new TimelineMax().set(timeLine(data), { autoAlpha: 1 });
	// }

	render() {
		const { data } = this.context
		 	// {timeLine([data[0].obj, data[1].obj, data[2].obj])}

		return <React.Fragment>
		 {data.map(el => (
		 			<div key={el.id} className={el.project}>
		 				<FirstAnimation
		 					id={el.id}
		 					text={el.text} 
		 					img={el.image} />
		 			</div>
		 	))}
		 				{timeLine(data[1].obj)}
		</React.Fragment>
	}
};

export default Main;
