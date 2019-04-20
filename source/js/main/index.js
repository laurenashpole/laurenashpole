import 'core-js/features/array/map';
import React from 'react';
import { render } from 'react-dom';
import Site from './Site';
import '../../sass/main.scss';

render(
  <Site />,
  document.getElementById('root')
);