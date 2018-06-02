import React, { Fragment, Component } from "react";
import { NotificationContainer } from "react-notifications";

import { notificationSuccess, notificationFail } from "../../utils/notification";

const withError = (Component, axios) => {
	return class extends Component {

		componentWillMount() {
			// axios.interceptors.request.use(req => {
			// 	return req
			// })  // if you use state for manage error you need call this method first, its important !

			this.handler = axios.interceptors.response.use( response => {
				notificationSuccess("ПОЕХАЛО", "МЫ В ЭФИРЕ")
				return response
			}, error => {
				notificationFail("БАБАХ", "ВСЕ ПРОПАЛО")
				return error
			})
		}

		componentDidMount (){
			// console.log(123)
		}		

		componentWillUnMount (){
			axios.interceptors.response.eject(this.handler)
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