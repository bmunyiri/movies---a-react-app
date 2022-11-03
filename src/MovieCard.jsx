import React from 'react'
import './App.css'

const MovieCard = ({  movie} ) => {
  return (
      
          <div className="container">
            
             <span className="span">Type: { movie.Type}</span>
             <p className="span" >Release Year: {movie.Year}</p>
             <div className="movie-title" >{movie.Title}</div>
      <img className="image" src={movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Poster} />
      <br />
          <br />
      <br />
      <br />
      <hr />         </div>
          
         
   
    
  )
}
export default MovieCard;