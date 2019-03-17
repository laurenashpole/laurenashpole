import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Admin from './Admin';
import '../../sass/admin.scss';

const isAuthenticated = window.APP.isAuthenticated;

render(
  <BrowserRouter>
    <Admin isAuthenticated={isAuthenticated} />
  </BrowserRouter>,
  document.getElementById('admin')
);