import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/Dashboard.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Dashboard() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {

    //fetch all movies from TMDB using api 
    function fetchMovies(){
    const apiKey = 'e17dc8980e7aecf508d299059d96147e';
    const endpoint = 'https://api.themoviedb.org/3/discover/movie';
  
    axios.get(endpoint, {
      params: {
        api_key: apiKey
      },
    })
    .then(response => {
      setMovies(response.data.results);
    })
    .catch(error => {
      console.error('Error fetching movies:', error);
    });
  }
     fetchMovies();
  }, []);
  
 //fetch movies using search api
  const search = async () => {
    if(!searchValue == " "){
    try {
      const apiKey = 'e17dc8980e7aecf508d299059d96147e';
      const endpoint = 'https://api.themoviedb.org/3/search/movie';

      const response = await axios.get(endpoint, {
        params: {
          api_key: apiKey,
          query: searchValue,
        },
      });

      setMovies(response.data.results);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  }
  else{
    toast.error("Please enter something in search box")
  }
  };

  //all front end part and handle function representing in below
  return (
    <div className='div-container'>
      
      <div className="d-flex" style={{ marginLeft: "65%", padding: '20px' }}>
        <input type="text" className="form-control me-2" placeholder="Search for Movies" style={{ width: "300px" ,height:'50px' }} value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)} />
        <button className="btn btn-outline-light" type="button" onClick={search} style={{width:'120px'}}  >Search</button>
      </div>

      <h1 style={{ color: 'khaki', fontSize: '40px', fontWeight: '450', paddingLeft: '20px', paddingTop: '0px' }}>Your streaming guide for movies</h1>
      <p style={{ color: 'white', fontSize: '30px', paddingLeft: '30px', wordSpacing: '8px', paddingTop:'10px' }}>Need something to watch? We’re on it. Movies combines free movies & TV<br></br> with your favorite streaming services, so there’s always more to discover.</p>
      <p style={{ color: 'lemonchiffon', fontSize: '30px', padding: '20px' }}>Featured Movies</p>
     
      <div className="movie-card-container">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="movie-details">
              <h4 style={{ color: "white" }}>{movie.title}</h4>
              <p style={{ fontSize: "15px" }}>{movie.release_date}</p>
              <p style={{ fontSize: "15px" }}>Rating: {movie.vote_average}</p>
            </div>
          </div>
        ))}
      </div>  
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default Dashboard;
