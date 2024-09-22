import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";

import Header from "./header";
import Footer from "./footer";
import { Loading } from "../../components";

const RootStyle = styled("div")({
  minHeight: "100%",
  overflow: "hidden",
  position: "relative",
});

const USER = {
  firstName: "John",
  lastName: "Doe",
  email: "doe@gmail.com",
};

export default function Layout() {
  return (
    <RootStyle>
      <Header user={USER} />
      <Container maxWidth="lg" sx={{ mt: 8, mb: 16 }}>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </Container>
      <Footer />
    </RootStyle>
  );
}
