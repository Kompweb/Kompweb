import React from 'react';
// import '../../styles/';
import Framer from './FrameMotion';
import { Counter } from './Projects/counter/Counter';
import Dashboard from './Dashboards';
import Shop from './Shop';
import MovieQuotes from './Projects/movieQuotes/MovieQuotes';
// import AppUsers from './CRUDfeatures/CRUD/users/indexez';
import AppClients from './Projects/clients/Clients';
// import Users from './CRUD/CRUDops/users';
// import MovieList from './CRUD/Movies/index';

function ProjectList() {
  return (
    <div className="projects">
      <div className="projects-list">
        <Shop />
      </div>
      <div className="projects-l">
        <div className="bottom-container">
          <Framer />
          <Dashboard />
          {/* <Users /> */}
          <AppClients />
          {/* <AvengersApp /> */}
          <MovieQuotes />
          <Counter />
          {/* <AppUsers /> */}
          {/* <MovieList /> */}
        </div>
      </div>
    </div>
  );
}

export default ProjectList;
