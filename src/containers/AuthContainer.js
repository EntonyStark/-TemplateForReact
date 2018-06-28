import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/AuthAction';
import HeaderContainer from './HeaderContainer';
import AuthForm from '../components/Auth/index';

class AuthContainer extends Component {
	state = { auth: true, user: null };

	componentDidMount() {
		const user = localStorage.getItem('user');
		this.setState({ user });
	}

	togglerFormHandler = () => this.setState(prevState => ({ auth: !prevState.auth }));

	render() {
		return (
			<Fragment>
				<HeaderContainer />
				<AuthForm
					user={this.state.user}
					auth={this.state.auth}
					togglerFormHandler={this.togglerFormHandler}
					{...this.props}
				/>
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({
	isFetching: state.auth.isFetching,
	status: state.auth.status,
	totalPrice: state.burger.totalPrice,
});

export default connect(
	mapStateToProps,
	actions,
)(AuthContainer);
