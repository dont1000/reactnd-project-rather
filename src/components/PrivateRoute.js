import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import Login from "../views/Login"

class PrivateRoute extends Component {
  render() {
    
    const { authedUser, path, component } = this.props;
    return (
      <Route path={path} exact component={authedUser.userName ? component : Login} />
    );
  }
    
}

const mapToProp = ({ authedUser }, { path, component }) => {
  return {
    authedUser,
    path,
    component,
  };
};

export default withRouter(connect(mapToProp)(PrivateRoute));
