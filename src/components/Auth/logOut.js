import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class LogOut extends Component {
	
	componentDidMount() {
		localStorage.removeItem("userId");
		localStorage.removeItem("token");
		localStorage.removeItem("tokenExp");
	}

	render() {
		return <Redirect to="/" />
	}
}

export default LogOut