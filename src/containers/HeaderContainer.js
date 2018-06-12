import React, { Component } from "react";
// import PropTypes from 'prop-types';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as actions from "../actions/toggleLang";

import NavBar from "./../components/Navigation/navigation";
import SideDrawer from "./../components/Navigation/sideDrawer";
import LocalHOC from "./../components/HOC/example2";


class HeaderContainer extends Component {
	static defaultProps = {
		lang: {
			main: `Error`,
			list: `Error`,
			drugs: `Error`,
			blog: `Error`,
			orders: `Error`,
			burgerPage: {
				burger: `Error` 
			} 
		}
	}
	
	state ={ showDrawer: false }

	closeDrawerHandler = () => this.setState({showDrawer: false})
	toggleDrawerHandler = () => this.setState( prevState =>{ return {showDrawer: !prevState.showDrawer}})


	render() {
		const { main, list, drugs, blog, burgerPage, orders } = this.props.lang;

		const listItems = [
			{ link: `/`, text: main },
			{ link: `/users`, text: list },
			{ link: `/drugs`, text: drugs },
			{ link: `/blog`, text: blog },
			{ link: `/burger`, text: burgerPage.burger },
			{ link: `/orders`, text: orders },
		];

		return (
			<div className="header-container">
				<NavBar 
					toggleDrawer={this.toggleDrawerHandler}
					listItems={listItems} 
					{...this.props} />
				<SideDrawer
					closeDrawer={this.closeDrawerHandler} 
					showBackdrop={this.state.showDrawer} 
					listItems={listItems} 
					{...this.props} />
			</div>
		);
	}
}

// const mapDispatchToProps = dispatch => {
// 	return bindActionCreators(actions, dispatch)
// };

export default LocalHOC(HeaderContainer)
