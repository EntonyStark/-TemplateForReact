// @flow
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NotificationContainer } from 'react-notifications';
import * as actions from '../../actions/BurgerAction';
import HeaderContainer from '../HeaderContainer';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls';
import Modal from '../../components/UI/Modal';
import Order from '../../components/Burger/order';
import Spinner from '../../components/UI/Spinner';
import {
	notificationSuccess,
	notificationFail,
} from '../../utils/notification';

type Props = {
	getIngridients: () => void,
	removeIngridient: () => void,
	addIngridient: () => void,
	isFetching: boolean,
	purchasable: boolean,
	status: number,
	totalPrice: number,
	history: Object,
	ingridients: Object
};

type State = {
	openModal: boolean,
	loading: boolean,
	user: ?string
};

class Burger1 extends Component<Props, State> {
	static propTypes = {
		isFetching: PropTypes.bool,
		status: PropTypes.number,
		ingridients: PropTypes.object,
		totalPrice: PropTypes.number,
		history: PropTypes.object,
		purchasable: PropTypes.bool,
		getIngridients: PropTypes.func,
		removeIngridient: PropTypes.func,
		addIngridient: PropTypes.func,
	};

	state = {
		openModal: false,
		loading: true,
		user: '',
	};

	componentDidMount() {
		const userId = localStorage.getItem('userId');
		this.setState({ user: userId });
		console.log(userId, 'getIngridients');
		this.props.getIngridients();
	}

	componentDidUpdate() {
		const { status, isFetching } = this.props;
		if (status && this.state.loading) {
			if (status === 200 && !isFetching) {
				notificationSuccess('ПОЕХАЛО', 'МЫ В ЭФИРЕ');
				this.setState({ loading: false });
			}
			if (status === 404 && !isFetching) {
				notificationFail('БАБАХ', 'ВСЕ ПРОПАЛО');
				this.setState({ loading: false });
			}
		}
	}

	openModalHandler = () => {
		if (this.state.user) {
			this.setState({ openModal: true });
		} else {
			this.props.history.push('/auth');
		}
	};

	closeModalHandler = () => this.setState({ openModal: false });

	successRequestHandler = () => this.props.history.push('/checkout');

	render() {
		const { ingridients, status, totalPrice } = this.props;
		let burger
			= status === 404 ? (
				<p
					style={{
						textAlign: 'center',
						marginTop: '15px',
					}}>
					fail loading data
				</p>
			) : (
				<Spinner />
			);
		if (ingridients) {
			burger = (
				<Fragment>
					<Burger ingridients={ingridients} />
					<BuildControls
						ingridients={ingridients}
						price={totalPrice}
						purchasable={this.props.purchasable}
						// disabled={disabledInfo}
						showModal={this.openModalHandler}
						ingridientRemoved={this.props.removeIngridient}
						ingridientAdded={this.props.addIngridient}
						user={this.state.user}
					/>
				</Fragment>
			);
		}
		return (
			<Fragment>
				<HeaderContainer />
				<div className="burger-page">
					<Modal
						closeModal={this.closeModalHandler}
						showModal={this.state.openModal}>
						{!ingridients ? (
							<Spinner />
						) : (
							<Order
								success={this.successRequestHandler}
								price={totalPrice}
								closeModal={this.closeModalHandler}
								ingridients={ingridients}
							/>
						)}
					</Modal>
					<NotificationContainer />
					{burger}
				</div>
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({
	status: state.burger.status,
	isFetching: state.burger.isFetching,
	purchasable: state.burger.purchasable,
	totalPrice: state.burger.totalPrice,
	ingridients: state.burger.ingridients,
});

export default connect(
	mapStateToProps,
	actions,
)(Burger1);
