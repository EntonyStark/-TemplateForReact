import React from 'react';
import HeaderContainer from '../../containers/HeaderContainer';
import UserListComponent from './userList';

const userList = () => (
	<React.Fragment>
		<HeaderContainer />
		<UserListComponent />
	</React.Fragment>
);

export default userList;
