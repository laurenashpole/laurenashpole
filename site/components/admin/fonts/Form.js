import { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { request } from '../../../shared/utils/request';
import Button from '../../../shared/components/Button';
import Loader from '../../../components/shared/Loader';
import Errors from '../../../components/shared/Errors';
import FormBasics from './FormBasics';
import FormDistributors from './FormDistributors';
import FormImages from './FormImages';
import FormPreviews from './FormPreviews';
import FormDownloads from './FormDownloads';
import styles from './Form.styles.js';

const Form = ({ font, tags, endpoint }) => {
  const router = useRouter();
  const [error, setError] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      const response = await request({
        endpoint: endpoint,
        body: new FormData(e.target)
      });

      router.push(response.redirect);
    } catch (err) {
      setIsProcessing(false);
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      {error && <Errors errors={[error]} />}
      {font._id && <input type="hidden" name="_id" value={font._id} />}
      <FormBasics font={font} tags={tags} />
      <FormDistributors font={font} />
      <FormImages font={font} />
      <FormPreviews font={font} />
      <FormDownloads font={font} />

      <Button style="primary" attributes={{ type: 'submit', disabled: isProcessing }}>
        {isProcessing ? <Loader /> : 'Submit'}
      </Button>

      <style jsx global>
        {styles}
      </style>
    </form>
  );
};

Form.propTypes = {
  font: PropTypes.object,
  tags: PropTypes.array,
  endpoint: PropTypes.string
};

export default Form;