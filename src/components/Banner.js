import React, { useEffect } from 'react'
import { Button, makeStyles, Typography } from "@material-ui/core";
import HeroBanner from "../images/netflixCasa.jpg"
import { useState } from 'react';
import axios from 'axios'
import requests from "../Requests";
const base_url = "https://image.tmdb.org/t/p/original"
const Banner = () => {
  const classes = useStyles();
  const [movie,setMovie]= useState([]);
  const truncate = (string ,n) => string?.length  > n ?  `${string.substring(0,n-1)} ...`:string;
  useEffect(() => {
    const fetchData = async ()=>{
      const request = await axios.get("https://api.themoviedb.org/3"+requests.fetchNetflixOriginals);
      const random = Math.floor(Math.random()*request.data.results.length-1)
        

      setMovie(request.data.results[random])
      return request
    }
    fetchData();
  }, [])
  return (
    <div className={classes.root} style={{
      backgroundImage:`${ movie.backdrop_path === undefined ? "none" : "url("+base_url+movie?.backdrop_path+")"}` ,
      position:"relative",
      height:"440px",
      objectFit:"contain",
      backgroudSize:"cover",
      backgroundPosition:"center",
      color:"#fff"
    }}>

      <div className={classes.content}>
        <Typography variant="h2" componet="h1">
         {movie?.title || movie?.name || movie?.original_name}
        </Typography>
        <div className={classes.buttons}>
        <Button>Play</Button>
        <Button>My Lists</Button>
        </div>
        <Typography style={{wordWrap:"break-word"}}variant="h6" className={classes.description}>
          {
            truncate(movie?.overview,
            160)
          }
          
        </Typography>
        <div className={classes.fadeBottom}>

        </div>
      </div>

    </div>
  )
}
const useStyles = makeStyles((theme) => ({

  buttons:{
    "& button":{
      curson:"pointer",
      color:"#fff",
      borderRadius:"5px",
      padding:theme.spacing(1,4,1,4),
      marginRight:"1rem",
      backgroundColor:"rgba(51,51,51,0.5)"

    },
    "& button:hover":{

      color:"#000",
      backgroundColor:"#e6e6e6"

    },
  },
  content:{
    padding:theme.spacing(10,4,1,4),
  },
  fadeBottom:{
    position:"absolute",
    top:"30vh",
    bottom:0,
    left:0,
    right:0,
    zIndex:99,
    background:
    "linear-gradient(180deg,transparent,rgba(37,37,37,0.61), #111)",
  }
}));
export default Banner