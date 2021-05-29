import React,{useEffect, useState} from 'react'
import "./Banner.css"
import {API_KEY,imageUrl} from '../constants/constants'
import axios from "../axios"

function Banner() {
    const [Movie, setMovie] = useState()
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((res)=>{
            
            setMovie(res.data.results[0])
        })
       
    },[])
    return (

        <div style={{backgroundImage:`url(${Movie? imageUrl+Movie.backdrop_path : ""})`}} className="banner">
            
            <div className="content">
                <h1 className="title">{Movie ? Movie.title:""}</h1>
                <div className="banner_buttons"> 
                <button className="button">PLay</button>
                <button className="button">My list</button>
                </div>   
                <h1 className="description">
                    {Movie?Movie.overview:''}
                    </h1>           
               </div> 
               <div className="fade"></div>
            
        </div>
    )
}
export default Banner
