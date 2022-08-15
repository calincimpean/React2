import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import React, { Component } from 'react';
import {useEffect, useState} from "react"
import { Link } from "react-router-dom";
import { FaSearch,FaPlay,FaInfoCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Movie2 from '../SeriesCard/SeriesCard';



export function TVSeries() {
   
    const MOVIE_API = "https://api.themoviedb.org/3/"
    const SEARCH_API = MOVIE_API + "search/tv"
    const DISCOVER_API = MOVIE_API + "discover/tv"
    const API_KEY = "ebc837392e4b2186424dd73076c9edfa"
    const [movies, setMovies] = useState([])
    const [searchKey, setSearchKey] = useState("")
    
    
  
    useEffect(() => {
      fetchMovies()
    },  [])
  
    const fetchMovies = async (event) => {
  
      if (event) {
        event.preventDefault()
    }
  
  
    const {data} = await axios.get(`${searchKey ? SEARCH_API : DISCOVER_API}`, {
      params: {
          api_key: API_KEY,
          query: searchKey
         
      }
  
  })
    
          setMovies(data.results)
          
          
    
  }
  
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w342"; 
  const navigate = useNavigate(); 
  const renderMovies = () => (
    
    movies.map(tv => (
      
      <button className='buttonForNavigation' onClick={() => navigate(`/tvINformations/${tv.id}`)}>
        <Movie2
            
            key={tv.id}
            movie={tv}
            poster = {tv.poster_path}
            
        />
        
        </button>
        
        
    ))
    
  
  )
  
    return (
      
      
      <div className="App12">
       <div>
        <nav className="App2">
          <Link to="/" className="hover-efect" style={{color:"white",textDecoration:"none",cursor: "pointer",fontWeight:"700"}} >Home</Link>
          <Link to="/gener"style={{color:"white",textDecoration:"none",fontWeight:"700"}}>Gener</Link>
          {/* <Link to="/country"style={{color:"white",textDecoration:"none",fontWeight:"700"}}>Country</Link> */}
          {/* <Link to="/movies"style={{color:"white",textDecoration:"none",fontWeight:"700"}}>Movies</Link> */}
          <Link to="/tvseries"style={{color:"white",textDecoration:"none",fontWeight:"700"}}>TV Series</Link>
          <Link to="/topimdb"style={{color:"white",textDecoration:"none",fontWeight:"700"}}>Top IMDB</Link>
          <form className="form" onSubmit={fetchMovies}>
            <input className="search" type="text" id="search"
             onInput={(event) => setSearchKey(event.target.value)}/>
            <button className="submit-search" type="submit"><FaSearch /></button>
         </form>
         </nav>
         </div>
        
        <div className=' movie-app'>
        <div className='row'>
            {renderMovies()}
            <div className='nothing'></div>
        </div>
        
        </div>
        
        </div>
      
    );
  }
  export default TVSeries;