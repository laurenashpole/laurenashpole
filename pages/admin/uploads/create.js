import { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import withPassport from '../../../middleware/passport';
import { request } from '../../../shared/utils/request';
import Admin from '../../../components/admin/layout/Admin';
import Well from '../../../components/shared/Well';
import Input from '../../../components/shared/Input';
import Button from '../../../components/shared/Button';
import Errors from '../../../components/shared/Errors';

const Uploads = ({ isAuthenticated }) => {
  const router = useRouter();
  const [error, setError] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      const response = await request({
        endpoint: '/api/admin/uploads/create',
        body: new FormData(e.target)
      });

      router.push(response.redirect);
    } catch (err) {
      setIsProcessing(false);
      setError(err.message);
    }
  };

  return (
    <Admin isAuthenticated={isAuthenticated} title="Uploads">
      <Well>
        <h1>Create New Upload</h1>
        
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          {error && <Errors errors={[error]} />}
          <Input label="Upload" inputProps={{ type: 'file', name: 'upload', multiple: true }} />
          <Button type="primary" attributes={{ type: 'submit', disabled: isProcessing }}>Submit</Button>
        </form>
      </Well>
    </Admin>
  );
};

export async function getServerSideProps (context) {
  const isAuthenticated = await withPassport(context.req, context.res, (req) => {
    return req.isAuthenticated();
  });

  return {
    props: { isAuthenticated }
  };
}

Uploads.propTypes = {
  isAuthenticated: PropTypes.bool
};

export default Uploads;