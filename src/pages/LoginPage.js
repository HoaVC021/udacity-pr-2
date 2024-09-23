import React from "react";

import { Page } from "../components";
import { Login } from "../features/auth";

const LoginPage = () => {
  return (
    <Page title='Login'>
      <Login />
    </Page>
  );
};

export default LoginPage;
