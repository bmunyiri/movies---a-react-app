import React, { useState } from 'react'
import { useEffect } from 'react';
import MovieCard from './MovieCard';
import './App.css';


function App() {

const [movies, setmovies] = useState([])

const [searchTerm, setSearchTerm] = useState("")

  
    const API_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=620c14f7`
  
    const searchMovies = async ( title ) => {
    const response = await fetch( `${API_URL}&s={title}` ); 
      const data = await response.json();
      setmovies(data.Search)

}

   
    useEffect(() => {
    // Update the document title using the browser API
   searchMovies('');
    } );
  
  
  return (

    <div className="app">
      <h1>Walkin Movies</h1>
      <div className="search">
        
        <input
          placeholder=''
          value={searchTerm}
          onChange={( e ) => setSearchTerm( e.target.value )}
            />
      

        {movies.length > 0
          ? (
          <div className="movie-container">
              {movies.map( ( movie ) => ( <MovieCard className="movie" movie={movie} /> ) )}
             
            </div>
          ) :
          (
            <div className="empty">
              <h2>No Movies Found</h2>
            </div>
          )}
      </div>
      </div>
    );
 
}

export default App;
