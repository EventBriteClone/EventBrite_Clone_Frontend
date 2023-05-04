import React, { useEffect, useState, useContext } from "react";
// import styles from "./DrawerTicket.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

function ErrorMessage({ showAlertMessage }) {
  const [open, setOpen] = React.useState(true);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <>
      <Stack spacing={1} sx={{ width: "100%" }}>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <MuiAlert
            onClose={handleClose}
            severity="error"
            sx={{ width: "100%" }}
          >
            Please fill out all of the required fields correctly!
          </MuiAlert>
        </Snackbar>
      </Stack>
    </>
  );
}
ErrorMessage.propTypes = {
  showAlertMessage: PropTypes.func,
};
export default ErrorMessage;
