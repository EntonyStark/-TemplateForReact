import React, { Fragment, Component } from "react";
import { NotificationContainer } from "react-notifications";

import { notificationSuccess, notificationFail } from "../../utils/notification";

const withError = Component => {
	return class extends Component {

		componentDidUpdate (){	
			const { status, isFetching } = this.props
			if (status) {		
					if(status === 200 && !isFetching) notificationSuccess("ПОЕХАЛО", "МЫ В ЭФИРЕ")
					if(status === 404 && !isFetching) notificationFail("БАБАХ", "ВСЕ ПРОПАЛО")
			}
		}		

		render() {
			return (
				<Fragment>
					<NotificationContainer />
					<Component {...this.props} />
				</Fragment>
			)
		}
	}
}

export default withError