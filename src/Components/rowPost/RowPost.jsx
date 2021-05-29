import React,{useState,useEffect} from 'react'
import './rowPost.css'
import Youtube from 'react-youtube';

import axios from "../axios"
import {imageUrl,API_KEY} from "../constants/constants"




function RowPost(props) {
    const [posters, setposters] = useState([])
    const [urlId, setUrlId] = useState('')
    useEffect(() => {
        axios.get(props.url).then((res)=>{
            setposters(res.data.results);
            console.log(res.data.results)
        })
        
    },[])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const handeMovie=(id)=>{
          console.log(id)
          axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((res)=>{
              if(res.data.results.length!==0){
                setUrlId(res.data.results[0]);
              }
              else{
                  alert('no video available')
              }
              
          })
      }
    
    
    return (
        <div className="row">
            <h2>{props.title}</h2>
            

        <div className="posters">
            {posters.map((obj,key)=>
           
                <img onClick={()=>{handeMovie(obj.id)}} className={props.isSmall? "isSmall":"poster"} alt="movie" src={`${imageUrl+obj.backdrop_path}`} />
            )}
            
            
            
                </div>
          {urlId && <Youtube opts={opts} videoId={urlId.key} />}      
                
        </div>
        
    )
}

export default RowPost
