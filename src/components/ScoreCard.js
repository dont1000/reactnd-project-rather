import PollCard from "./PollCard";
import "./ScoreCard.scss";
const ScoreCard = ({ user, color }) => {
  const questionsCount = user.questions.length;
  const answersCount = Object.keys(user.answers).length;
  return (
    <div>
      <PollCard author={user} color={`${color}`} head={user.name}>
        <div>
          <span className="head">Score</span>
          <div>Answered Questions:{answersCount} </div>
          <div>Created Questions: {questionsCount}</div>

          <div className={`scorecard__count ${color}`}>
            <span>{questionsCount + answersCount} </span>
            <span className="scorecard__points">points</span>
          </div>
        </div>
      </PollCard>
    </div>
  );
};

export default ScoreCard;
