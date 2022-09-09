import React from 'react';
// import '../../styles/';
// import Framer from '../common/FrameMotion';
import Framer from '../src/FrameMotion';

// import { Counter } from '../../features/counter/Counter';
import { Counter } from '../src/features/counter/Counter';

// import Dashboard from './AllProjects/Dashboards';
import Dashboard from './Dashboards';

import Shop from './Shop';
// import AvengersApp from './AllProjects/AvengersApp';

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
        </div>
      </div>
    </div>
  );
}

export default ProjectList;
