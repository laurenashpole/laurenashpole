import React from 'react';
import PropTypes from 'prop-types';
import Hero from './components/Hero';
import About from './components/About';
import Distributors from './components/Distributors';

const Homepage = (props) => {
  return(
    <main className="main">
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