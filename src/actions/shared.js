
import { getInitialData, saveQuestionAnswer, saveQuestion } from "../utils/api";
import { receiveQuestions, addUserToQuestion,saveYourQuestion } from "../actions/questions";
import {
  receiveUsers,
  addQuestionToUser,
  saveYourQuestionUser,
} from "../actions/users";


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



export function handleSaveYourQuestion({optionOneText, optionTwoText}, callback) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    const author = authedUser.userName
    return saveQuestion({ optionOneText, optionTwoText, author }).then(
      (question) => {
        dispatch(saveYourQuestion(question));
        dispatch(saveYourQuestionUser(question));
        callback();
      }
    );
  };
}
