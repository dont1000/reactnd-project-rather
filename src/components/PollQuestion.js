import React, { Component } from "react";
import { connect } from "react-redux";
import PollCard from "./PollCard"
import Question from "./Question";
import Result from "./Result";
import { Redirect} from "react-router-dom";
import AskAQuestion from "./AskAQuestion";


class PollQuestion extends Component {
  render() {
 
    const { author, answered, question, authedUser } = this.props;
    if (!question) {
      return <Redirect to="/404" />;
    }
    return (
      <div>
        <AskAQuestion />
        <PollCard author={author} answered={answered}>
          <div>
            {!answered ? (
              <Question question={question} />
            ) : (
              <Result question={question} user={authedUser} />
            )}
          </div>
        </PollCard>
      </div>
    );
  }
}

const mapToProp = ({ questions, users, authedUser },props) => {
  const { id } = props.match.params;
  let author = "";
  let all = 0;
  let answered = false;

  const question = questions[id] || false;
  if(question){
    author = users[question.author] ;
    all = question.optionOne.votes.concat(question.optionTwo.votes) 
    answered = all.includes(authedUser.userName) 
  }

  return {
    author,
    answered,
    question, 
    authedUser,
  };
};
export default connect(mapToProp)(PollQuestion);