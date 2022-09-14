import React from 'react';
// import '../../styles/';
import Framer from './FrameMotion';
import { Counter } from '../src/features/counter/Counter';
import Dashboard from './Dashboards';
import Shop from './Shop';
import MovieQuotes from '../src/features/movieQuotes/MovieQuotes';

function ProjectList() {
  return (
    <div className="projects">
      {/* <h1>Projects</h1> */}
      <div className="projects-list">
        <Shop />
      </div>
      <div className="projects-l">
        <div className="bottom-container">
          <Framer />
          <Dashboard />
          <Counter />
          {/* <AvengersApp /> */}
          <MovieQuotes />
        </div>
      </div>
    </div>
  );
}

export default ProjectList;
