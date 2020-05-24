/** @format */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Feature from '../../commons/Feature';

const images = [
  {
    name: 'teamwork',
    src:
      'https://res.cloudinary.com/fego/image/upload/v1590153226/fego/teamwork_ukmidc.png',
  },
  {
    name: 'chef-folio',
    src:
      'https://res.cloudinary.com/fego/image/upload/v1590155104/fego/chef-folio_nmzw13.jpg',
  },
  {
    name: 'youtbsrch',
    src:
      'https://res.cloudinary.com/fego/image/upload/v1590156976/fego/youtbsrchjpg_atimgj.jpg',
  },
  {
    name: 'quiz',
    src:
      'https://res.cloudinary.com/fego/image/upload/v1590243165/fego/quiz_gk1ekd.jpg',
  },
];

const Features = () => (
  <div>
    <Features.Text>Featured Work</Features.Text>
    <Features.Container>
      {images.map((image, index) => (
        <Feature key={index} imgSrc={image.src} appName={image.name} />
      ))}
    </Features.Container>
  </div>
);

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
