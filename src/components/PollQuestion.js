import React, { Component } from "react";
import { connect } from "react-redux";
import PollCard from "./PollCard"
import Question from "./Question";
import Result from "./Result";


class PollQuestion extends Component {
  render() {
    const { author, answered, question } = this.props;
    return (
      <div>
        <PollCard author={author} answered={answered}>
          <div>
            {answered ? (
              <Question question={question} />
            ) : (
              <Result question={question} />
            )}
          </div>
        </PollCard>
      </div>
    );
  }
}

const mapToProp = ({ questions, users }) => {
  const authedUser = "johndoe";
  const id = "vthrdm985a262al8qx3do" // get from param;
  const question = questions[id];
  const author = users[question.author];
  
  const all = question.optionOne.votes.concat(question.optionTwo.votes)
  const answered = all.includes(authedUser);


  return {
    author,
    answered,
    question, 
  };
};
export default connect(mapToProp)(PollQuestion);