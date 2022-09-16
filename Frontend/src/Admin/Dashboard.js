import React, { useState, useEffect } from 'react';
// import React from 'react';

import axios from 'axios';
import '../../src/styles/style.css';

// import { Route, Navigate } from 'react-router-dom';

import Login from '../common/userSignUp';

import MovieList from './MovieList';
import Movie from './Movie';
// import SavedUsers from '../../src/movies/SavedList';

function AdminDashboard() {
  // const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  // useEffect(() => {
  //   const getUsers = () => {
  //     axios
  //       .get('http://localhost:5000/api/users') // Study this endpoint with Postman
  //       .then(response => {
  //         // Study this response with a breakpoint or log statements
  //         console.log(' THIS IS MY ', response.data);
  //         // and set the response data as the 'movieList' slice of state
  //         setMovieList(response.data);
  //         console.log(movieList);
  //       })
  //       .catch(error => {
  //         console.error('Server Error', error);
  //       });
  //   };
  //   getUsers();
  // }, []);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:3000/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          console.log(' THIS IS MY RESPONZ', response.data);
          // and set the response data as the 'movieList' slice of state
          setMovieList(response.data);
          console.log(movieList);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    };
    getMovies();
  }, []);

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        {/* <h1>ADMIN</h1> */}
        <a
          className="sign-up-client"
          href="/login"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sign Up
        </a>
        <Login />
      </header>
      <div>
        {/* <Navigate> */}
        {/* <SavedMovies list={[]} /> */}
        {/* <Route path={'/movies/:id'}> */}
        <Movie />
        {/* </Route> */}

        {/* <Route exact path="/"> */}
        <MovieList movies={movieList} />
        {/* </Route> */}
        {/* </Navigate> */}
      </div>
    </div>
  );
}

export default AdminDashboard;
