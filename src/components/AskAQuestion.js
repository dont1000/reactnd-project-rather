import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { handleSaveYourQuestion } from "../actions/questions";
import "./AskAQuestion.scss";

class AskAQuestion extends Component {
  state = { 
        optionTwoText:"",
        optionOneText: "", 
        showDialog: false
     };
  onSubmit = (event) => {
    event.preventDefault();
    const { dispatch } = this.props;
    if (this.state.optionOneText === "" || this.state.optionTwoText==="") return;
    dispatch(
        handleSaveYourQuestion(
          {
            optionOneText: this.state.optionOneText,
            optionTwoText: this.state.optionTwoText,
          },
          () => {
            this.toggleDialog();
            this.setState({
              optionTwoText: "",
              optionOneText: "",
            });
          }
        )
      );
  };
  onChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.id]: event.target.value,
    });
  };

  toggleDialog = () => {
    console.log("toggle");
    this.setState({
      ...this.state,
      showDialog: !this.state.showDialog,
    });
  };

  render() {
    const { autheUser } = this.props;
    return (
      <Fragment>
        {autheUser && (
          <div className="ask">
            <div className="ask__header">
              <div
                className={`ask__add ${
                  this.state.showDialog ? "ask__add--close" : ""
                }`}
                onClick={this.toggleDialog}
              >+
              </div>
            </div>
            <form
              className={`ask__form ${
                this.state.showDialog ? "ask__form--show" : ""
              }`}
              onSubmit={this.onSubmit}
            >
            <legend>Create a new Question</legend>
            <span class="ask_subline">Would you rather...</span>
              <input
                type="text"
                id="optionOneText"
                placeholder="Enter Option One Text here"
                value={this.state.optionOneText}
                onChange={this.onChange}
              />
              <div class="ask__or">OR</div>
              <input
                type="text"
                id="optionTwoText"
                placeholder="Enter Option Two Text here"
                value={this.state.optionTwoText}
                onChange={this.onChange}
              />

              <button
                className="button__cta button__cta--staticCenter"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </Fragment>
    );
  }
}
function mapToProp({authedUser, users}) {
  const autheUser = users[authedUser.userName];
  return { autheUser};
}
export default connect(mapToProp)(AskAQuestion)
