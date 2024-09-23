import React, { useEffect, useMemo } from "react";
import {
  Box,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { FormProvider, RHFSelect } from "../../../../components/hook-form";
import Loading from "../../../../components/loading";

const LoginForm = ({ submit, status, users }) => {
  const userData = useMemo(() => {
    if (!users) {
      return [];
    }

    return Object.keys(users).map(id => ({ id, name: users[id].name }));
  }, [users]);

  const LoginSchema = Yup.object().shape({
    user: Yup.string()
      .required("User is required.")
  });

  const defaultValues = {
    user: ""
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const { handleSubmit, setValue } = methods;

  const onSubmit = (data) => {
    submit(data.user);
  };

  useEffect(() => {
    if (userData.length > 0) {
      setValue("user", userData[0].id);
    }
  }, [setValue, userData]);

  if (userData.length === 0) {
    return <Loading />;
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="body1" align="center" sx={{ my: 2 }}>
        Select a user to log in
      </Typography>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <RHFSelect id="user" name="user" label="User" data={userData} />
        <Box sx={{ my: 3 }}>
          <LoadingButton
            type="submit"
            fullWidth
            variant="contained"
            loading={status}
          >
            Log in
          </LoadingButton>
        </Box>
      </FormProvider>
    </Box>
  );
};

export default LoginForm;
