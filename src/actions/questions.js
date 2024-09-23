import { _saveQuestion, _saveQuestionAnswer } from "../_DATA";

export const ADD_QUESTION = 'ADD_QUESTION';
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER';

const addQuestion = (question) => ({
  type: ADD_QUESTION,
  question,
});

const saveQuestionAnswer = (authedUser, qid, answer) => ({
  type: SAVE_QUESTION_ANSWER,
  authedUser,
  qid,
  answer,
});

export const handleAddQuestion = (question) => async (dispatch) => {
  try {
    const addedQuestion = await _saveQuestion(question);
    dispatch(addQuestion(addedQuestion));
  } catch (error) {
    console.log('Error adding question: ', error);
  }
};

export const handleSaveQuestionAnswer = (authedUser, qid, answer) => async (dispatch) => {
  try {
    const saved = await _saveQuestionAnswer({ authedUser, qid, answer });

    if (saved) {
      dispatch(saveQuestionAnswer(authedUser, qid, answer));
    }
  } catch (error) {
    console.log('Error saving question answer: ', error);
  }
};
