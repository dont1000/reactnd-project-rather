import {
  RECEIVE_USERS,
  ADD_QUESTION_TO_USER,
  SAVE_YOUR_QUESTION_USER,
} from "../actions/users";


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

      case SAVE_YOUR_QUESTION_USER:
        const {author, id} = action
        return {
          ...state,
          [author]: {
            ...state[author],
            questions: [ ...state[author].questions, id ]
          }
        };

      default:
        return state;
    }
}