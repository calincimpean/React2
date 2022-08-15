import React from "react";

const Movie2 = ({movie}) => {
    const IMAGE_PATH = "https://image.tmdb.org/t/p/w342"
  
    return (
         
            <div className='image-container d-flex justify-content-start m-3' style={{maxWidth:"fit-content"}}>
                
                <img src={IMAGE_PATH + movie.poster_path} className={"immage2"} />
                
                
            </div>
       
    );
  }; 
  export default Movie2;