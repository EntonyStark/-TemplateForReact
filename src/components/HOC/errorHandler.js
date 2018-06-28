import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { NotificationContainer } from 'react-notifications';

import { notificationSuccess, notificationFail } from '../../utils/notification';

const withError = Component => class extends Component {
	static propTypes = {
		status: PropTypes.number,
		isFetching: PropTypes.bool,
	}

	componentDidUpdate() {
		const { status, isFetching } = this.props;
		if (status) {
			if (status === 200 && !isFetching) notificationSuccess('ПОЕХАЛО', 'МЫ В ЭФИРЕ');
			if (status === 404 && !isFetching) notificationFail('БАБАХ', 'ВСЕ ПРОПАЛО');
		}
	}

	render() {
		return (
			<Fragment>
				<NotificationContainer />
				<Component {...this.props} />
			</Fragment>
		);
	}
};

export default withError;
