import React from 'react';
import { Link } from 'gatsby';

import IndexLayout from '../components/IndexLayout';
import { Mail, Twitter, GitHub } from 'react-feather';

const IndexPage = () => (
  <IndexLayout>
    <h1>Welcome!</h1>
    <p>
      I’m Kayla, and I build solutions that help governments and organizations
      better serve their users.
    </p>
    <p>
      My academic background is in geospatial science, and my career: public
      sector tech.
    </p>
    <div>
      <Link to="/projects">Projects</Link> <Link to="/">Resume</Link>
    </div>
    <div style={{ padding: '.5em 0px' }}>
      <Mail />
      <Twitter />
      <GitHub />
    </div>
  </IndexLayout>
);

export default IndexPage;
