import React from 'react';
import { Link } from 'gatsby';
import './global.css';
import { StaticQuery, graphql } from 'gatsby';

const NavBar = () => (
  <StaticQuery
    query={graphql`
      query ResumeQuery {
        resume: file(relativePath: { eq: "KPatel_Resume.pdf" }) {
          publicURL
        }
      }
    `}
    render={data => (
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
              <a href={data.resume.publicURL}>Resume</a>
            </li>
          </ul>
        </div>
      </nav>
    )}
  />
);

export default NavBar;
