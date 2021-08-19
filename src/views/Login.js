import React, { Component } from "react";
import { connect } from "react-redux";
import { addAuthedUser } from "../actions/authedUser";
import "./Login.scss";


class Login extends Component {
  state = { option: "" };
  users = [
    {
      id: "sarahedo",
      name: "Sarah Edo",
    },
    {
      id: "tylermcginnis",
      name: "Tyler McGinnis",
    },
    {
      id: "johndoe",
      name: "John Doe",
    },
  ];

  handleChange = (event) => {
    this.setState({ option: event.target.value });
  }

  handleSubmit= (event) => {
    const { dispatch } = this.props;
    event.preventDefault();
    dispatch(addAuthedUser(this.state.option));
  }

  render() {
    return (
      <div className="logIn__wrapper">
        <div className="logo">
          <div className="logo__circle__wrapper">
            <div className="logo__circle logo__circle--red" />
            <div className="logo__circle logo__circle--green" />
          </div>
          <div>Would you rather</div>
        </div>
        <div className="logIn ">
          <div className="select__wrapper">
            <select value={this.state.value} onChange={this.handleChange}>
              <option value=""> Please choose a user </option>
              {this.users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>
          <div className="button__cta__wrapper--right">
            <button
              className="button__cta button__cta--static"
              onClick={this.handleSubmit}
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    );
  }
}



export default connect()(Login);
// select
// cta
// private route comp
