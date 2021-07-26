import ProgressBar from "./Progressbar";
function Result ({question, user}){
        const one = question.optionOne
        const two = question.optionTwo
        const allVotes = one.votes.length + two.votes.length
        const usersVote = one.votes.some((vote) => vote===user.userName) ? true : false;
         

        return (
          <div>
            <span className="head">Result</span>
            <ProgressBar
              result={one.votes.length}
              total={allVotes}
              width="362"
              hasMarker={usersVote}
            >
              {one.text}
            </ProgressBar>
            <ProgressBar
              result={two.votes.length}
              total={allVotes}
              width="362"
              hasMarker={!usersVote}
            >
              {two.text}
            </ProgressBar>
          </div>
        );
    
}


export default Result
