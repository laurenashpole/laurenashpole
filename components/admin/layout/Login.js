import { useState } from 'react';
import { request } from '../../../shared/utils/request';
import Well from '../../../shared/components//Well';
import Input from '../../../shared/components/Input';
import Button from '../../../shared/components/Button';
import Loader from '../../../components/shared/Loader';
import Errors from '../../../components/shared/Errors';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);

  const handleChange = (value, callback) => {
    setErrors({});
    callback(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const activeErrors = getActiveErrors();

    if (Object.keys(activeErrors).length) {
      return setErrors(activeErrors);
    }

    setIsProcessing(true);

    try {
      await request({
        endpoint: '/api/admin/login',
        body: JSON.stringify({
          username,
          password
        })
      });

      location.reload();
    } catch (err) {
      setIsProcessing(false);
      setErrors({ general: err.message });
    }
  };

  const getActiveErrors = () => {
    const activeErrors = {};

    username.length ? null : activeErrors.username = 'required';
    password.length ? null : activeErrors.password = 'required';

    return activeErrors;
  };

  return (
    <div className="container">
      <Well size="small">
        <h3>Login</h3>

        <form>
          {errors.general && <Errors errors={[errors.general]} />}
          <Input label={`Username ${errors.username ? '<span>(username required)</span>' : ''}`} hasError={!!errors.username} attributes={{ type: 'email', value: username, onChange: (e) => handleChange(e.target.value, setUsername) }} />
          <Input label={`Password ${errors.password ? '<span>(username password)</span>' : ''}`} hasError={!!errors.password} attributes={{ type: 'password', value: password, onChange: (e) => handleChange(e.target.value, setPassword) }} />
          <Button style="primary" onClick={handleSubmit} attributes={{ type: 'submit', disabled: isProcessing }}>{isProcessing ? <Loader /> : 'Submit'}</Button>
        </form>
      </Well>
    </div>
  );
};

export default Login;