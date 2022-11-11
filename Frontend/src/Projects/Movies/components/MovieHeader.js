import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const MovieHeader = () => {
  //   const { appTitle } = props;
  //   const { displayFavorites } = props;

  return (
    <div>
      <div>
        <div>{/* <h2>{appTitle}</h2> */}</div>
        <div>
          <div>
            {/* <span>{displayFavorites ? 'Hide' : 'Show'} Favorites</span> */}
          </div>
          <Link to="/movies">View All Movies</Link>
          <Link to="/movies/add">
            <i>&#xE147;</i> <span>Add New Movie</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = () => {
  return {
    // displayFavorites: state.favoritesReducer.displayFavorites,
    // appTitle: state.movieReducer.appTitle,
  };
};

export default connect(mapStateToProps)(MovieHeader);
