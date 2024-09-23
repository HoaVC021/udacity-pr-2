import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

import QuestionCard from './QuestionCard';

const QuestionsByCategory = ({ title, questions }) => {
  return (
    <Box sx={{ width: '100%', my: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2 }}>
        <Typography variant='h4'>{title}</Typography>
      </Box>
      <Grid container spacing={2}>
        {questions.map((question) => (
          <Grid item key={question.id} xs={12} sm={6} md={4}>
            <QuestionCard question={question} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default QuestionsByCategory;
