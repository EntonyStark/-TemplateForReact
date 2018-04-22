import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions/toggleDrags";

import NavBar from "./../components/common/navigation";
import DragsPage from "./../components/drugs/dragsComponent";

import LocalHOC from "./../components/HOC/example2";

class DragsComponent extends React.Component {
	componentDidMount() {
		this.props.setToggleLang(this.props.lang.users)
	}
	render() {
		console.log('some', this.props)
		return (
			<React.Fragment>
				<NavBar />
				<DragsPage setDrags={this.props.setDrags} togleDrags={this.props.togleDrags} />
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		setDrags: state.toggleDrags.data,
	};
};

export default LocalHOC(connect(mapStateToProps, actions)(DragsComponent));
