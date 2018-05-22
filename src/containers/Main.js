import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/toggleLang";

import MainPage from "./../components/Main/index";

class Main extends Component {
	render() {
		return (
			<MainPage
				onClickRu={() => this.props.toggleLang("ru")}
				onClickEn={() => this.props.toggleLang("en")}
			/>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators(actions, dispatch)
};

export default connect(null, mapDispatchToProps)(Main);
