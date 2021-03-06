import React from "react";
import { Route, Switch } from "react-router-dom";

import UserList from "./components/Users/index";
import Main from "./containers/Main";
import DrugsContainer from "./containers/DrugsContainer";
import BurgerBuilder from "./containers/BurgerBuilder";
import BlogContainer from "./containers/BlogContainer";

const Routes = props => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/users" component={UserList} />
      <Route exact path="/drugs" component={DrugsContainer} />
      <Route exact path="/burger" component={BurgerBuilder} />
      <Route exact path="/blog" component={BlogContainer} />
    </Switch>
  );
};

export default Routes;
