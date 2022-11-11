import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import MovieList from './MovieList';
import Movie from './Movie';
import MovieHeader from './MovieHeader';
import AddMovieForm from './AddMovieForm';
// import FavoriteMovieList from './FavoriteMovieList';

const App = () => {
  //   const displayFavorites = props.FavoriteMovieList.displayFavorites;

  return (
    <>
      <div>
        <nav>
          <span>Redux Module Project</span>
        </nav>
        <div>
          <MovieHeader />
          <div>
            {/* {<FavoriteMovieList />} */}

            <Routes>
              <Route exact path="/movies/add">
                <AddMovieForm />
              </Route>
              <Route path="/movies/:id">
                <Movie />
              </Route>
              <Route path="/movies">
                <MovieList />
              </Route>
              <Route path="/">
                <Navigate to="/movies" />
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect(st => st)(App);
