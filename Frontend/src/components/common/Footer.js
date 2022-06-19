import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

import '../../styles/Footer.less';

export default function Footer(props) {
  const { layoutContainerCheck } = props;
  const curYear = new Date().getFullYear();

  return (
    <footer className={layoutContainerCheck}>
      <Router>
        <div className="inner-container">
          <form className="App-form">
            <label>
              {/* Say 6! */}
              <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
          </form>

          <a
            className="App-link-client"
            href="/login"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          <div className="copyright">©{curYear} Kompweb HQ</div>
          <nav className="footer-nav-container">
            <div className="footer-nav-div-link">
              <Link className="footer-nav-link" to="#">
                Contact
              </Link>
            </div>
            <div className="footer-nav-div-link">
              <Link className="footer-nav-link" to="#">
                FAQs
              </Link>
            </div>
            <div className="footer-nav-div-link">
              <Link className="footer-nav-link" to="#">
                Privacy
              </Link>
            </div>
            <div className="footer-nav-div-link">
              <Link className="footer-nav-link" to="#">
                Terms
              </Link>
            </div>
          </nav>
        </div>
      </Router>
    </footer>
  );
}
