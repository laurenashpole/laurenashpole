import React from 'react';
import { render } from 'react-dom';
import { sendPageview } from '../utilities/analytics';
import { getUrlParameter } from '../utilities/getUrlParameter';
import Main from './Main';

const fromMailChimp = getUrlParameter('mc_cid');
const fonts = window.APP.fonts || {};

sendPageview();

if (fromMailChimp) {
  window.localStorage.setItem('hideEmailModal', true);
}

render(
  <Main fonts={fonts} />,
  document.getElementById('root')
);