import React, { Component } from "react";
import { connect } from "react-redux";
import { addAuthedUser } from "../actions/authedUser";


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
    console.log("props: ", this.props);
    this.setState({ option: event.target.value });
  }

  handleSubmit= (event) => {
    const { dispatch } = this.props;
    event.preventDefault();
    console.log("handle siubmit")
    dispatch(addAuthedUser(this.state.option));
  }

  render() {
    return (
      <div>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="">--Please choose an option--</option>
          {this.users.map((user) => (
            <option value={user.id}>{user.name}</option>
          ))}
        </select>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

const maptoProp = ({authedUser}) => {
return authedUser;
}

export default connect(maptoProp)(Login);
// select
// cta
// private route comp
