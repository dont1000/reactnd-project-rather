import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PollCard from "./PollCard"



class PollTeaser extends Component {
  render() {
    const { question, author, id } = this.props;
    return (
      <Link to={`/questions/${id}`} className="tweet">
        <PollCard author={author}>
          <div>
            <span className="head">Would you rather</span>
            <p className="question threeDots">{question.optionOne.text}</p>
            <button className="button__cta">View Poll</button>
          </div>
        </PollCard>
      </Link>
    );
  }
}

const mapToProp = ({ questions, users }, {id}) => {

  const question = questions[id];
  const author = users[question.author];
  return {
    question,
    author,
    id
  };
};
export default connect(mapToProp)(PollTeaser);