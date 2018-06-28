import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NotificationContainer } from 'react-notifications';
import * as actions from '../../actions/BurgerAction';

import Orders from '../../components/Order/orders';
import HeaderContainer from '../HeaderContainer';
import { notificationSuccess, notificationFail } from '../../utils/notification';


class OrdersContainer extends Component {
	static propTypes = {
		getOrders: PropTypes.func,
		history: PropTypes.object,
		status: PropTypes.number,
		isFetching: PropTypes.bool,
		data: PropTypes.array,
	}

	state = { loading: true }

	componentDidMount() {
		this.props.getOrders(this.props.history);
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
			if (status === 401 && !isFetching) {
				notificationFail('БАБАХ', 'АВТОРИЗУЙТЕСЬ');
				this.setState({ loading: false });
			}
		}
	}

	render() {
		const { data } = this.props;
		return (
			<Fragment>
				<HeaderContainer />
				<div className="orders-container">
					{data.map(el => (
						<Orders
							key={el.id}
							customer={el.data.customer}
							ingridients={el.data.ingridients}
							totalPrice={el.data.totalPrise} />
					))}
				</div>
				<NotificationContainer />
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({
	data: state.order.data,
	status: state.order.status,
	isFetching: state.order.isFetching,
});

export default connect(mapStateToProps, actions)(OrdersContainer);
