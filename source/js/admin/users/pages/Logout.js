import React, { useEffect } from 'react';
import { fetchRequest } from '../../../utilities/fetchRequest';

const Logout = () => {
  useEffect(() => {
    fetchRequest('post', null, '/admin/logout', () => {
      location.reload();
    });
  }, []);

  return(
    <div className="container container--narrow">
      <div className="well">
        <div className="well__row well__row--x-padding well__row--y-padding">
          Logging out...
        </div>
      </div>
    </div>
  );
};

export default Logout;