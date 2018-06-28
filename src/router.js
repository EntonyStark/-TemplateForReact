import React from 'react';
import { Route, Switch } from 'react-router-dom';
import acyncComponent from './components/HOC/acyncLeazy';

import UserList from './components/Users/index';
import LogOut from './components/Auth/logOut';
import Main from './containers/Main';
import DrugsContainer from './containers/DrugsContainer';
import BlogContainer from './containers/BlogContainer';
import { BurgerBuilder } from './containers/burger/BurgerBuilder';

const checkout = acyncComponent(() => import('./containers/burger/CheckoutContainer'));

const auth = acyncComponent(() => import('./containers/AuthContainer'));

const orders = acyncComponent(() => import('./containers/burger/OrdersContainer'));

const Routes = props => (
	<Switch>
		<Route exact path="/" component={Main} />
		<Route exact path="/auth" component={auth} />
		<Route exact path="/logOut" component={LogOut} />
		<Route exact path="/users" component={UserList} />
		<Route exact path="/drugs" component={DrugsContainer} />
		<Route exact path="/burger" component={BurgerBuilder} />
		<Route exact path="/blog" component={BlogContainer} />
		<Route exact path="/checkout" component={checkout} />
		<Route exact path="/orders" component={orders} />
	</Switch>
);

export default Routes;
