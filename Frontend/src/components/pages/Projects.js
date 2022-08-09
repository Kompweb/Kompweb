import React from 'react';
import '../../styles/Projects.css';

import Languages from '../common/Languages';
// import SearchForm from '../common/SearchForm';
import PotShop from './AllProjects/PotShop';
import ScribleStadium from './AllProjects/ScribleStadium';
import CryptoApp from './AllProjects/CryptoApp';
import Framer from '../common/FrameMotion';
import { DashboardOutlined } from '@ant-design/icons';
import { Counter } from '../../features/counter/Counter';

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
        {/* <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p> */}
      </div>
      <Languages />
      {/* <SearchForm /> */}
    </div>
  );
}

export default Projects;
