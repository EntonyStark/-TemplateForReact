import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { bindActionCreators } from "redux";
// import * as actions from "../actions/toggleLang";

import NavBar from '../components/Navigation/navigation';
import SideDrawer from '../components/Navigation/sideDrawer';
import LocalHOC from '../components/HOC/example2';


class HeaderContainer extends Component {
	static propTypes = {
		lang: PropTypes.object,
	}

	static defaultProps = {
		lang: {
			main: 'Error',
			list: 'Error',
			drugs: 'Error',
			blog: 'Error',
			orders: 'Error',
			burgerPage: {
				burger: 'Error',
			},
		},
	}

	state ={ showDrawer: false, user: null }

	componentDidMount() {
		const user = localStorage.getItem('userId');
		this.setState({ user });
	}

	closeDrawerHandler = () => this.setState({ showDrawer: false })

	toggleDrawerHandler = () => this.setState(prevState => ({ showDrawer: !prevState.showDrawer }))


	render() {
		const {
			main, list, drugs, blog, burgerPage, orders,
		} = this.props.lang;
		const { user, showDrawer } = this.state;
		const listItems = [
			{ link: '/', text: main },
			{ link: '/users', text: list },
			{ link: '/drugs', text: drugs },
			{ link: '/blog', text: blog },
			{ link: '/burger', text: burgerPage.burger },
			{ link: '/orders', text: orders },
			{ link: user ? '/logOut' : '/auth', text: user ? 'LogOut' : 'Enter' },
		];
		return (
			<div className="header-container">
				<NavBar
					user={user}
					toggleDrawer={this.toggleDrawerHandler}
					listItems={listItems}
					{...this.props} />
				<SideDrawer
					user={user}
					closeDrawer={this.closeDrawerHandler}
					showBackdrop={showDrawer}
					listItems={listItems}
					{...this.props} />
			</div>
		);
	}
}

// const mapStateToProps = state => {
// 	return {
// 		user: state.auth.data
// 	}
// }
// const mapDispatchToProps = dispatch => {
// 	return bindActionCreators(actions, dispatch)
// };

export default LocalHOC(HeaderContainer);
