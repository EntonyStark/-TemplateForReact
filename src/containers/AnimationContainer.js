import React from 'react';
import { connect } from "react-redux";
import * as actions from "../actions/AmimActions";
import PropTypes from "prop-types";

import Main from "./../components/animation/index";
import NavBar from "./../components/common/navigation";

class Animation extends React.Component {
	static childContextTypes = {
		data:  PropTypes.array,
		func: PropTypes.func,
	}

	getChildContext() {
		return {
			func: this.props.setAnimate,
			data: this.props.data,
		}
	}

	render() {
		return <React.Fragment>
		 	<NavBar />
		 	<Main />
		 </React.Fragment>
	}
}

const mapStateToProps = state => {
	return {
		data: state.anim.data
	};
};

export default connect(mapStateToProps ,actions)(Animation)