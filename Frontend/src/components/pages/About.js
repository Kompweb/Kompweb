import React from 'react';
import '../../styles/about.css';
import { DownCircleOutlined } from '@ant-design/icons';
// import Framer from '../common/FrameMotion';

export default function AboutUs() {
  return (
    <div className="about-us">
      <h1>About us</h1>
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
      {/* <Framer /> */}
      <div className="b-content">
        <h3>Partner with Kompweb</h3>
        <p>We guarantee the success of your React project</p>
      </div>
    </div>
  );
}
