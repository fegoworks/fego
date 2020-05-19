/** @format */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = ({ title, color, margin }) => (
  <Button.Container color={color} margin={margin}>
    {title}
  </Button.Container>
);

Button.Container = styled.button`
  ${({ color, margin }) => `
    width: 6rem;
    margin: ${margin};
    text-align: center;
    cursor: pointer;
    font-size: 0.75rem;
    font-weight: bold;
    background: ${color};
    border: 0.1rem solid orange;
    position: relative;
    -webkit-box-shadow: 6px 6px 0 #666;
    -moz-box-shadow: 6px 6px 0 #666;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
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
