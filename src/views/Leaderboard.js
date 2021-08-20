import React, { Component } from "react";
import { connect } from "react-redux";
import ScoreCard from "../components/ScoreCard";
import AskAQuestion from "./AskAQuestion";


class Leaderboard extends Component {
  render() {
    const colors = ["gold", "silver", "bronze"];
    const { sortedUserList } = this.props;
    return (
      <div>
        <AskAQuestion />
        <div>
          {sortedUserList.map((user, id) => {
            return (
              <ScoreCard
                user={user}
                key={id}
                color={id < 3 ? colors[id] : "green"}
              ></ScoreCard>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapToProp = ({ users }) =>{
    const sortedUserList =  Object.keys(users).sort((a,b)=>{
        const aAll = (Object.keys(users[a].answers).length + Object.keys(users[a].questions).length);
        const bAll =(Object.keys(users[b].answers).length + Object.keys(users[b].questions).length);
        return bAll - aAll;
    }).map((user)=>{return users[user]})  
  return {
    sortedUserList
  };
}

export default connect(mapToProp)(Leaderboard);
