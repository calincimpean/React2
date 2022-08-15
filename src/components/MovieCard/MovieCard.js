
import React from 'react';
const Movie = ({movie}) => {
    const IMAGE_PATH = "https://image.tmdb.org/t/p/w342"
  
    return (
         <div className={"movie"}>
           
            <div className="movie-title">
                
                <img src={IMAGE_PATH + movie.poster_path} className={""} />
                
                <div className={"flex between movie-infos"}>
                    <h5 className={"movie-title"}>{movie.title}</h5>
                    
                </div>
            </div>
        </div>
    );
  };
  export default Movie;