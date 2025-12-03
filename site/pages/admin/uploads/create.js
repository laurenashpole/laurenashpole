import { upload } from '@vercel/blob/client';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';

import Button from '../../../../shared/components/Button';
import Input from '../../../../shared/components/Input';
import Well from '../../../../shared/components/Well';
import Admin from '../../../components/admin/layout/Admin';
import Errors from '../../../components/shared/Errors';
import withPassport from '../../../middleware/passport';

const Uploads = ({ isAuthenticated }) => {
  const fileRef = useRef(null);
  const router = useRouter();
  const [error, setError] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleChange = () => {
    setIsProcessing(false);
    setError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      const file = fileRef.current ? fileRef.current.files[0] : null;

      if (!file) {
        return setError('Please select a file');
      }

      await upload(`misc/${file.name}`, file, {
        access: 'public',
        handleUploadUrl: '/api/admin/uploads/create',
      });

      router.push('/admin/uploads');
    } catch (err) {
      setIsProcessing(false);
      setError(err.message);
    }
  };

  return (
    <Admin isAuthenticated={isAuthenticated} title="Uploads">
      <Well>
        <h1>Create New Upload</h1>

        <form onSubmit={handleSubmit}>
          {error && <Errors errors={[error]} />}
          <Input
            label="Upload"
            ref={fileRef}
            attributes={{ type: 'file', onChange: handleChange }}
          />

          <Button
            style="primary"
            attributes={{ type: 'submit', disabled: isProcessing }}
          >
            Submit
          </Button>
        </form>
      </Well>
    </Admin>
  );
};

export async function getServerSideProps(context) {
  const isAuthenticated = await withPassport(
    context.req,
    context.res,
    (req) => {
      return req.isAuthenticated();
    },
  );

  return {
    props: { isAuthenticated },
  };
}

Uploads.propTypes = {
  isAuthenticated: PropTypes.bool,
};

export default Uploads;
