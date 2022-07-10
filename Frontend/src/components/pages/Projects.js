import React from 'react';
import '../../styles/Projects.css';
import Languages from '../common/Languages';
import SearchForm from '../common/SearchForm';
import PotShop from './AllProjects/PotShop';
import ScribleStadium from './AllProjects/ScribleStadium';
import CryptoApp from './AllProjects/CryptoApp';
function Projects() {
  return (
    <div className="projects">
      {/* <h1 style={{ color: '#fff' }}>Projects</h1> */}
      <PotShop />
      <ScribleStadium />
      <CryptoApp />
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <Languages />
      <SearchForm />
    </div>
  );
}

export default Projects;
