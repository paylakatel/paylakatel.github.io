import React from 'react';
//import { Link } from 'gatsby';
import './global.css';
import { Mail, Twitter, GitHub } from 'react-feather';

const Footer = () => (
  <footer className="footer">
    <div>
      <li>
        <a className="icon" href="mailto:paylakatel@gmail.com">
          <Mail />
        </a>
      </li>{' '}
      <li>
        <a className="icon" href="https://twitter.com/paylakatel">
          <Twitter />
        </a>
      </li>
      <li>
        <a className="icon" href="https://github.com/paylakatel">
          <GitHub />
        </a>
      </li>
    </div>
  </footer>
);

export default Footer;
