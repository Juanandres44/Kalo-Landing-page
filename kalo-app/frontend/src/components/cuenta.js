import React, { useState } from "react";
import { withStyles, TextField, Grid } from "@material-ui/core";
import { ladyIcon, phoneIcon } from "./iconPaths";
const style = (theme) => {
  return {
    root: {
      padding: theme.spacing.unit * 3,
      height: "100%",
      maxWidth: 450,
      margin: "0 auto",
      "& input:disabled": { opacity: 0.5 }
    },
    icon: {
      fill: theme.palette.grey[500]
    }
  };
};

const Cuenta = ({ classes }) => {
  const [email, setEmail] = useState(() => {
    return localStorage.getItem("email") ?? "";
  });

  const [password, setPassword] = useState(localStorage.getItem("password") ?? "");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    localStorage.setItem("email", JSON.stringify(e.target.value));
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    localStorage.setItem("password", e.target.value);
  };

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid container direction="row" alignItems="center" alignContent="center">
        <Grid item xs={2}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className={classes.icon}
            width="30px"
            height="30px"
          >
            {ladyIcon}
          </svg>
        </Grid>
        <Grid item xs={10}>
          <TextField
            name="email"
            id="email"
            value={email}
            fullWidth
            margin="normal"
            label="Ingrese un email"
            variant="filled"
            onChange={handleEmailChange}
          />
        </Grid>
      </Grid>{" "}
      <Grid container direction="row" alignItems="center">
        <Grid item xs={2}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 463.009 463.009"
            className={classes.icon}
            width="24px"
            height="24px"
          >
            {phoneIcon}
          </svg>
        </Grid>
        <Grid item xs={10}>
          <TextField
            name="password"
            id="password"
            value={password}
            fullWidth
            margin="normal"
            label="Ingrese una contraseña "
            variant="filled"
            onChange={handlePasswordChange}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(style)(Cuenta);
