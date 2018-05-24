import React from "react";

const backdrop = props => (
	props.showModal ? <div className="backdrop" onClick={props.closeModal}></div> : null
)

export default backdrop