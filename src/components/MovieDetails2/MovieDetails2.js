import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import React, { Component } from 'react';
import {useEffect, useState} from "react"

import { FaSearch,FaPlay,FaInfoCircle } from "react-icons/fa";

import { useParams } from "react-router-dom";
import apiClient from '../../api/apiClient';
import apiClientSeries from '../../api/apiClientSeries';
import Movie from '../MovieCard/MovieCard';


export function MovieDetails2() {
    const MOVIE_API = "https://api.themoviedb.org/3/"
    const SEARCH_API = MOVIE_API + "search/movie"
    const DISCOVER_API = MOVIE_API + "discover/movie"
    const API_KEY = "ebc837392e4b2186424dd73076c9edfa"
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(false);
    const BACKDROP_PATH = "https://image.tmdb.org/t/p/w1280"
    const IMAGE_PATH = "https://image.tmdb.org/t/p/w342"; 
    let { movieId } = useParams();
    const [movies, setMovies] = useState([])
    const [searchKey, setSearchKey] = useState("")
  
    useEffect(() => {
      setLoading(true);
      apiClient.getMovieData(movieId)
      .then(res => {
        setMovie(res);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
    }, [movieId]);
  
    const fetchMovies = async (event) => {
  
      if (event) {
        event.preventDefault()
    }
  
  
      const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/similar`, {
        params: {
            api_key: API_KEY,
            query: searchKey
           
        }
  
    })
    
          setMovies(data.results)
          console.log(data);
          
          
          
  }
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
      <>
      {loading && (
        <div>Loading...</div>
      )}
      {!loading && movie && (
        <>
              <div className={"container1"} style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${BACKDROP_PATH}${movie.general.backdrop_path})`,backgroundSize:"cover",backgroundPosition:"top center;"}}>
        <div className="movie-title1">
                
                <img src={IMAGE_PATH + movie.general.poster_path}  />
                
                <div className={"titleAndIMdb"}>
                    <br></br>
                    <div >{movie.general.title}</div>
                    <br></br>
                    <span>IMDB: </span><span>{movie.general.vote_average}</span>
                    <br></br>
                    <br></br>
                    <span>Release: </span><span>{movie.general.release_date}</span>
                    <br></br>
                    
                </div>
            </div>
        <div>   
       <div className='movieSummary'>{movie.general.overview}</div>
       <br></br>
       <br></br>
       {/* <a href="https://www.youtube.com/watch?v=Go8nTmfrQd8&ab_channel=MarvelEntertainment" class="round-button"><i class="fa fa-play fa-2x"></i></a> */}
       <div className="buttons" >
            <button className="play">
              <FaPlay />
              <span>Play</span>
            </button>
            <button className="more">
              <FaInfoCircle />
              <span>Info</span>
            </button>
          </div>
       <div className='movieSummary'>{movie.general.credits}</div>
       <div >
            {renderMovies()}
        </div>
       
       
       
  </div>
  </div>
        </>
      )}
      </>
    );
  }
  export default MovieDetails2;