import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import React, { Component } from 'react';
import {useEffect, useState} from "react"
import { Link } from "react-router-dom";
import { FaSearch,FaPlay,FaInfoCircle } from "react-icons/fa";
import apiClient from '../../api/apiClient';
import { useParams } from "react-router-dom";
import apiClientSeries from '../../api/apiClientSeries';
import Movie from '../MovieCard/MovieCard';
import Movie2 from '../SeriesCard/SeriesCard';
import '../App.css';


export function Home() {
    const MOVIE_API = "https://api.themoviedb.org/3/"
    const SEARCH_API = MOVIE_API + "search/movie"
    const DISCOVER_API = MOVIE_API + "discover/movie"
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
    
    movies.map(movie => (
      
      <button className='buttonForNavigation' onClick={() => navigate(`/movieINformations/${movie.id}`)}>
        <Movie
            
            key={movie.id}
            movie={movie}
            poster = {movie.poster_path}
            
        />
        
        </button>
        
        
    ))
    
  
  )
  
    return (
      
      
      <div className="App1">
       <div>
        <nav className="App">
          
          <Link to="/" className="hover-efect" style={{color:"white",textDecoration:"none",cursor: "pointer",fontWeight:"700"}} >Home</Link>
          <Link to="/gener"style={{color:"white",textDecoration:"none",fontWeight:"700"}}>Gener</Link>
          <Link to="/tvseries"style={{color:"white",textDecoration:"none",fontWeight:"700"}}>TV Series</Link>
          <Link to="/topimdb"style={{color:"white",textDecoration:"none",fontWeight:"700"}}>Top IMDB</Link>
          
          <form className="form" onSubmit={fetchMovies}>
            <input className="search" type="text" id="search"
             onInput={(event) => setSearchKey(event.target.value)}/>
            <button className="submit-search" type="submit"><FaSearch /></button>
         </form>
         </nav>
         </div>
        
        <div className={"center-max-size container"}>
            {renderMovies()}
        </div>
        </div>
      
    );
    
  }
  export default Home;