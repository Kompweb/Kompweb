import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

export default function User() {
  const [user, setUser] = useState();
  const { id } = useParams();
  // Change ^^^ that line and use a hook to obtain the :id parameter from the URL

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/users/${id}`) // Study this endpoint with Postman
      .then(response => {
        // Study this response with a breakpoint or log statements
        console.log(response.data);
        // and set the response data as the 'movie' slice of state
        setUser(response.data);
      })
      .catch(error => {
        console.error(error);
      });
    // This effect should run every time time
    // the `id` changes... How could we do this?
  }, [id]);

  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = evt => { }

  if (!user) {
    return <div>Loading user information...</div>;
  }

  //   const { title, director, metascore, stars } = movie;
  const { username, bio, role } = user;

  return (
    <div className="save-wrapper">
      <div className="user-card">
        <h2>{username}</h2>
        <div className="user-bio">
          Bio: <em>{bio}</em>
        </div>
        <div className="user-role">
          Role: <strong>{role}</strong>
        </div>
        <h3>Users</h3>
        {/* {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))} */}
      </div>
      <div className="save-button">Save</div>
    </div>
  );
}
