import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { NetflixButton } from "../styled/styledcomponent";
import { useDispatch } from "react-redux";
import { setPrice } from "../features/PriceSlice";
import { useNavigate } from "react-router";

const Plans = ({ cost, children, wide, color = "red" }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleClick = (cost) => 
  {
    dispatch(setPrice(cost))
    navigate('/checkout')
  }; 
  return (
    <div className={classes.root}>
      <Typography className={classes.standard} varint="h5">
        {" "}
        {children}
      </Typography>
      <NetflixButton
        onClick={() => handleClick(cost)}
        wide={wide}
        color={color}
      >
        Subscribe { cost}
      </NetflixButton>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& button": {
      marginBottom: theme.spacing(2),
    },
  },
  standard: {
    fontSize: "1.2rem",
  },
}));
export default Plans;
