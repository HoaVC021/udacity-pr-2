import { createSelector } from "reselect";

import { RECEIVE_QUESTION_DATA } from "../actions/shared";
import { ADD_QUESTION, SAVE_QUESTION_ANSWER } from "../actions/questions";

const questions = (state = {}, action) => {
  switch (action.type) {
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question
      };
    case SAVE_QUESTION_ANSWER:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: state[action.qid][action.answer].votes.concat([action.authedUser])
          }
        }
      };
    case RECEIVE_QUESTION_DATA:
      return { ...action.questions };
    default:
      return state;
  };
};

export const selectSortedQuestions = createSelector([state => state.questions], questions => {
  console.log('questions', questions);
  return Object.values(questions).sort((a, b) => b.timestamp - a.timestamp);
});

export const selectAnsweredQuestionsByUser = createSelector(
  selectSortedQuestions,
  (_, userId) => userId,
  (questions, userId) => {
    return Object.values(questions).filter(question => {
      return question.optionOne.votes.includes(userId) || question.optionTwo.votes.includes(userId);
    });
  });

export const selectUnansweredQuestionsByUser = createSelector(
  selectSortedQuestions,
  (_, userId) => userId,
  (questions, userId) => {
    return Object.values(questions).filter(question => {
      return !question.optionOne.votes.includes(userId) && !question.optionTwo.votes.includes(userId);
    });
  });

export default questions;
