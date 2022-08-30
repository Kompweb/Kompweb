import React from 'react';
import '../../styles/about.css';
import { Button } from 'antd';
import Carousel from '../pages/AllProjects/sliderTwo';

import { DownCircleOutlined } from '@ant-design/icons';
import Slider from './AllProjects/Slider';

export default function AboutUs() {
  return (
    <div className="about-us">
      <h1>About us</h1>
      <p>
        Kompweb US-based React developers have the expertise required to help
        organizations consistently deliver mission-critical applications at the
        speed required.
      </p>
      <Slider />
      <a href="/projects/">
        <DownCircleOutlined className="icons" />
      </a>
      <br />
      <a href="/projects/"> Explore Projects</a>
      <div className="b-content">
        <h3>Partner with Kompweb</h3>
        <a href="/contact/">
          <Button type="primary" htmlType="submit">
            Contact Us
          </Button>
        </a>
        <p>We guarantee the success of your React project</p>
      </div>
      <Carousel />
    </div>
  );
}
