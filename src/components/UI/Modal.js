import React from "react";
import Backdrop from "./Backdrop.js";

class Modal extends React.Component {

	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.showModal !== this.props.showModal 
	}

	componentWillUpdate() {
		console.log('componentWillUpdate in Modal')
	}

	render() {
		return (
			<React.Fragment>
				<div
					style={{
						transform: this.props.showModal ? `translateX(0)` : `translateX(1000px)`,
						opacity: this.props.showModal ? "1" : "0",
					}}
					className="modal-order"
				>
					{this.props.children}
				</div>
				<Backdrop cliked={this.props.closeModal} showBackdrop={this.props.showModal} />
			</React.Fragment>
		);
	}
}

export default Modal;
