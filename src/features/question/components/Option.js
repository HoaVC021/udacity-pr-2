import React, { useCallback } from 'react';
import { Box, Button, Typography } from '@mui/material';

const Option = ({ optionName, answered, selectedOption, option, totalVotes, onVote }) => {

  const handleClick = useCallback(() => {
    onVote(optionName);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      sx={{
        borderRadius: (theme) => `${theme.spacing(1)}`,
        border: (theme) => `1px solid ${optionName === selectedOption && answered ? theme.palette.success.main : theme.palette.grey[300]}`,
      }}
    >
      <Box sx={{ my: 2, width: '100%' }}>
        <Typography variant='body1' textAlign='center'>{option.text}</Typography>
        {answered && (
          <>
            <Typography variant='body2' textAlign='center'>
              {option.votes.length} votes
            </Typography>
            <Typography variant='body2' textAlign='center'>
              {((option.votes.length / totalVotes) * 100).toFixed(2)}% votes
            </Typography>
          </>
        )}
      </Box>
      <Button onClick={handleClick} fullWidth variant='contained' color='primary' size='large' disabled={answered}>
        {answered ? 'Voted' : 'Click'}
      </Button>
    </Box>
  );
};

export default Option;
