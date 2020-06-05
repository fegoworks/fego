/** @format */

import React from 'react';
import styled from 'styled-components';
import Modal from './../../../UI/Modal';
import PropTypes from 'prop-types';

const FeatureModalDetail = ({ isOpen, image, work, detail, onToggle }) => (
  <Modal open={isOpen} handleClose={onToggle}>
    <FeatureModalDetail.Container>
      <section className="top">
        <button className="btn-close" onClick={onToggle}>
          X
        </button>
        <img src={image} alt={work} />
      </section>
      <section className="bottom">
        <h2>{work}</h2>
        <p>{detail}</p>
      </section>
    </FeatureModalDetail.Container>
  </Modal>
);

FeatureModalDetail.Container = styled.aside`
  display: flex;
  flex-direction: column;

  .top {
    background: #ececeb;
    padding: 5rem 0;
  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    margin: 1rem;
    font-size: 1.3rem;
    outline: none;
    cursor: pointer;
    background: none;
  }

  .bottom {
    padding: 0 2rem;
  }

  .bottom p {
    line-height: 2rem;
    font-weight: 500;
    font-size: 1.25rem;
  }
  img {
    display: block;
    width: 60%;
    margin: 0 auto;
    border: 1px solid #9dab86;
    box-shadow: 5px 5px #9dab86;

    @media (max-width: 768px) {
      width: 80%;
    }
  }
`;

FeatureModalDetail.defaultProps = {
  isOpen: false,
};

FeatureModalDetail.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  work: PropTypes.string,
  detail: PropTypes.string,
  image: PropTypes.string,
  onToggle: PropTypes.func,
};
export default FeatureModalDetail;
