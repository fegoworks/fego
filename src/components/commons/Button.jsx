/** @format */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = ({ email, title, color, margin }) => (
  <Button.Container
    target="_blank"
    rel="noopener noreferrer"
    href={email}
    color={color}
    margin={margin}
  >
    {title}
  </Button.Container>
);

Button.Container = styled.a`
  ${({ color, margin }) => `
    width: 6rem;
    margin: ${margin};
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    color: black;
    font-size: 0.75rem;
    padding: 0.4rem 0;
    font-weight: bold;
    background: ${color};
    border: 0.1rem solid orange;
    position: relative;
    -webkit-box-shadow: 6px 6px 0 #666;
    -moz-box-shadow: 6px 6px 0 #666;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
  
    @media(max-width: 999px){display:none}
  `}
`;

Button.defaultProps = {
  color: '#5C6784',
  margin: '0',
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  margin: PropTypes.string,
};

export default Button;
