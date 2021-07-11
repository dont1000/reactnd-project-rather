import React from "react";
import { Fragment } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import NavAuthLink from "../components/NavAuthLink";
import { removeAuthedUser } from "../actions/authedUser";


class Navigation extends React.Component {

logout = () => {
  const { dispatch } = this.props;
  dispatch(removeAuthedUser());
}

 

render(){
  const { autheUserData } = this.props;
    return (
      <Fragment>
        {autheUserData && (
          <nav className="menu">
            <ul>
              <li>
                <NavLink to="/" exact activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/leaderboard" exact activeClassName="active">
                  Leaderboard
                </NavLink>
              </li>
              <li>
                <NavAuthLink user={autheUserData} />
              </li>
              <li>
                <div onClick={this.logout}>Logout</div>
              </li>
            </ul>
          </nav>
        )}
      </Fragment>
    );

      }
}
function mapToProp({authedUser, users}) {
  const autheUserData = users[authedUser.userName];

  return { autheUserData };
}
export default connect(mapToProp)(Navigation)