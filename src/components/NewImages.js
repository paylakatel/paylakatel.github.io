import React from 'react';
import Img from 'gatsby-image';

// eslint-disable-next-line
export default function ContentImages({ data }) {
  return (
    <div>
      <h1>Hello gatsby-image</h1>
      <Img resolutions={data.file.childImageSharp.resolutions} />
    </div>
  );
}
