import React,{useEffect, useState} from "react";
import './Banner.css'
import axios from '../../axios';
import {api_key,image_url} from '../../constants/constants'
function Banner() {
  const [movie,setMovie] = useState()
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${api_key}&language=en-US`).then((res)=>{
      console.log(res.data.results)
      setMovie(res.data.results[1])
    })

  }, [])
  return (
    <div style={{backgroundImage:`url(${movie ? image_url+movie.backdrop_path:""})`}} 
    className="banner">
      <div className="content">
        <h1 className="title">{movie ? movie.title : ""}</h1>
        <div className="buttons">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <div className="description">
          {movie ? movie.overview : ""}
        </div>
      </div>
        <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
