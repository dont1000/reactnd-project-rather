
function Result ({question}){
        const one = question.optionOne
        const two = question.optionTwo
        const allvotes = one.votes.length + two.votes.length
        return (
          <div>
              <div>{one.text}</div>
              <div>{one.votes.length} of {allvotes}</div>
                <div>{two.text}</div>
              <div>{two.votes.length} of {allvotes}</div>
          </div>
        );
    
}


export default Result
