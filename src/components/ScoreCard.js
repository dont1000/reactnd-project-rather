
const ScoreCard = ({user}) => {
         const questionsCount = user.questions.length;
         const answersCount = Object.keys(user.answers).length;

    return (
      <div>
        <div>name: {user.id}</div>
        <div>questions: {questionsCount}</div>
        <div>answers:{answersCount} </div>
        <div>Score: {questionsCount + answersCount}</div>
      </div>
    );

}


export default ScoreCard;
