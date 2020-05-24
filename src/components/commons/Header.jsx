/** @format */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './Button';

const Header = () => (
  <Header.Container>
    <Header.Title>Fego</Header.Title>
    <Header.Navbar>
      <Header.Navlink target="_blank" href="https://github.com/fegoworks">
        github
      </Header.Navlink>
      <Header.Navlink
        target="_blank"
        href="https://www.linkedin.com/in/oghenefego-edafe/"
      >
        linkedin
      </Header.Navlink>
      <Header.Navlink target="_blank" href="https://twitter.com/realfego">
        twitter
      </Header.Navlink>
      <Button title="hire me" color="white" margin="0.2rem 0.5rem" />
    </Header.Navbar>
  </Header.Container>
);

Header.Container = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  padding: 0 7rem;
  justify-content: space-between;
  background-color: white;
  border-bottom: 0.05rem solid black;
  padding-bottom: 0.75rem !important;
  z-index: 2;

  @media (max-width: 1240px) {
    padding: 0 4rem;
  }

  @media (max-width: 1024px) {
    padding: 0 2.5rem;
  }

  @media (max-width: 999px) {
    padding: 0 7rem;
  }

  @media (max-width: 768px) {
    padding: 0 6rem;
  }

  @media (max-width: 600px) {
    padding: 0 1.75rem;
  }

  @media (max-width: 576px) {
    padding: 0 1rem;
  }
`;

Header.Title = styled.h3`
  margin: 0.5rem;
`;

Header.Navbar = styled.div`
  display: flex;
  justify-content: space-around;
`;

Header.Navlink = styled.a`
  text-decoration: none;
  display: inline-block;
  margin: 0.5rem 1.5rem;
  color: black;
  font-size: 1.2rem;
  font-weight: 600;
`;

export default Header;
