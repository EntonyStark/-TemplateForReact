import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toggleLang from '../actions/toggleLang';

import MainPage from '../components/Main/index';

class Main extends Component {
	static propTypes = {
		toggleLang: PropTypes.func,
	}

	render() {
		return (
			<MainPage
				onClickRu={() => this.props.toggleLang('ru')}
				onClickEn={() => this.props.toggleLang('en')}
			/>
		);
	}
}

const mapDispatchToProps = dispatch => bindActionCreators({ toggleLang }, dispatch);

export default connect(null, mapDispatchToProps)(Main);
