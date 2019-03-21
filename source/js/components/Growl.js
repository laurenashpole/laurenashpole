import React from 'react';
import PropTypes from 'prop-types';

const Growl = (props) => {
  return(
    <div className="well">
      {props.message}
    </div>
  );
};

Growl.propTypes = {
  message: PropTypes.string
};

export default Growl;