import React from 'react';
import { PageTitle, Punctuation } from '../components/PageTitle';
import { Paragraph, Highlight } from '../components/Paragraph';

const IndexPage = () => (
  <div>
    <PageTitle>
      Welcome<Punctuation>!</Punctuation>
    </PageTitle>
    <Paragraph maxWidth>
      I’m Kayla, and I build solutions that help governments and organizations
      better serve their users.
    </Paragraph>
    <Paragraph maxWidth>
      My academic background is in geospatial science, and my career:{' '}
      <Highlight>public sector tech.</Highlight>
    </Paragraph>
  </div>
);

export default IndexPage;
