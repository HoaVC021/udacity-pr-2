import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";

import Header from "./header";
import Footer from "./footer";
import { Loading } from "../../components";
import { useSelector } from "react-redux";

const RootStyle = styled("div")({
  minHeight: "100%",
  overflow: "hidden",
  position: "relative",
});

export default function Layout() {
  const { user } = useSelector(state => state.users);

  return (
    <RootStyle>
      <Header user={user} />
      <Container maxWidth="lg" sx={{ mt: 8, mb: 16 }}>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </Container>
      <Footer />
    </RootStyle>
  );
}
