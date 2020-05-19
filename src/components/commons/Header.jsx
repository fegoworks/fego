/** @format */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './Button';

const Header = () => (
  <Header.Container>
    <H3>Fego</H3>
    <Nav>
      <Link target="_blank" href="https://github.com/fegoworks">
        github
      </Link>
      <Link
        target="_blank"
        href="https://www.linkedin.com/in/oghenefego-edafe/"
      >
        linkedin
      </Link>
      <Link target="_blank" href="https://twitter.com/realfego">
        twitter
      </Link>
      <Button title="hire me" color="white" margin="0.2rem 0.5rem" />
    </Nav>
  </Header.Container>
);

Header.Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  border-bottom: 0.05rem solid black;
  padding-bottom: 0.75rem;
`;

const H3 = styled.h3`
  margin: 0.5rem;
`;

const Link = styled.a`
  text-decoration: none;
  display: inline-block;
  margin: 0.5rem 1.5rem;
  color: black;
  font-size: 1.2rem;
  font-weight: 600;
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default Header;
