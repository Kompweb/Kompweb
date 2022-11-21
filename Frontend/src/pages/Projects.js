import React from 'react';
import Framer from '../Projects/FrameMotion';
import { Counter } from '../CRUD/counter/Counter';
import Dashboard from '../Admin/Dashboards';
import Shop from '../Projects/Shop';
import MovieQuotes from '../CRUD/movieQuotes/MovieQuotes';
import AppClients from '../CRUD/Users/Index';
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
          <AppClients />
          {/* <AvengersApp /> */}
          <MovieQuotes />
          <Counter />
          {/* <MovieList /> */}
        </div>
      </div>
    </div>
  );
}

export default ProjectList;
