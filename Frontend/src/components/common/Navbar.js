import { useState } from 'react';
import '../../styles/navbar.css';
import logo from '../../../src/assets/logo.svg';
import SearchForm from './SearchForm';

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <div className="navbar">
        <div className="kompweb">
          <div>
            <a href="/">{'Kompweb'}</a>
            <p>React Solutions </p>
          </div>
          <SearchForm />
        </div>

        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <img
            className="react"
            // viewBox="0 0 20 20"
            // fill="white"
            src={logo}
            alt="logo"
          />
        </button>

        <div
          className={
            isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'
          }
        >
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
