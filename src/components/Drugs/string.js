import React from "react";
import ChangePosition from "./../HOC/example3";

const stringa = props => {
	return <span style={props.style} className="drags-staff" key={props.index}>
		{props.el}
	</span>
}

export default ChangePosition(stringa)
