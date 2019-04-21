import React from 'react';
import { render } from 'react-dom';
import { sendPageview } from '../utilities/analytics';
import { getUrlParameter } from '../utilities/getUrlParameter';
import Site from './Site';

const fromMailChimp = getUrlParameter('mc_cid');
const fonts = window.APP.fonts || {};

sendPageview();

if (fromMailChimp) {
  window.localStorage.setItem('hideEmailModal', true);
}

render(
  <Site fonts={fonts} />,
  document.getElementById('root')
);