import { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { request } from '../../../shared/utils/request';
import Input from '../../../shared/components/Input';
import Button from '../../../shared/components/Button';
import Textarea from '../../../components/shared/Textarea';
import Loader from '../../../components/shared/Loader';
import Errors from '../../../components/shared/Errors';

const Form = ({ tag, endpoint }) => {
  const router = useRouter();
  const [name, setName] = useState(tag.name || '');
  const [description, setDescription] = useState(tag.description || '');
  const [error, setError] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      const response = await request({
        endpoint: endpoint,
        body: JSON.stringify({
          ...(tag._id && { id: tag._id }),
          name,
          description
        })
      });

      router.push(response.redirect);
    } catch (err) {
      setIsProcessing(false);
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <Errors errors={[error]} />}
      {tag._id && <input type="hidden" name="_id" value={tag._id} />}
      <Input label="Name" attributes={{ type: 'text', value: name, onChange: (e) => setName(e.target.value) }} />
      <Textarea label="Description" textareaProps={{ rows: '5', placeholder: 'Description', value: description, onChange: (e) => setDescription(e.target.value) }} />
      <Button style="primary" attributes={{ type: 'submit', disabled: isProcessing }}>{isProcessing ? <Loader /> : 'Submit'}</Button>
    </form>
  );
};

Form.propTypes = {
  tag: PropTypes.object,
  endpoint: PropTypes.string
};

export default Form;