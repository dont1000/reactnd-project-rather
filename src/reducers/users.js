import { RECEIVE_USERS, ADD_QUESTION_TO_USER } from "../actions/users";


export const users = (state = {}, action) => {
    switch (action.type) {
      case RECEIVE_USERS:
        return {
          ...state,
          ...action.users,
        };

      case ADD_QUESTION_TO_USER:
        const user = state[action.authedUser]
        const answers = { ...user.answers, [action.qid]:action.answer }
        return {
          ...state,
          [action.authedUser]: {
            ...state[action.authedUser],
            answers
          }
        };

      default:
        return state;
    }
}