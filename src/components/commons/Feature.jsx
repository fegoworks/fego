/** @format */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Feature = ({ imgSrc, appName }) => (
  <Feature.Container>
    <Feature.Image src={imgSrc} />
    <Feature.Overlay>
      <div style={{ display: 'block', margin: '3rem' }}>
        <Feature.Text>{appName}</Feature.Text>
      </div>
    </Feature.Overlay>
  </Feature.Container>
);

Feature.Container = styled.div`
  position: relative;
  background: #ececeb;
  padding: 0 4.75rem;
  cursor: pointer;
`;

Feature.Overlay = styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(103, 155, 155, 0.5);
  z-index: 1;
  transition: 0.5s ease;
  -webkit-transition: 0.5s ease;

  :hover {
    opacity: 1;
  }
`;

Feature.Image = styled.img`
  margin: 6.75rem 0;
  border: 1px solid #9dab86;
  width: 100%;
  box-shadow: 5px 5px #9dab86;
  object-fit: contain;
`;

Feature.Text = styled.h2`
  color: whitesmoke;
  font-size: 1.75rem;
  font-weight: 800;
`;

Feature.propTypes = {
  imgSrc: PropTypes.string.isRequired,
};

export default Feature;
