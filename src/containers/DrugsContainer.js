import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions/toggleDrags";

import HeaderContainer from "./HeaderContainer";
import DrugsPage from "./../components/Drugs/index";

import LocalHOC from "./../components/HOC/example2";

class DrugsContainer extends React.Component {
  componentDidMount() {
    this.props.setToggleLang(this.props.lang.users);
  }
  render() {
    return (
      <React.Fragment>
        <HeaderContainer />
        <DrugsPage
          setDrags={this.props.setDrags}
          togleDrags={this.props.togleDrags}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    setDrags: state.toggleDrags.data
  };
};

export default LocalHOC(
  connect(
    mapStateToProps,
    actions
  )(DrugsContainer)
);
