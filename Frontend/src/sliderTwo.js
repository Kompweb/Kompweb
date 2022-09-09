import React from 'react';
import '../src/styles/carousel.module.css';
import { Carousel } from 'antd';

const App = () => (
  <Carousel autoplay>
    <div className="contentStyle">
      <div>
        <h3 className="contentStyle">1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
    </div>
  </Carousel>
);

export default App;
