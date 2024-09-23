import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { QuestionForm } from  './components';
import { handleAddQuestion } from '../../actions/questions';
import { useNavigate } from 'react-router-dom';
import PATHS from '../../constants/paths';

const CreateQuestionForm = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state) => state.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (data) => {
    setLoading(true);
    await dispatch(handleAddQuestion({ ...data, author: user.id }));
    setLoading(false);
    navigate(PATHS.HOME);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h4" textAlign="center" sx={{ my: 2 }}>
        Would You Rather
      </Typography>
      <Typography variant="body1" textAlign="center" sx={{ mb: 2 }}>
        Create Your Own Poll
      </Typography>
      <QuestionForm status={loading} submit={handleSubmit} />
    </Box>
  );
};

export default CreateQuestionForm;
