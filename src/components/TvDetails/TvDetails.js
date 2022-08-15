import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom";
import apiClientSeries from "../../api/apiClientSeries";

export function TvDetails() {
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(false);
    const BACKDROP_PATH = "https://image.tmdb.org/t/p/w1280"
    const IMAGE_PATH = "https://image.tmdb.org/t/p/w342"; 
    let { movieId } = useParams();
  
    useEffect(() => {
      setLoading(true);
      apiClientSeries.getMovieData(movieId)
      .then(res => {
        setMovie(res);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
    }, [movieId]);
  
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
                    <span>First Air Date: </span><span>{movie.general.first_air_date}</span>
                    <br></br>
                    
                </div>
            </div>
        <div>   
       <div className='movieSummary'>{movie.general.overview}</div>
       <br></br>
       <br></br>
       <a href="https://www.youtube.com/watch?v=Go8nTmfrQd8&ab_channel=MarvelEntertainment" class="round-button"><i class="fa fa-play fa-2x"></i></a>
       <div className='movieSummary'>{movie.general.credits}</div>
       
       
       
  </div>
  </div>
        </>
      )}
      </>
    );
  }
  export default TvDetails;