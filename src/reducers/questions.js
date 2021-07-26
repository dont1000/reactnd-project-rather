import {RECEIVE_QUESTIONS} from '../actions/questions'
import { ADD_USER_TO_QUESTION, SAVE_QUESTION } from "../actions/questions";

export const questions = ( state = {}, action) =>{
    switch (action.type) {
      case RECEIVE_QUESTIONS:
        return {
          ...state,
          ...action.questions,
        };

      case ADD_USER_TO_QUESTION:
      
        return {
          ...state,
          [action.qid]: {
            ...state[action.qid],
            [action.answer]: {
              text: state[action.qid][action.answer].text,
              votes: [
                ...state[action.qid][action.answer].votes,
                action.authedUser,
              ],
            },
          },
        };
      case SAVE_QUESTION:
        return{
          ...state,
          [action.question.id]: action.question,
        
        };
      default:
        return state;
    }

}