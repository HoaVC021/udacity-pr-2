import React from "react";
import { Box, Container, Link } from "@mui/material";
import { Link as RouterLink, Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <Box sx={{ minHeight: "100%", overflow: "hidden" }}>
      <Container maxWidth="xs" sx={{ minHeight: "100%" }}>
        <Box
          sx={{
            mt: 8,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Link
            component={RouterLink}
            to="/"
            underline="none"
            color="text.primary"
          >
          </Link>
        </Box>
        <Outlet />
      </Container>
    </Box>
  );
};

export default AuthLayout;
