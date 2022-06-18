import React from "react";
// import { Link } from "react-router-dom";

import "../../styles/Footer.less";

export default function Footer(props) {
  const { layoutContainerCheck } = props;
  const curYear = new Date().getFullYear();

  return (
    <footer className={layoutContainerCheck}>
      <div className='inner-container'>
        <div className='copyright'>©{curYear} Kompweb HQ</div>
        {/* <nav className='footer-nav-container'>
          <div className='footer-nav-div-link'>
            <Link className='footer-nav-link' to='/contact'>
              Contact
            </Link>
          </div>
          <div className='footer-nav-div-link'>
            <Link className='footer-nav-link' to='/faq'>
              FAQs
            </Link>
          </div>
          <div className='footer-nav-div-link'>
            <Link className='footer-nav-link' to='#'>
              Privacy
            </Link>
          </div>
          <div className='footer-nav-div-link'>
            <Link className='footer-nav-link' to='#'>
              Terms
            </Link>
          </div>
        </nav> */}
      </div>
    </footer>
  );
}
