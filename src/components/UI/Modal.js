import React from 'react';
import PropTypes from 'prop-types';
import Backdrop from './Backdrop';

class Modal extends React.Component {
	static propTypes = {
		children: PropTypes.object,
		showModal: PropTypes.bool,
		closeModal: PropTypes.func,
	}

	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.showModal !== this.props.showModal || nextProps.children !== this.props.children;
	}

	render() {
		return (
			<React.Fragment>
				<div
					style={{
						transform: this.props.showModal ? 'translateX(0)' : 'translateX(1000px)',
						opacity: this.props.showModal ? '1' : '0',
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
