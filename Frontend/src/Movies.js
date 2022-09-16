import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';

import MovieList from './Admin/MovieList';
import Movie from './Admin/Movie';
import SavedList from '../../Backend/api/movies/SavedList';

export default function App() {
  // const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get(`http://localhost:3000/api/movies ${id}`) // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          console.log(' THIS IS MY RESPONSE', response.data);
          // and set the response data as the 'movieList' slice of state
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    };
    getMovies();
  }, [id]);

  // const addToSavedList = id => {
  //   // This is stretch. Prevent the same movie from being "saved" more than once
  // };

  return (
    <div>
      <SavedList
        list={
          [
            /* This is stretch */
          ]
        }
      />
      <Switch>
        <Route path={'/movies/:id'}>
          <Movie />
        </Route>

        <Route exact path="/">
          <MovieList movies={movieList} />
        </Route>
      </Switch>
    </div>
  );
}
