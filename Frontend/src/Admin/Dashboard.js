import React, { useState } from 'react';
// import React from 'react';
import '../../src/styles/style.css';
import Login from '../common/userSignUp';
import TeamMember from './TeamMember';
import Member from './Member';

const initialFormValues = {
  username: '',
  email: '',
  role: '',
};

function AdminDashboard() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  };

  const submitForm = () => {
    const newTeamMember = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };
    setTeamMembers(teamMembers.concat(newTeamMember));
    setFormValues(initialFormValues);
  };

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
      <div className="App">
        <TeamMember
          values={formValues}
          update={updateForm}
          submit={submitForm}
        />
        {teamMembers.map(teamMembers => {
          return <Member key={teamMembers.id} details={teamMembers} />;
        })}
      </div>
      {/* <div> */}
      {/* <Navigate> */}
      {/* <SavedMovies list={[]} /> */}
      {/* <Route path={'/movies/:id'}> */}
      {/* <Movie /> */}
      {/* </Route> */}

      {/* <Route exact path="/"> */}
      {/* <MovieList movies={movieList} /> */}
      {/* </Route> */}
      {/* </Navigate> */}
      {/* </div> */}
    </div>
  );
}

export default AdminDashboard;
