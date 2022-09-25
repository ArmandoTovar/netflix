import React, { useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import logo from "../images/netflix-logo.png";
import Hero from "../images/HeroBanner.jpg";
import { NetflixButton, NetflixInput } from "../styled/styledcomponent";
import SignUp from "./SignUp";
const Login = () => {
  const classes = useStyles();
  const [signIn, setSignIn] = useState(true);
  return (
    <div className={classes.root}>
      <img src={logo} className={classes.logo} alt="logo" />

      <NetflixButton className={classes.session}>Iniciar sesion</NetflixButton>
      <div className={classes.info}>
        {signIn ? (
          <SignUp />
        ) : (
          <>
            {" "}
            <Typography variant="h4" gutterBotton>
              Unlimited films, TV programmes and more.
            </Typography>
            <Typography variant="h5">
              Watch anywhere. Cancel at any time.
            </Typography>
            <Typography variant="h6" gutterBotton>
              Ready to watch ? Enter your email to create or restart your
              membership.
            </Typography>
            <div className={classes.inputBlock}>
              <NetflixInput placeholder="Email address" />
              <NetflixButton>GET STARTED</NetflixButton>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    height: "100vh",
    backgroundImage: `url(${Hero})`,
    objectFit: "contain",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    position: "fixed",
    top: 0,
    left: 20,
    width: "75px",
    cursor: "pointer",
  },
  session: {
    position: "fixed",
    top: 20,
    right: 20,
    zIndex: 15,
  },
  info: {
    color: "#fff",
    zIndex: 15,
    textAlign: "center",
    "& h4": {
      fontWeight: 800,
    },
    "& h5": {
      fontWeight: 400,
    },
  },
}));
export default Login;
