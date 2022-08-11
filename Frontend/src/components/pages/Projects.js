import React from 'react';
import '../../styles/projects.css';
import Languages from '../common/Languages';
import PotShop from './AllProjects/PotShop';
import ScribleStadium from './AllProjects/ScribleStadium';
import CryptoApp from './AllProjects/CryptoApp';
import Framer from '../common/FrameMotion';
import { DashboardOutlined } from '@ant-design/icons';
import { Counter } from '../../features/counter/Counter';
import { Link } from 'react-router-dom';

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
        <div className="bottom-container">
          <Framer />
          <Counter />
          <div className="a-dash">
            <h4>Online Dashboards</h4>
            <p>
              Anytime and anywhere, our customers can track their progress to
              see when theyll reach their next milestone.
            </p>
          </div>
          <Link to={'/admin'}>
            <DashboardOutlined className="icons" />
          </Link>
        </div>
      </div>
      <Languages />
    </div>
  );
}

export default Projects;

// function Projects() {
//   return (
//     <div className="projects">
//       {/* <h1>Projects</h1> */}
//       <div className="projects-list">
//         <PotShop />
//         <ScribleStadium />
//         <CryptoApp />
//       </div>
//       <div className="projects-l">
//         <Framer />
//         <div className="bottom-container">
//           <h2>Online Dashboards</h2>
//           <p>
//             Anytime and anywhere, our customers can track their progress to see
//             when theyll reach their next milestone.
//           </p>
//           <DashboardOutlined className="icons" />
//         </div>
//         <Counter />
//       </div>
//       <Languages />
//     </div>
//   );
// }

// export default Projects;
