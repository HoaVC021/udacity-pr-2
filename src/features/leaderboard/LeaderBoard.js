import React, { useMemo } from 'react';
import { Box, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Stack } from '@mui/material';
import { useSelector } from 'react-redux';

const LeaderBoard = () => {
  const { users } = useSelector(state =>  state.users);

  const userData = useMemo(() => {
    if (!users) {
      return [];
    }
    
    return Object.values(users).map(user => {
      const answered = Object.keys(user.answers).length;
      const created = user.questions.length;
      return {
        ...user,
        answered,
        created,
        total: answered + created
      };
    }).sort((a, b) => a.total > b.total);
  }, [users]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Users</TableCell>
            <TableCell align="left">Answered</TableCell>
            <TableCell align="left">Created</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userData.map((user) => (
            <TableRow
              key={user.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Stack spacing={1} direction="row" sx={{ alignItems: 'center' }}>
                  <Box component="img" src={user.avatarURL} sx={{ width: 50, height: 50, borderRadius: '50%' }} />
                  <Stack spacing={0.5} direction="column">
                    <span>{user.name}</span>
                    <span>{user.id}</span>
                  </Stack>
                </Stack>
              </TableCell>
              <TableCell align="left">{user.answered}</TableCell>
              <TableCell align="left">{user.created}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LeaderBoard;
