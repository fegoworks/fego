/** @format */

import React from 'react';
import Feature from './Feature';

const FeatureList = ({ result }) => (
  <React.Fragment>
    {result.map((image, index) => (
      <Feature
        key={index}
        image={image.url}
        work={image.work}
        detail={image.detail}
      />
    ))}
  </React.Fragment>
);

export default FeatureList;
