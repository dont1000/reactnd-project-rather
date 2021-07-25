import React, { Component } from "react";
import { connect } from "react-redux";
import PollTeaser from "../components/PollTeaser";
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
            Answered
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
            Unanswered
          </div>
        </div>
        {this.state.activeTab === "1" &&
          answeredIds.map((pollId) => <PollTeaser id={pollId} />)}
        {this.state.activeTab === "2" &&
          unanswerdIds.map((pollId) => <PollTeaser id={pollId} />)}
      </div>
    );
  }
}

function mapToProp({ questions, authedUser }) {

  const answeredIds = [];
  const unanswerdIds = [];
 
  Object.keys(questions).forEach((q) => {
    questions[q].optionOne.votes.includes(authedUser.userName) ||
    questions[q].optionTwo.votes.includes(authedUser.userName)
      ? answeredIds.push(q)
      : unanswerdIds.push(q);
  });
  
  return {
    answeredIds,
    unanswerdIds,
  };
}

export default connect(mapToProp)(Dashboard);