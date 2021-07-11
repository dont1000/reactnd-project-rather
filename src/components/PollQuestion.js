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
            {!answered ? (
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

const mapToProp = ({ questions, users, authedUser },props) => {
  const { id } = props.match.params;
  const question = questions[id];
  const author = users[question.author];
  
  const all = question.optionOne.votes.concat(question.optionTwo.votes)
  const answered = all.includes(authedUser.userName);
 

  return {
    author,
    answered,
    question, 
    id
  };
};
export default connect(mapToProp)(PollQuestion);