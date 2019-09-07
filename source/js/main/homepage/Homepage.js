import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Hero from './components/Hero';
import About from './components/About';
import Distributors from './components/Distributors';

const Homepage = (props) => {
  return(
    <main className="main">
      <Helmet>
        <title>Lauren Ashpole</title>
      </Helmet>

      <Hero font={props.font} />
      <About />
      <Distributors />
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