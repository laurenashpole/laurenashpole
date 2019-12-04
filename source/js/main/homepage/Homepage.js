import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Hero from './components/Hero';
import About from './components/About';
import Distributors from './components/Distributors';

const Homepage = (props) => {
  return(
    <main className="main main--bg-header">
      <Helmet>
        <title>Lauren Ashpole</title>
      </Helmet>

      <div className="container container--large homepage">
        <Hero font={props.font} />
        <About />
        <Distributors />
      </div>
    </main>
  );
};

Homepage.propTypes = {
  font: PropTypes.object
};

Homepage.defaultProps = {
  font: {}
};

export default Homepage;