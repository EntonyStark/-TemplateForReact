import React from "react";
import { Route, Switch } from "react-router-dom";

import MainPage from "./components/mainPage";
import Delay from "./components/delay/delay";
import Localization from "./containers/App";
import DragsComponent from "./containers/drags";
import Animation from "./containers/AnimationContainer";

const Routes = props => {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/delay" component={Delay} />
      <Route exact path="/local" component={Localization} />
      <Route exact path="/drags" component={DragsComponent} />
      <Route exact path="/anim" component={Animation} />
    </Switch>
  );
};

export default Routes;
