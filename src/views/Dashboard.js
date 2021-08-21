import React, { Component } from "react";
import { connect } from "react-redux";
import PollTeaser from "../components/PollTeaser";
import AskAQuestion from "./AskAQuestion";

import "./Dashboard.scss";

class Dashboard extends Component {
  state = { activeTab: "1" };

  toggleNav = (event) => {
    const id = event.target.getAttribute("data-tab");
    this.setState(() => ({
      activeTab: id,
    }));
  };

  render() {
    const { answeredIds, unanswerdIds } = this.props;
    return (
      <div>
        <AskAQuestion />
        <div>
          <div className="tabnav">
            <div
              className="tabnav__tab"
              data-tab="1"
              onClick={(event) => this.toggleNav(event)}
            >
              <div
                className={`${
                  this.state.activeTab === "1" ? "tabnav__tabMarker" : ""
                }`}
              />
              Unswered
            </div>
            <div
              className="tabnav__tab"
              data-tab="2"
              onClick={(event) => this.toggleNav(event)}
            >
              <div
                className={`${
                  this.state.activeTab === "2" ? "tabnav__tabMarker" : ""
                }`}
              />
              Answered
            </div>
          </div>
          {this.state.activeTab === "1" &&
            unanswerdIds.map((pollId, id) => (
              <PollTeaser id={pollId} key={id} />
            ))}
          {this.state.activeTab === "2" &&
            answeredIds.map((pollId, id) => (
              <PollTeaser id={pollId} key={id} />
            ))}
        </div>
      </div>
    );
  }
}

function mapToProp({ questions, authedUser }) {

  const answeredIds = [];
  const unanswerdIds = [];

 const sortedQuestions=Object.values(questions).sort((a,b)=>{
    return b.timestamp - a.timestamp
 })
 
 sortedQuestions.forEach((question) => {
  question.optionOne.votes.includes(authedUser.userName) ||
  question.optionTwo.votes.includes(authedUser.userName)
    ? answeredIds.push(question.id)
    : unanswerdIds.push(question.id);
 })

  return {
    answeredIds,
    unanswerdIds,
  };
}

export default connect(mapToProp)(Dashboard);