import PropTypes from 'prop-types';
import { useState } from 'react';
import { request } from '../../../utils/request';
import Button from '../../../components/shared/Button';

const Delete = ({ id, name }) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleClick = () => {
    if (confirm(`Are you sure you want to delete this ${name}?`)) {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    setIsProcessing(true);

    try {
      await request({
        endpoint: `/api/admin/${name}s/remove`,
        body: JSON.stringify({ id })
      });

      location.reload();
    } catch (err) {
      setIsProcessing(false);
    }
  };

  return (
    <Button type="warning" onClick={handleClick} attributes={{ type: 'button', disabled: isProcessing }}>
      {isProcessing ? 'Deleting...' : 'Delete'}
    </Button>
  );
};

Delete.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string
};

export default Delete;