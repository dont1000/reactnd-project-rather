import React, { Component } from "react";
import { connect } from "react-redux";
import { handleSaveYourQuestion } from "../actions/questions";

class AskAQuestion extends Component {
  state = { };
  onSubmit = (event) => {
      event.preventDefault();
    const { dispatch } = this.props;
    dispatch(
      handleSaveYourQuestion({
        optionOneText: this.state.optionOneText,
        optionTwoText: this.state.optionTwoText,
      })
    );
  };
  onChange = (event) => {
     this.setState({
         ...this.state,
          [event.target.id]: event.target.value
    });

  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            id="optionOneText"
            value={this.state.optionOneText}
            onChange={this.onChange}
          />
          <input
            type="text"
            id="optionTwoText"
            value={this.state.optionTwoText}
            onChange={this.onChange}
          />

          <button className="button__cta" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(AskAQuestion)