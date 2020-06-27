/** @format */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ open, handleClick }) => (
  <Header.Container>
    <Header.Title>Fego</Header.Title>
    <Header.Burger onClick={handleClick}>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </Header.Burger>
    <Header.List open={open}>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/fegoworks/"
        >
          github
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/oghenefego-edafe/"
        >
          linkedin
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/realfego"
        >
          twitter
        </a>
      </li>
      <li className="email">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={'mailto:fegoworks@hotmail.com'}
        >
          email
        </a>
      </li>
      <Button
        email={'mailto:fegoworks@hotmail.com'}
        title="hire me"
        color="white"
        margin="0.2rem 0.5rem"
      />
    </Header.List>
  </Header.Container>
);

Header.Container = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  padding: 0 7rem;
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

Header.List = styled.ul`
  display: flex;
  margin: 0;
  list-style: none;
  margin-left: auto;
  justify-content: space-around;
  align-items: center;

  li a {
    text-decoration: none;
    display: inline-block;
    margin: 0.5rem 1.5rem;
    color: black;
    font-size: 1.2rem;
    font-weight: 600;
  }

  .email {
    display: none;
  }

  @media (max-width: 999px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: orange;
    height: 100vh;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    clip-path: ${(props) =>
      props.open ? 'circle(1000px at 90% -10%)' : 'circle(100px at 90% -20%)'};
    -webkit-clip-path: ${(props) =>
      props.open ? 'circle(1000px at 90% -10%)' : 'circle(100px at 90% -20%)'};
    transition: all 1s ease-out;
    opacity: 0.9;

    .email {
      display: inline-block;
    }

    li a {
      font-size: 2.35rem;
      margin: 1.2rem 0;
    }

    li:nth-child(1) {
      transition: all 0.5s ease 0.2s;
    }

    li:nth-child(2) {
      transition: all 0.5s ease 0.4s;
    }

    li:nth-child(3) {
      transition: all 0.5s ease 0.6s;
    }
    li:nth-child(4) {
      transition: all 0.5s ease 0.8s;
    }

    li {
      opacity: ${(props) => (props.open ? 1 : 0)};
    }
  }
`;

Header.Burger = styled.div`
  @media (max-width: 999px) {
    position: absolute;
    cursor: pointer;
    right: 12.5%;
    top: 50%;
    transform: translate(-12.5%, -60%);
    z-index: 2;

    .line {
      width: 30px;
      height: 3px;
      background: black;
      margin: 5px;
    }
  }

  @media (max-width: 768px) {
    right: 13%;
    top: 50%;
    transform: translate(-13%, -60%);
  }

  @media (max-width: 600px) {
    right: 4%;
    top: 50%;
    transform: translate(-4%, -60%);
  }

  @media (max-width: 320px) {
    right: 5%;
    top: 50%;
    transform: translate(-5%, -60%);
  }
`;

export default Header;
