import React from 'react';
import '../../styles/about.css';
import { DownCircleOutlined } from '@ant-design/icons';

// import Framer from '../common/FrameMotion';
// import SearchForm from '../common/SearchForm';

export default function AboutUs() {
  return (
    <div className="about-us">
      <h1>About US</h1>
      <p>
        Kompweb US-based React developers have the expertise required to help
        organizations consistently deliver mission-critical applications at the
        speed required.
      </p>
      <a href="/projects/">
        <DownCircleOutlined className="icons" />
      </a>
      <br />
      <a href="/projects/"> Explore Projects</a>

      {/* <Link to="/projects">Explore Projects</Link> */}

      {/* <Framer /> */}
      <div className="b-content">
        <h3>Partner with Kompweb</h3>
        <h4>We guarantee the success of your React project</h4>
      </div>
      {/* <Framer /> */}

      {/* <SearchForm className="search-form" /> */}
    </div>
  );
}
