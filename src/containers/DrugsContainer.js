import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions/toggleDrags';

import HeaderContainer from './HeaderContainer';
import DrugsPage from '../components/Drugs/index';

import LocalHOC from '../components/HOC/example2';

class DrugsContainer extends React.Component {
	static propTypes = {
		lang: PropTypes.object,
		setDrags: PropTypes.array,
		togleDrags: PropTypes.func,
		setToggleLang: PropTypes.func,
	}

	componentDidMount() {
		this.props.setToggleLang(this.props.lang.users);
	}

	render() {
		return (
			<React.Fragment>
				<HeaderContainer />
				<DrugsPage
					setDrags={this.props.setDrags}
					togleDrags={this.props.togleDrags}
				/>
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => ({
	setDrags: state.toggleDrags.data,
});

export default LocalHOC(
	connect(
		mapStateToProps,
		actions,
	)(DrugsContainer),
);
