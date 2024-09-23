import React from 'react';
import { Box, Stack } from '@mui/material';
import { LoadingButton } from "@mui/lab";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { RHFTextField, FormProvider } from '../../../components/hook-form';

const QuestionForm = ({ submit, status }) => {
  const QuestionSchema = Yup.object().shape({
    optionOne: Yup.string()
      .required("First option is required."),
    optionTwo: Yup.string()
      .required("Second option is required.")
  });

  const defaultValues = {
    optionOne: "",
    optionTwo: ""
  };

  const methods = useForm({
    resolver: yupResolver(QuestionSchema),
    defaultValues,
  });

  const { handleSubmit, reset } = methods;

  const onSubmit = (data) => {
    submit({ optionOneText: data.optionOne, optionTwoText: data.optionTwo });
    reset();
  };

  return (
    <Box sx={{ width: "100%" }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <RHFTextField name="optionOne" label="First Option" />
          <RHFTextField name="optionTwo" label="Second Option" />
          <Box sx={{ my: 3 }}>
            <LoadingButton
              type="submit"
              fullWidth
              variant="contained"
              loading={status}
            >
              Submit
            </LoadingButton>
          </Box>
        </Stack>
      </FormProvider>
    </Box>
  )
}

export default QuestionForm
