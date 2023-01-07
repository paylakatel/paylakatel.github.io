import React from 'react';
import { Link } from 'gatsby';

import IndexLayout from '../components/IndexLayout';
import { Mail, Twitter, GitHub } from 'react-feather';

import '../components/global.css';

import PageHead from '../components/PageHead';

export const Head = () => <PageHead />;

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
        My academic background is in geospatial science, and my career: public
        sector tech.
      </p>
      <p>
        Currently, I work for Hi Marley in Boston, MA as a Senior Software
        Engineer.
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
