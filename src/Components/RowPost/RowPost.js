import React,{useEffect,useState} from "react";
import './RowPost.css'
import axios from '../../axios';
import {image_url,api_key} from '../../constants/constants'
import Youtube from 'react-youtube'
function RowPost(props) { 
  const [movies,setMovies] = useState([])
  const [urlid,setUrlid] = useState('') 
  useEffect(()=>{
    axios.get(props.url).then((res)=>{
      setMovies(res.data.results)
    })
  },[])
  const opts = {
    height: '1080px',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    }}
    const handleMovie = (id)=>{
      console.log(id)
      axios.get(`/movie/${id}/videos?api_key=${api_key}&language=en-US`).then((res)=>{
        if(res.data.results.length !== 0){
          setUrlid(res.data.results[0])

        }else{
          console.log('Array error')
        }
      })
    }
  return (
      <div className="row">
        <h2>{props.title}</h2>
        <div className = 'posters'>
          {movies.map((obj) =>
            <img onClick={()=> handleMovie(obj.id)} className={props.isSmall ? 'smallposter': "poster" } src={`${image_url+obj.backdrop_path}`} alt="poster" />
            )
          }
        </div>
        { urlid && <Youtube opts={opts} videoId={urlid.key} />}  
      </div>
  );
}

export default RowPost;
