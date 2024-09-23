import React, { useState, useEffect, useCallback } from 'react';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { LoginForm } from './components';
import { AuthFooter } from '../components';
import PATHS from '../../../constants/paths';
import { login } from '../../../actions/users';
import { handleGetUsers } from '../../../actions/shared';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { isAuthenticated, users } = useSelector(state => state.users);

  const submit = useCallback((data) => {
    setLoading(true);
    dispatch(login(data));
    setLoading(false);
  }, [dispatch]);

  useEffect(() => {
    if (isAuthenticated) {
      navigate(PATHS.HOME);
    }
  }, [navigate, isAuthenticated]);

  useEffect(() => {
    if (!users) {
      dispatch(handleGetUsers());
    }
  }, [dispatch, users]);

  return (
    <>
      <Typography variant='h3' component='h1' align='center'>
        Log in to Employee Polls
      </Typography>
      <LoginForm submit={submit} status={loading} users={users} />
      <AuthFooter action='sign in to' />
    </>
  );
};

export default Login;
