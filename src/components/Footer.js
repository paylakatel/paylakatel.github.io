import React from 'react';
//import { Link } from 'gatsby';
import './global.css';
import { Mail, Twitter, GitHub } from 'react-feather';

const Footer = () => (
  <div
    style={{
      left: 0,
      bottom: 0,
      textAlign: 'left',
    }}
  >
    <div>
      <li>
        <Mail />
      </li>{' '}
      <li>
        <Twitter />
      </li>
      <li>
        <GitHub />
      </li>
    </div>
  </div>
);

export default Footer;
