import React from 'react';
import { Link } from 'react-router-dom';

export default function SavedList() {
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {/* {props.list.map(movie => (
        <span className="saved-movie">
          {movie.title} key={id}
        </span>
      ))} */}
      <Link to="/">
        <div className="home-button">Home</div>
      </Link>
    </div>
  );
}
