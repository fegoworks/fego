/** @format */

import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FeatureModalDetail from './FeatureModalDetail';

class Feature extends Component {
  state = {
    isOpen: false,
  };

  handleClick = () => {
    this.setState({ isOpen: true });
  };

  closeModal = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { image, work, detail } = this.props;
    return (
      <Fragment>
        <FeatureModalDetail
          isOpen={this.state.isOpen}
          image={image}
          detail={detail}
          work={work}
          onToggle={this.closeModal}
        />
        <Feature.Container onClick={this.handleClick}>
          <Feature.Image src={image} id="img" />
          <Feature.Overlay>
            <div style={{ display: 'block', margin: '3rem' }}>
              <Feature.Text>{work}</Feature.Text>
            </div>
          </Feature.Overlay>
        </Feature.Container>
      </Fragment>
    );
  }
}

Feature.Container = styled.div`
  position: relative;
  background: #ececeb;
  padding: 0 4.75rem;
  cursor: pointer;

  &:hover #img {
    animation: updown 2s ease infinite;
  }

  @keyframes updown {
    0% {
      transform: translateY(-3%);
    }

    50% {
      transform: translateY(3%);
    }

    100% {
      transform: translateY(-3%);
    }
  }
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
  image: PropTypes.string.isRequired,
};

export default Feature;
