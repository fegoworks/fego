/** @format */

import React from 'react';
import styled from 'styled-components';
import About from '../../pages/home/About';

const PageTemplate = () => (
  <PageTemplate.Container>
    <About />
  </PageTemplate.Container>
);

PageTemplate.Container = styled.div`
  margin: 0 7rem;

  @media (max-width: 1240px) {
    margin: 0 4rem;
  }

  @media (max-width: 1024px) {
    margin: 0 2.5rem;
  }

  @media (max-width: 999px) {
    margin: 0 4rem;
  }

  @media (max-width: 768px) {
    margin: 0 6rem;
  }

  @media (max-width: 600px) {
    margin: 0 1.75rem;
  }

  @media (max-width: 576px) {
    margin: 0 1rem;
  }
`;

export default PageTemplate;
