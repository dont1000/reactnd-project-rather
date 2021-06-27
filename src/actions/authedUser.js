export const ADD_AUTHED_USER = "ADD_AUTHED_USER";

export const addAuthedUser = (userName) => {
  console.log("action ", userName)
    return {
      type: ADD_AUTHED_USER,
      userName
    };
    
}
