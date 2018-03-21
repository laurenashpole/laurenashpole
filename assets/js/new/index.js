import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Site from './Site';

render(
  <BrowserRouter>
    <Site />
  </BrowserRouter>,
  document.getElementById('root')
);