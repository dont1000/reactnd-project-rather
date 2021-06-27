import { ADD_AUTHED_USER } from "../actions/authedUser";

export const authedUser = (state = {}, action) => {
  switch (action.type) {
    case ADD_AUTHED_USER:
      return {
        ...state,
        userName: action.userName
      };

    default:
      return state;
  }
};