import { _getUsers, _getQuestions } from '../_DATA';

export const RECEIVE_USER_DATA = 'RECEIVE_USER_DATA';
export const RECEIVE_QUESTION_DATA = 'RECEIVE_QUESTION_DATA';

const receiveUserData = (users) => ({
  type: RECEIVE_USER_DATA,
  users,
});

const receiveQuestionData = (questions) => ({
  type: RECEIVE_QUESTION_DATA,
  questions,
});

export const handleGetUsers = () => async (dispatch) => {
  const users = await _getUsers();
  dispatch(receiveUserData(users));
};

export const handleGetQuestions = () => async (dispatch) => {
  const questions = await _getQuestions();
  dispatch(receiveQuestionData(questions));
};
