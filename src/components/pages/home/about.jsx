/** @format */

import React from 'react';
import styled from 'styled-components';

const About = () => (
  <About.Container>
    <About.Left>
      <About.Header>
        Hey, I am Edafe Oghenefego Evi - A Software Engineer from Lagos.
      </About.Header>
      <About.Bio>
        I am a JavaScript nomad, originally from the earth kingdom of{' '}
        <span style={{ color: '#bc658d' }}>Bah Sing Seh</span>. One time I stood
        between the sun and the moon, my shadow fell on the earth and caused a
        solar eclipse. I am currently building cool stuff at AntStack
        Technologies Limited. Limited
      </About.Bio>
      <About.Link
        target="_blank"
        rel="noopener noreferrer"
        href={'mailto:fegoworks@hotmail.com'}
      >
        fegoworks@hotmail.com
      </About.Link>
    </About.Left>
    <About.Right
      src="https://res.cloudinary.com/fego/image/upload/v1589903373/fego/undraw_web_developer_p3e5_jbcxhp.svg"
      alt=""
    />
  </About.Container>
);

About.Container = styled.section`
  display: flex;
  flex-basis: 50% 50%;
  justify-content: space-between;
  padding: 3rem 0;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }
`;

About.Left = styled.div``;

About.Header = styled.h1`
  font-size: 2.2rem;
  font-weight: 700;
  margin: 0;
  padding: 0;

  @media (max-width: 411px) {
    font-size: 1.75rem;
    font-weight: 650;
  }
`;

About.Bio = styled.p`
  font-size: 1.3rem;
  line-height: 1.75rem;
  s span {
    text-decoration-style: wavy;
  }

  @media (max-width: 411px) {
    font-size: 1.15rem;
  }
`;

About.Link = styled.a`
  text-decoration: none;
  display: inline-block;
  color: black;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.5rem;
  border-bottom: 0.01rem solid black;

  :hover {
    color: white;
    background: black;
  }
`;

About.Right = styled.img`
  width: 50%;
  height: auto;

  @media (max-width: 1024px) {
    width: 70%;
    margin-bottom: 4rem !important;
    margin: 0 auto;
  }
`;
export default About;
