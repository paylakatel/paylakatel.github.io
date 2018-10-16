import React from 'react';
import { Link } from 'gatsby';
import './global.css';

const NavBar = () => (
  <nav
    style={{
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '.5em',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <h3 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        />
        Kayla A. Patel
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
