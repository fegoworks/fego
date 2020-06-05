/** @format */

import React, { Fragment } from 'react';
import styled from 'styled-components';
import FeatureList from './FeatureList';
import works from '../../../../data/works';

const Features = () => {
  return (
    <Fragment>
      <Features.Text>Featured Work</Features.Text>
      <Features.Container>
        <FeatureList result={works} />
      </Features.Container>
    </Fragment>
  );
};

Features.Text = styled.h1``;

Features.Container = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 1rem;
  grid-column-gap: 1.75rem;

  @media (max-width: 999px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default Features;
