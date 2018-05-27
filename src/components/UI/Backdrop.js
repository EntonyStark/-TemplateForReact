import React from "react";

const backdrop = props => (
	props.showBackdrop ? <div className="backdrop" onClick={props.cliked}></div> : null
)

export default backdrop