import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const NotFound = ({ slug }) => {
  return(
    <main className="main container">
      <Helmet>
        <title>Font Not Found - Fonts - Lauren Ashpole</title>
      </Helmet>

      <div className="well">
        <div className="well__row well__row--px-lg well__row--py-lg">
          <h2>Font not found.</h2>
          <p>Sorry, there&apos;s no font called {slug}. It might be a mistake so try checking in the full list of fonts <Link to="/fonts" title="Fonts">here</Link>.</p>
        </div>
      </div>
    </main>
  );
};

NotFound.propTypes = {
  slug: PropTypes.string
};

export default NotFound;