import React, { Component } from "react";
import { connect } from "react-redux";
import PollCard from "./PollCard"


class PollTeaser extends Component {
  render() {
    const { question, author } = this.props;
    return (
      <div>
        <PollCard author={author}>
          <div>
            <h3>Would you rather</h3>
            <p>{question.optionOne.text}</p>
            <button>View Poll</button>
          </div>
        </PollCard>
      </div>
    );
  }
}

const mapToProp = ({ questions, users }, {id}) => {

  const question = questions[id];
  const author = users[question.author];
  return {
    question,
    author,

  };
};
export default connect(mapToProp)(PollTeaser);