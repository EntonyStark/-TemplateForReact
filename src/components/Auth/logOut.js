import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class LogOut extends Component {
	componentDidMount() {
		console.log(this.props);
		localStorage.removeItem('userId');
		localStorage.removeItem('token');
		localStorage.removeItem('tokenExp');
	}

	render() {
		console.log(this.props);
		return <Redirect to="/" />;
	}
}

export default LogOut;
