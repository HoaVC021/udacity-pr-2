import React, { useState } from "react";
import { alpha } from "@mui/material/styles";
import {
  IconButton,
  Avatar,
  Button,
  Stack,
  Divider,
  Box,
  MenuItem,
  Popover,
  Typography,
  Link,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import PATHS from "../../../constants/paths";
import { useDispatch } from "react-redux";
import { logout } from "../../../actions/users";

const AccountPopover = ({ user, menuOptions }) => {
  const [open, setOpen] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleLogoutClick = () => {
    dispatch(logout());
    setOpen(null);
    navigate(PATHS.HOME);
  };

  return (
    <>
      <Stack onClick={handleOpen} direction="row" spacing={1} sx={{ alignItems: "center", cursor: "pointer" }}>
        <IconButton
          sx={{
            p: 0,
            ...(open && {
              "&:before": {
                zIndex: 1,
                content: "''",
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                position: "absolute",
                bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
              },
            }),
          }}
        >
          <Avatar src={user?.avatarURL} />
        </IconButton>
        <Typography variant="subtitle1" color="text.primary">
          {user?.name}
        </Typography>
        <Button onClick={handleLogoutClick}>
          Logout
        </Button>
      </Stack>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1.5,
            ml: 0.75,
            width: 180,
            "& .MuiMenuItem-root": {
              typography: "body2",
              borderRadius: 0.75,
            },
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            {user?.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
            {user?.email}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: "dashed" }} />

        <Stack sx={{ p: 1 }}>
          {menuOptions.map((option) => (
            <Link
              key={option.label}
              component={RouterLink}
              to={option.path}
              underline="none"
              color="text.primary"
              onClick={handleClose}
            >
              <MenuItem>{option.label}</MenuItem>
            </Link>
          ))}
        </Stack>

        <Divider sx={{ borderStyle: "dashed" }} />

        <MenuItem onClick={handleLogoutClick} sx={{ m: 1 }}>
          Logout
        </MenuItem>
      </Popover>
    </>
  );
};

export default AccountPopover;
