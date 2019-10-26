import React, { useEffect } from 'react';
import { fetchRequest } from '../../../utilities/fetchRequest';

const Logout = () => {
  useEffect(() => {
    fetchRequest('post', null, '/admin/logout', () => {
      console.log('do i happen');
      location.reload();
    });
  }, []);

  return(
    <div className="container container--narrow">
      <div className="well">Logging out...</div>
    </div>
  );
};

export default Logout;