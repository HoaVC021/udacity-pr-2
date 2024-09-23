import { RECEIVE_USER_DATA } from "../actions/shared";
import { LOGIN, LOGOUT, UPDATE_USER_VOTED, USER_ADD_QUESTION } from "../actions/users";

const initialState = {
  users: null,
  isAuthenticated: false,
  user: null
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        user: state.users[action.userId]
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null
      };
      case USER_ADD_QUESTION:
        return {
          ...state,
          users: {
              ...state.users,
              [action.authedUser]:{
                ...state.users[action.authedUser],
                questions: [...state.users[action.authedUser].questions, action.question.id]
              }
          },
        };
    case UPDATE_USER_VOTED: 
    return {
      ...state,
          users: {
              ...state.users,
              [action.authedUser]:{
                ...state.users[action.authedUser],
                answers: {
                  ...state.users[action.authedUser].answers, 
                  [action.qid]: action.answer}
              }
          },
  };
    case RECEIVE_USER_DATA:
      return {
        ...state,
        users: action.users
      }
    default:
      return state;
  }
}

export default users;
