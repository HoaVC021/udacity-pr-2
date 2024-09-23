import React, { useEffect, useMemo } from 'react';
import { Divider } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

import { QuestionsByCategory } from './components';
import { handleGetQuestions } from '../../actions/shared';

const Home = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.users);
  const questions = useSelector(state => state.questions);
  const sortedQuestions = useMemo(() => {
    return questions ? Object.values(questions).sort((a, b) => b.timestamp - a.timestamp) : [];
  }, [questions]);

  const answeredQuestions = useMemo(() => {
    if (!user) {
      return [];
    }

    return sortedQuestions.filter(question => question.optionOne.votes.includes(user.id) || question.optionTwo.votes.includes(user.id));
  }, [sortedQuestions, user]);

  const unansweredQuestions = useMemo(() => {
    if (!user) {
      return [];
    }

    return sortedQuestions.filter(question => !question.optionOne.votes.includes(user.id) && !question.optionTwo.votes.includes(user.id));
  }, [sortedQuestions, user]);

  useEffect(() => {
    if (!questions || Object.keys(questions).length === 0) {
      dispatch(handleGetQuestions());
    }
  }, [dispatch, questions]);

  console.log('questions', questions);

  return (
    <>
      <QuestionsByCategory title='New Questions' questions={unansweredQuestions} />
      <Divider />
      <QuestionsByCategory title='Done' questions={answeredQuestions} />
    </>
  );
};

export default Home;
