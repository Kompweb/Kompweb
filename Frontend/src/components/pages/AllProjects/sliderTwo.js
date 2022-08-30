import { Carousel } from 'antd';
import React from 'react';

import '../../../styles/carousel.module.css';

// const App = () => (
//   <Carousel autoplay>
//     <div>
//       <h3 className="contentStyle">HELLO</h3>
//     </div>
//     <div>
//       <h3 className="contentStyle">react</h3>
//     </div>
//     <div>
//       <h3 className="contentStyle">join</h3>
//     </div>
//     <div>
//       <h3 className="contentStyle">kompweb</h3>
//     </div>
//   </Carousel>
// );

// export default App;

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
