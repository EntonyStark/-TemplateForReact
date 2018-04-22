import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/toggleLang";

import ToggleLang from "./../components/localization/localization";

class Localization extends Component {
	render() {
		return (
			<ToggleLang
				onClickRu={() => this.props.toggleLang("ru")}
				onClickEn={() => this.props.toggleLang("en")}
			/>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators(actions, dispatch)
};

export default connect(null, mapDispatchToProps)(Localization);
