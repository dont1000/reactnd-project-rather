import React from "react";
import { Fragment } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import NavAuthLink from "../components/NavAuthLink";
import { removeAuthedUser } from "../actions/authedUser";
import "./Navigation.scss";


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
          <div className="menu">
            <div className="logo__circle__wrapper logo__menu">
              <div className="logo__circle logo__circle--red" />
              <div className="logo__circle logo__circle--green" />
            </div>
            <nav>
              <ul>
                <li className="menu__link">
                  <NavLink to="/" exact activeClassName="active">
                    Home
                  </NavLink>
                </li>
                <li className="menu__link">
                  <NavLink to="/leaderboard" exact activeClassName="active">
                    Leaderboard
                  </NavLink>
                </li>
                <li className="menu__link">
                  <NavLink to="/add" exact activeClassName="active">
                    Create a Question
                  </NavLink>
                </li>
                <li className="menu__link menu__link--right">
                  <NavAuthLink user={autheUserData} />
                </li>
                <li className="menu__link">
                  <div onClick={this.logout}>Logout</div>
                </li>
              </ul>
            </nav>
          </div>
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