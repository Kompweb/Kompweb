import React from 'react';
import '../src/styles/about.css';
import { Button } from 'antd';
import Carousel from './sliderTwo';

import Slider from './Slider';
import LightOn from './features/LightOn';

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
        <LightOn />
      </a>
      {/* <br /> */}
      <a href="/projects/"> Explore Projects</a>
      <div className="b-content">
        <h3>Partner with Kompweb</h3>

        <div className="text-slides">
          <p>
            Over a call, the developers ability to communicate in an articulate
            manner is tested. A deeper understanding of the candidates technical
            experience and also motivation to freelance is achieved.
          </p>
          <p style={{ color: '#61dafb', fontSize: 21, fontWeight: 'bold' }}>
            We guarantee the success of your React project
            <a href="/contact/">
              <Button type="primary" htmlType="submit">
                Contact Us
              </Button>
            </a>
          </p>

          <p>
            Performance during each engagement is continually assessed. Our
            developers are expected to maintain standards across all engagements
            with our customers.
          </p>
        </div>
      </div>
      <Carousel />
    </div>
  );
}
