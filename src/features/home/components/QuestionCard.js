import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardContent, CardActions, Typography, Divider } from '@mui/material';

import { fDateTime } from '../../../utils/formatTime';

const QuestionCard = ({ question }) => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(`/questions/${question.id}`);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Card variant='outlined'>
      <CardContent>
        <Typography textAlign='center' variant='h6'>{question.author}</Typography>
        <Typography textAlign='center' variant='body2' color='text.secondary' sx={{ my: 1 }}>
          {fDateTime(question.timestamp)}
        </Typography>
      </CardContent>
      <Divider />
      <CardActions>
        <Button onClick={handleClick} fullWidth variant='outlined' sx={{ mx: 1 }}>Show</Button>
      </CardActions>
    </Card>
  );
};

export default QuestionCard;
