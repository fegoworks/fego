/** @format */

import React from 'react';
import { render } from 'react-dom';
import Header from './components/commons/Header';

const App = () => {
  return <Header />;
};

render(<App />, document.querySelector('#root'));
