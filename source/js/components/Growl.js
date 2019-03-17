import React from 'react';

const Growl = (props) => {
  return(
    <div className="well">
      {props.message}
    </div>
  );
};

export default Growl;