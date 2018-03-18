import React from "react";

const style ={
	display: `flex`,
	width: `100%`,
	height: `100%`,
	alignItems: `center`,
	fontSize: `18px`
}

const DefaultValComponent = ({value}) => (
	<div style={ style }>
		{value}
	</div>
)

export default DefaultValComponent;