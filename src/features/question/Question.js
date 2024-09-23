import React, { useMemo, useCallback, useState, useEffect } from 'react';
import { Avatar, Box, Grid, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Option } from './components';
import { handleSaveQuestionAnswer } from '../../actions/questions';

const Question = () => {
  const { id } = useParams();
  const question = useSelector(state => state.questions[id]);
  const { users, user } = useSelector(state => state.users);
  const dispatch = useDispatch();

  const author = useMemo(() => {
    if (question) {
      return users[question.author];
    }

    return null;
  }, [users, question]);

  const answered = useMemo(() => {
    if (question && user) {
      return question.optionOne.votes.includes(user.id) || question.optionTwo.votes.includes(user.id);
    }

    return false;
  }, [question, user]);

  const selectedOption = useMemo(() => {
    if (question && user) {
      if (question.optionOne.votes.includes(user.id)) {
        return 'optionOne';
      }

      if (question.optionTwo.votes.includes(user.id)) {
        return 'optionTwo';
      }
    }

    return null;
  }, [question, user]);

  const totalVotes = useMemo(() => {
    if (question) {
      return question.optionOne.votes.length + question.optionTwo.votes.length;
    }

    return 0;
  }, [question]);

  const handleVote = useCallback((optionName) => {
    dispatch(handleSaveQuestionAnswer(user.id, question.id, optionName ));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [question, user]);

  return (
    <Box sx={{ width: '100%', mt: 6, mb: 4 }}>
      {author && (
        <>
          <Typography textAlign='center' variant='h4' sx={{ mb: 2 }}>Poll by {author.name}</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Avatar src={author.avatarURL} alt={author.name} sx={{ width: 140, height: 140 }} />
          </Box>
        </>
      )}
      {question && (
        <Box sx={{ width: '100%' }}>
          <Typography variant='h4' textAlign='center' sx={{ my: 2 }}>Would you rather</Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Option
                optionName={'optionOne'}
                answered={answered}
                selectedOption={selectedOption}
                option={question.optionOne}
                totalVotes={totalVotes}
                onVote={handleVote}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Option
                optionName={'optionTwo'}
                answered={answered}
                selectedOption={selectedOption}
                option={question.optionTwo}
                totalVotes={totalVotes}
                onVote={handleVote}
              />
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default Question;
