export const ADD_AUTHED_USER = "ADD_AUTHED_USER";
export const REMOVE_AUTHED_USER = "REMOVE_AUTHED_USER";
export const addAuthedUser = (userName) => {
    return {
      type: ADD_AUTHED_USER,
      userName
    };
    
}
export const removeAuthedUser = () => {
  return {
    type: REMOVE_AUTHED_USER,
  };
};
