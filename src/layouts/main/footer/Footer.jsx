import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Box, Container, Grid, Link, Stack, Typography } from "@mui/material";

const StyledTextLogo = styled(Typography)(({ theme }) => ({
  background: "linear-gradient(.25turn, #7F0E0E, #0F0D73)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}));

const ABOUT_LINKS = [
  { label: "About us", path: "/" },
  { label: "Trade-in", path: "/" },
  { label: "Student offer", path: "/" },
  { label: "Military program", path: "/" },
  { label: "We're hiring!", path: "/" },
];

const HELP_LINKS = [
  { label: "Shipping & Returns", path: "/" },
  { label: "Contact Us", path: "/" },
  { label: "FAQs", path: "/" },
  { label: "Protection plan", path: "/" },
];

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: 240,
        backgroundColor: (theme) => theme.palette.background.default,
        position: "absolute",
        top: `calc(100% - 240px)`,
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={8} direction="row">
          <Box sx={{ pt: 2 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Stack spacing={-1.5}>
                <StyledTextLogo variant="h6" component="h1">
                  EMP
                </StyledTextLogo>
                <Typography variant="h6" component="h1">
                  2024
                </Typography>
              </Stack>
            </Box>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <Typography variant="h6" color="text.primary" sx={{ mb: 1 }}>
                About
              </Typography>
              <Stack spacing={0.5}>
                {ABOUT_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    underline="none"
                    component={RouterLink}
                    to={link.path}
                  >
                    <Typography variant="subtitle2" color="text.secondary">
                      {link.label}
                    </Typography>
                  </Link>
                ))}
              </Stack>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant="h6" color="text.primary" sx={{ mb: 1 }}>
                Help
              </Typography>
              <Stack spacing={0.5}>
                {HELP_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    underline="none"
                    component={RouterLink}
                    to={link.path}
                  >
                    <Typography variant="subtitle2" color="text.secondary">
                      {link.label}
                    </Typography>
                  </Link>
                ))}
              </Stack>
            </Grid>

          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
