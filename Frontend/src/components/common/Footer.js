// import React from 'react';
// import { Link, BrowserRouter as Router } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// import '../../styles/Footer.less';

export default function Footer() {
  const curYear = new Date().getFullYear();

  return (
    <footer>
      <div className="copyright">©{curYear} KOMPWEB HQ</div>
      {/* <form className="App-form">
          <label>
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form> */}
    </footer>
  );
}
