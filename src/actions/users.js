export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

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

