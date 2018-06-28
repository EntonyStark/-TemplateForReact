import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

import en from '../../utils/en';
import ru from '../../utils/ru';

const locales = { en, ru };

const LocalHOC = Component => class extends React.Component {
	static propTypes = {
		toggleLang: PropTypes.string,
	}

	render() {
		return <Component {...this.props} lang={locales[this.props.toggleLang]} />;
	}
};

const mapStateToProps = state => ({
	toggleLang: state.toggleLang.lang,
});

const composedHoc = compose(connect(mapStateToProps), LocalHOC);

export default composedHoc;
