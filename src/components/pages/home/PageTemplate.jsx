/** @format */

import React, { Fragment } from 'react';
import styled from 'styled-components';
import Header from '../../commons/Header';
import About from './About';
import Features from './Feature/Features';

class PageTemplate extends React.Component {
  state = {
    isOpen: false,
  };

  onToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Fragment>
        <Header open={this.state.isOpen} handleClick={this.onToggle} />
        <PageTemplate.Container>
          <About />
          <Features />
        </PageTemplate.Container>
      </Fragment>
    );
  }
}

PageTemplate.Container = styled.div`
  margin: 0 7rem;

  @media (max-width: 1240px) {
    margin: 0 4rem;
  }

  @media (max-width: 1024px) {
    margin: 0 2.5rem;
  }

  @media (max-width: 999px) {
    margin: 0 7rem;
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
