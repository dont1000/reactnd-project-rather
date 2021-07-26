
import { saveQuestion } from "../utils/api";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_USER_TO_QUESTION = "ADD_USER_TO_QUESTION";
export const SAVE_QUESTION ="SAVE_QUESTION"

export function receiveQuestions(questions) {
    return{
        type: RECEIVE_QUESTIONS,
        questions
    }  
}


export function addUserToQuestion({ qid, answer, authedUser }) {
  return {
    type: ADD_USER_TO_QUESTION,
    qid,
    answer,
    authedUser,
  };
}

export function saveYourQuestion(question) {
  return {
    type: SAVE_QUESTION,
    question
  }
}

export function handleSaveYourQuestion(question) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    const answerData = { author: authedUser.userName, ...question };
    return saveQuestion(answerData).then((e) => {
      console.log("----------", e)
      dispatch(saveYourQuestion(e));
    });
  };
}