import React from 'react';
import '../styles/admin.css';
import Login from '../common/userSignUp';

function AdminDashboard() {
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

  // useEffect(() => {
  //   const getMovies = () => {
  //     axios
  //       .get('http://localhost:3000/login') // Study this endpoint with Postman
  //       .then(response => {
  //         // Study this response with a breakpoint or log statements
  //         console.log(' THIS IS MY RESPONZ', response.data);
  //         // and set the response data as the 'movieList' slice of state
  //         // setMovieList(response.data);
  //         // console.log(movieList);
  //       })
  //       .catch(error => {
  //         console.error('Server Error', error);
  //       });
  //   };
  //   getMovies();
  // }, []);

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <a
          className="sign-up-client"
          href="/login"
          target="_blank"
          rel="noopener noreferrer"
        >
          Admin Login
        </a>
        <Login />
      </header>
    </div>
  );
}
export default AdminDashboard;
