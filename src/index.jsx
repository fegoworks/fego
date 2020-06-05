/** @format */

import React from 'react';
import { render } from 'react-dom';
import PageTemplate from './components/pages/home/PageTemplate';

const App = () => {
  return <PageTemplate />;
};

render(<App />, document.querySelector('#root'));
