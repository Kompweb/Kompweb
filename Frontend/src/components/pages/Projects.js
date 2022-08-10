import React from 'react';
import '../../styles/projects.css';
import Languages from '../common/Languages';
import PotShop from './AllProjects/PotShop';
import ScribleStadium from './AllProjects/ScribleStadium';
import CryptoApp from './AllProjects/CryptoApp';
import Framer from '../common/FrameMotion';
import { DashboardOutlined } from '@ant-design/icons';
import { Counter } from '../../features/counter/Counter';
// import Crypto from './AllProjects/Crypto';

function Projects() {
  return (
    <div className="projects">
      {/* <h1>Projects</h1> */}
      <div className="projects-list">
        <PotShop />
        <ScribleStadium />
        <CryptoApp />
      </div>
      <div className="projects-l">
        <Framer />
        <div className="bottom-container">
          <h2>Online Dashboards</h2>
          <p>
            Anytime and anywhere, our customers can track their progress to see
            when theyll reach their next milestone.
          </p>
          <DashboardOutlined className="icons" />
        </div>
        <Counter />
      </div>
      <Languages />
      {/* <Crypto /> */}
    </div>
  );
}

export default Projects;
