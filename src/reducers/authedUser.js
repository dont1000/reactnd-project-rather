import { ADD_AUTHED_USER } from "../actions/authedUser";
import { REMOVE_AUTHED_USER } from "../actions/authedUser";

export const authedUser = (state = false, action) => {
  switch (action.type) {
    case ADD_AUTHED_USER:
      return {
        ...state,
        userName: action.userName,
      };
    case REMOVE_AUTHED_USER:
      return {
        ...state,
        userName: "",
      };

    default:
      return state;
  }
};