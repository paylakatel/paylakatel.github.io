import React from 'react';
import { Link } from 'gatsby';

import IndexLayout from '../components/IndexLayout';
import { Mail, Twitter, GitHub } from 'react-feather';

import '../components/global.css';

const IndexPage = () => (
  <IndexLayout>
    <h1>
      Welcome
      <span className="punctuation">!</span>
    </h1>
    <div className="intro">
      <p>
        I’m Kayla, and I build solutions that help governments and organizations
        better serve their users.
      </p>
      <p>
        My academic background is in geospatial science, and my career:{' '}
        <span className="text-highlight">public sector tech.</span>
      </p>
      <p>
        Currently, I work for the City of Boston, MA as a Product Manager on our{' '}
        <a href="https://www.boston.gov/departments/digital-team">
          Digital Team
        </a>
        .
      </p>
    </div>
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <ul className="navBar">
        <li>
          <Link to="/projects">
            <h4>Projects</h4>
          </Link>
        </li>{' '}
        <li>
          <a href="/static/KPatel_Resume-d13f867c222192812c8b6de1b9363f24.pdf">
            <h4>Resume</h4>
          </a>
        </li>
      </ul>{' '}
    </div>
    <div className="icons">
      <a className="icon" href="mailto:paylakatel@gmail.com">
        <Mail />
      </a>
      <a className="icon" href="https://twitter.com/paylakatel">
        <Twitter />
      </a>
      <a className="icon" href="https://github.com/paylakatel">
        <GitHub />
      </a>
    </div>
  </IndexLayout>
);

export default IndexPage;
