import React from 'react';
import { render } from 'react-dom';
import { sendPageview } from '../utilities/analytics';
import { getUrlParameter } from '../utilities/getUrlParameter';
import Main from './Main';

const fromMailChimp = getUrlParameter('mc_cid');

if (fromMailChimp) {
  window.localStorage.setItem('hideEmailModal', true);
}

sendPageview();

render(
  <Main fonts={window.APP.fonts || []} glyphs={window.APP.glyphs || {}} />,
  document.getElementById('root')
);