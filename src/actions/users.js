export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const UPDATE_USER_VOTED = 'UPDATE_USER_VOTED';
export const USER_ADD_QUESTION = "USER_ADD_QUESTION";

export const login = (userId) => {
  return {
    type: LOGIN,
    userId
  };
};

export const logout = () => {
  return {
    type: LOGOUT
  };
};

export const updateUserVoted = (authedUser, qid, answer)=>{
  return {
    type: UPDATE_USER_VOTED,
    authedUser,
    qid,
    answer
  }
}

export const userAddQuestion = (authedUser, question) => {
  return {
      type: USER_ADD_QUESTION,
      authedUser,
      question,
  };
}