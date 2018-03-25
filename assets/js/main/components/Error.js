import React from 'react';
import { Link } from 'react-router-dom';

const Error = (props) => {
  return(
    <main className="main main--v-center container container--medium bg-dots bg-dots--fixed bg-abstract--fixed">
      <div className="well well--extra-padding">
        <h2>Page not found.</h2>
        <p>It looks like this page doesn&apos;t exist. If you're looking for fonts, try clicking <Link to="/fonts" title="Fonts">here</Link> instead. If you need anything else, don&apos;t hesitate to <a href="mailto:lauren@laurenashpole.com" title="lauren@laurenashpole.com">contact me</a>.</p>
      </div>
    </main>
  );
};

export default Error;