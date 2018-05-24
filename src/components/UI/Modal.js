import React from 'react';
import Backdrop from "./Backdrop.js";

const modal = props => (
	<React.Fragment>
		<div 
			style={{
				transform: props.showModal ? `translateX(0)` : `translateX(1000px)`,
				opacity: props.showModal ? '1' : '0'
			}}
			className="modal-order">
			{props.children}
		</div>
		<Backdrop closeModal={props.closeModal} showModal={props.showModal} />
	</React.Fragment>
)

export default modal