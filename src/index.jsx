/** @format */

import React from 'react';
import { render } from 'react-dom';
import Header from './components/commons/Header';
import PageTemplate from './components/pages/home/PageTemplate';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <PageTemplate />
    </React.Fragment>
  );
};

render(<App />, document.querySelector('#root'));
