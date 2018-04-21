import React from "react";
import LocalHOC from "./HOC/example2";
import Stringa from "./string";

const DragsPage = props => {
	const { setDrags, style } = props;
	console.log('some', setDrags)
	return (
		<div className="drags">
			<div className="drags-btn-block">
				<button
					onClick={() => props.togleDrags({ status: "set" })}
					type="button"
					className="drags-btn"
				>
					{props.lang.addDrags}
				</button>
				<button
					onClick={() => props.togleDrags({ status: "reset" })}
					type="button"
					className="drags-btn"
				>
					{props.lang.resetDrags}
				</button>
			</div>
			<div className="drags-place">
				{setDrags.map((el, index) => 
					<Stringa el={el} key={index} index={index} />
				)}
			</div>
		</div>
	);
};

export default LocalHOC(DragsPage);
