import React from 'react';
import { Link } from 'gatsby';
import './global.css';

const NavBar = () => (
  <nav>
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <h3 className="site-title">
        <Link to="/">Kayla A. Patel</Link>
      </h3>

      <ul
        style={{
          listStyleType: 'none',
          margin: 0,
          padding: 0,
          float: 'right',
        }}
      >
        <li>
          <Link to="/">About</Link>
        </li>{' '}
        <li>
          <Link to="/projects">Projects</Link>
        </li>{' '}
        <li>
          <Link to="/">Resume</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
