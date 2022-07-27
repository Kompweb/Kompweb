import React from 'react';
import '../../styles/about.css';
import Framer from '../common/FrameMotion';
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
      <Framer />
      <div className="b-content">
        <a>Partner with Kompweb</a>
        <h4>We guarantee the success of your React project</h4>
      </div>
      {/* <SearchForm className="search-form" /> */}
    </div>
  );
}
