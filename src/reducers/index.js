import { combineReducers } from "redux";
import {questions} from '../reducers/questions';
import {users} from '../reducers/users';
import { authedUser } from '../reducers/authedUser';

export default combineReducers({
  questions,
  users,
  authedUser,
});
