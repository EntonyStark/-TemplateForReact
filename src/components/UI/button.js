import React from "react";

const button = props => (
	<button className={`${props.className} ${props.type}`} onClick={props.onClick}>{props.text}</button>
)

export default button