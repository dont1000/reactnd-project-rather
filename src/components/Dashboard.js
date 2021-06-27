import React, { Component } from "react";
import { connect } from "react-redux";
import PollQuestion from "../components/PollQuestion";

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
            className="tab"
            data-tab="1"
            onClick={(event) => this.toggleNav(event)}
          >
            answered
          </div>
          <div
            className="tab"
            data-tab="2"
            onClick={(event) => this.toggleNav(event)}
          >
            unanswered
          </div>
        </div>
        {this.state.activeTab === "1" &&
          answeredIds.map((pollId) => <PollQuestion id={pollId} />)}
        {this.state.activeTab === "2" &&
          unanswerdIds.map((pollId) => <PollQuestion id={pollId} />)}
      </div>
    );
  }
}

function mapToProp({questions}){
    const author = "johndoe";
    const answeredIds = [];
    const unanswerdIds = [];

    Object.keys(questions).forEach((q) => {
        questions[q].optionOne.votes.includes(author) ||
        questions[q].optionTwo.votes.includes(author)
          ? answeredIds.push(q)
          : unanswerdIds.push(q);
    })
    return {
        answeredIds,
        unanswerdIds
    }
}

export default connect(mapToProp)(Dashboard);