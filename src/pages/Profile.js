import React, { useEffect, useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Header from "../components/Header";
import avatar from "../images/netflixavatar.png";
import Plans from "../components/Plans";
import { NetflixButton } from "../styled/styledcomponent";
import { auth } from "../firebase";
import { useNavigate } from "react-router";
import { selectUser } from "../features/UserSlice";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [name , setName] = useState("")
  const user = useSelector(selectUser);
  const dispatch = useDispatch()
  const signout = () =>{
    auth.signOut();
    navigate("/login")
  }

  useEffect(() => {
   setName(user?.email);
 }, [user]);
  return (
    <div className={classes.root}>
      <Header />
      <Typography varian="h3">Edit Profile</Typography>
  
        <div className={classes.info}>
          <img src={avatar} alt="avatar" />
          <div className={classes.details}>
            <div className={classes.plans}>
              <Typography variant="h6">{name}</Typography>
              <Typography variant="h5" gutterBottom>
                Plans
              </Typography>
              <Plans cost={7.99}>Netflix Standard</Plans>
              <Plans cost={11.99}>Netflix Basic</Plans>
              <Plans wide="medium" color="gray" cost={15.99}>Netflix Premium</Plans>
              <NetflixButton onClick={signout} wide="fullWidth">Sign Out</NetflixButton>
            </div>
          </div>
        </div>
    
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    minHeight: "100vh",
    maxWidth:"800px",
    display:"flex",
    flexDirection:"column",
    alignItems:"center"
  },
  info:{
    width:"80%",
    display:"flex",
    "& img":{
      height:"100px",
      [theme.breakpoints.down("sm")]:{
        display:"none",
      },
    },
  },
  details:{
    width:"100%",
    marginLeft: theme.spacing(3),
    "& h6":{
      backgroundColor:"#aaa",
      padding:theme.spacing(1),
      marginBottom:theme.spacing(1),
      fontSize:"18px",
    }
  },
  plans:{
    width:"100%",
    "& h5":{
      borderBottom:"1px solid lightgray"
    },
  }
}));
export default Profile;
