import React from "react";
import { Route, Switch } from "react-router-dom";

import UserList from "./components/Users/index";
import Main from "./containers/Main";
import DrugsContainer from "./containers/DrugsContainer";
import BlogContainer from "./containers/BlogContainer";
import BurgerBuilder from "./containers/burger/BurgerBuilder";
import CheckoutContainer from "./containers/burger/CheckoutContainer";
import OrdersContainer from "./containers/burger/OrdersContainer";

const Routes = props => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/users" component={UserList} />
      <Route exact path="/drugs" component={DrugsContainer} />
      <Route exact path="/burger" component={BurgerBuilder} />
      <Route exact path="/blog" component={BlogContainer} />
      <Route exact path="/checkout" component={CheckoutContainer} />
      <Route exact path="/orders" component={OrdersContainer} />
    </Switch>
  );
};

export default Routes;
