import { RECEIVE_USER_DATA } from "../actions/shared";
import { LOGIN, LOGOUT } from "../actions/users";

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
