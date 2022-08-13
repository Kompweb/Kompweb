import React from 'react';
import '../../styles/projects.list.css';
import Framer from '../common/FrameMotion';
import { Counter } from '../../features/counter/Counter';
import Dashboard from '../../features/Dashboards';
import Languages from '../common/Languages';
import Shop from './AllProjects/Shop';

function ProjectList() {
  return (
    <div className="projects">
      {/* <h1>Projects</h1> */}
      <div className="projects-list">
        <Shop />
      </div>
      <div className="projects-l">
        <div className="bottom-container">
          <Counter />
          <Framer />
          <Dashboard />
        </div>
      </div>
      <Languages />
    </div>
  );
}

export default ProjectList;
