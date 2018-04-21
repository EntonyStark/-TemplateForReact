import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";

import en from "./../../utils/en.json";
import ru from "./../../utils/ru.json";

const locales = { en, ru };

const LocalHOC = Component => {
	return class extends React.Component {
		render() {
			return <Component {...this.props} lang={locales[this.props.toggleLang]} />;
		}
	};
};

const mapStateToProps = state => {
	return {
		toggleLang: state.toggleLang.lang,
	};
};

const composedHoc = compose(connect(mapStateToProps), LocalHOC);

export default composedHoc;
