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

      <ul className="navBar">
        <li>
          <Link to="/">About</Link>
        </li>{' '}
        <li>
          <Link to="/projects">Projects</Link>
        </li>{' '}
        <li>
          <a href="/static/KPatel_Resume-d13f867c222192812c8b6de1b9363f24.pdf">
            Resume
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
