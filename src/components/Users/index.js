import React from "react";
import NavBar from './../navigation';
import UserListComponent from './userList';

const userList = () => {
	return (
		<React.Fragment>
			<NavBar />
    	<UserListComponent />
    </React.Fragment>
	)
}

export default userList