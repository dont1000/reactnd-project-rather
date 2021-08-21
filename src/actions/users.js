export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_QUESTION_TO_USER = "ADD_QUESTION_TO_USER";
export const SAVE_YOUR_QUESTION_USER = "SAVE_YOUR_QUESTION_USER";
;

export function receiveUsers(users){
    return {
        type: RECEIVE_USERS,
        users,
    };
}

export function addQuestionToUser({ qid, answer, authedUser }) {
  return {
    type: ADD_QUESTION_TO_USER,
    qid,
    answer,
    authedUser,
  };
}

export function saveYourQuestionUser({id, author}) {
  return {
    type: SAVE_YOUR_QUESTION_USER,
    id,
    author
  };
}
