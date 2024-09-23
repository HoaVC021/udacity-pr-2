import React from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
// @mui
import { styled, alpha } from "@mui/material/styles";
import {
  Box,
  Button,
  Stack,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Link,
  Container,
} from "@mui/material";
// utils
// components
//
import { AccountPopover } from "../../common/header";
import PATHS from "../../../constants/paths";
// ----------------------------------------------------------------------

const HEADER_MOBILE = 64;

const StyledRoot = styled(AppBar)(({ theme }) => ({
  boxShadow: "none",
  width: `100%`,
  WebkitBackdropFilter: "blur(6px)",
  backdropFilter: "blur(6px)",
  backgroundColor: alpha(theme.palette.background.default, 0.5),
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  paddingLeft: "0px !important",
  paddingRight: "0px !important",
}));

const StyledTextLogo = styled(Typography)(({ theme }) => ({
  background: "linear-gradient(.25turn, #7F0E0E, #0F0D73)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}));

const StyledBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    display: "block",
  },
}));

// ----------------------------------------------------------------------

Header.propTypes = {
  onOpenNav: PropTypes.func,
};

const menuItems = [
  {
    name: "Home",
    path: PATHS.HOME,
  },
  {
    name: "Leaderboard",
    path: PATHS.LEADERBOARD
  },
  {
    name: "New",
    path: PATHS.ADD_QUESTION
  }
];

const MENU_OPTIONS = [
  {
    label: "Home",
    icon: "eva:home-fill",
    path: PATHS.HOME,
  },
  {
    label: "Profile",
    icon: "eva:person-fill",
    path: PATHS.USER_ACCOUNT_PROFILE,
  }
];

export default function Header({ user, onOpenNav }) {
  return (
    <StyledRoot>
      <Container maxWidth="lg">
        <Box sx={{ width: "100%" }}>
          <StyledToolbar>
            <IconButton
              onClick={onOpenNav}
              sx={{
                mr: 1,
                color: "text.primary",
                display: { lg: "none" },
              }}
            >
            </IconButton>

            <StyledBox sx={{ mr: 2 }}>
              <Link
                component={RouterLink}
                to="/"
                underline="none"
                sx={{ display: "inline-flex", alginItems: "center" }}
              >
                <StyledTextLogo variant="h3" component="h1">
                  EMP
                </StyledTextLogo>
              </Link>
            </StyledBox>

            <Stack direction="row" spacing={1} sx={{ ml: 2, display: "block" }}>
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  component={RouterLink}
                  to={item.path}
                  underline="none"
                  color="text.primary"
                >
                  <Button>{item.name}</Button>
                </Link>
              ))}
            </Stack>

            <Box sx={{ flexGrow: 1 }} />

            <Stack
              direction="row"
              alignItems="center"
              spacing={{
                xs: 0.5,
                sm: 1,
              }}
            >
              {user ? (
                <AccountPopover user={user} menuOptions={MENU_OPTIONS} />
              ) : (
                <Button
                  LinkComponent={RouterLink}
                  to="/login"
                  variant="text"
                  color="primary"
                  sx={{
                    borderRadius: 2,
                  }}
                >
                  
                  &nbsp; Login
                </Button>
              )}
            </Stack>
          </StyledToolbar>
        </Box>
      </Container>
    </StyledRoot>
  );
}
