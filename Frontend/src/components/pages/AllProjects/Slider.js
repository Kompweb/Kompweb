import React, { useState } from 'react';
import '../../../styles/slider.css';

import { Rerousel } from 'rerousel';

export default function Slider() {
  const adminname = useState(null);

  return (
    <Rerousel adminName={adminname}>
      <div
        adminname={adminname}
        className="header-23__right"
        style={{ height: 'auto' }}
      >
        <div id="slider-wrapp" data-controller="card-stack-animation">
          <div
            id="slider"
            className="_3D"
            data-card-stack-animation-target="slider"
          >
            <div className="slide" data-card-stack-animation-target="slide">
              <img
                className="avatar"
                alt="CALIN ORTAN"
                loading="lazy"
                src="https://flexiple.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBa3NMIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--10fe74041eb27168991e08ed888371aa42626f8c/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFLUUFXa0NrQUU9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--0b9e08da560faad644c065f2fd0cd700d4263bdf/403.jpg/"
              />
              <div className="content">
                <br />
                <h3> CALIN ORTAN </h3>
                <h5> ReactJS Developer</h5>
                <br />
                <p> WORKED AT Atlassian</p>
              </div>
            </div>

            <div className="slide" data-card-stack-animation-target="slide">
              <img
                className="avatar"
                alt="RAVISH ARYA"
                loading="lazy"
                src="https://flexiple.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdGNKIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--dd693f45206a02f06c4673fa89fe76fd3c18507e/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFLUUFXa0NrQUU9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--0b9e08da560faad644c065f2fd0cd700d4263bdf/317.jpg/"
              />

              <div className="content">
                <br />
                <h3> RAVISH ARYA </h3>
                <h5> Senior ReactJS Engineer</h5>
                <br />
                <p> WORKED AT Mobiquity</p>
              </div>
            </div>

            <div className="slide" data-card-stack-animation-target="slide">
              <img
                className="avatar"
                alt="ANDREI SERBAN"
                loading="lazy"
                src="https://flexiple.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb1VKIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--cc6f23d67e9e542b66929d7143d55dd5bb878328/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFLUUFXa0NrQUU9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--0b9e08da560faad644c065f2fd0cd700d4263bdf/173.jpg/"
              />
              <div className="content">
                <br />
                <h3> ANDREI SERBAN </h3>
                <h5> Senior ReactJS Developer</h5>
                <br />
                <p> WORKED AT BMW Group</p>
              </div>
            </div>

            <div className="slide" data-card-stack-animation-target="slide">
              <img
                className="avatar"
                alt="ABHINAV GAUR"
                loading="lazy"
                src="https://flexiple.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdGNJIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--88ac5627642ed90b26b442c7690b6195cd693afa/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFLUUFXa0NrQUU9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--0b9e08da560faad644c065f2fd0cd700d4263bdf/04.jpg/"
              />

              <div className="content">
                <br />
                <h3> ABHINAV GAUR </h3>
                <h5> ReactJS Developer</h5>
                <br />
                <p> WORKED AT Atlassian</p>
              </div>
            </div>

            <div className="slide" data-card-stack-animation-target="slide">
              <img
                className="avatar"
                alt="OTSUKA ENDO"
                loading="lazy"
                src="https://flexiple.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdU1JIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--a21d2810e893edb6b57519771606c08d203d91da/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFLUUFXa0NrQUU9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--0b9e08da560faad644c065f2fd0cd700d4263bdf/15.jpg/"
              />

              <div className="content">
                <br />
                <h3> OTSUKA ENDO </h3>
                <h5> ReactJS Developer</h5>
                <br />
                <p> WORKED AT Fujisoft</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Rerousel>
  );
}
