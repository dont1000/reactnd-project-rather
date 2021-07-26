
import { getInitialData, saveQuestionAnswer } from "../utils/api";
import { receiveQuestions, addUserToQuestion } from "../actions/questions";
import { receiveUsers, addQuestionToUser } from "../actions/users";


export function handleInitialData(){
    return (dispatch) => {
        return getInitialData().then(
            ({users, questions}) =>{
                dispatch(receiveUsers(users));
                dispatch(receiveQuestions(questions)); 
            }
        )
    }
}

export function handleQuestionAnswer(answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    const answerData = { authedUser: authedUser.userName, ...answer };
    return saveQuestionAnswer(answerData).then((e) => {
          dispatch(addUserToQuestion(answerData));
          dispatch(addQuestionToUser(answerData));
    });
  };
}
