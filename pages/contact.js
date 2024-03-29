import { useState } from 'react';
import { request } from '../shared/utils/request';
import Well from '../shared/components/Well';
import Input from '../shared/components/Input';
import Button from '../shared/components/Button';
import Layout from '../components/layout/Layout';
import Select from '../components/shared/Select';
import Textarea from '../components/shared/Textarea';
import Errors from '../components/shared/Errors';
import Loader from '../components/shared/Loader';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('Font Licensing');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

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
        endpoint: '/api/contact',
        body: JSON.stringify({
          email,
          name,
          subject,
          message
        })
      });

      setIsProcessing(false);
      setIsComplete(true);
    } catch (err) {
      setIsProcessing(false);
      setErrors({ general: 'There was an error sending your message! Please try again.' });
    }
  };

  const getActiveErrors = () => {
    const activeErrors = {};

    email.length && /\S+@\S+\.\S+/.test(email) ? null : activeErrors.email = 'required';
    name.length ? null : activeErrors.name = 'required';
    message.length ? null : activeErrors.message = 'required';

    return activeErrors;
  };

  return(
    <Layout meta={{ title: 'Contact', pathname: 'contact' }}>
      {isComplete ? (
        <Well size="medium">
          <h1>Thanks for your message!</h1>
          <div>I&apos;ll get back to you as soon as I can.</div>
        </Well>
      ) : (
        <Well size="medium">
          <h1>Contact</h1>

          <form>
            {errors.general && <Errors errors={[errors.general]} />}
            <p>Email me at <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`} title={process.env.NEXT_PUBLIC_EMAIL}>{process.env.NEXT_PUBLIC_EMAIL}</a> or use the form below.</p>
            <Input label={`Email ${errors.email ? '<span id="emailError">(valid email required)</span>' : '*'}`} hasError={!!errors.email} attributes={{ type: 'email', placeholder: 'Your Email', value: email, onChange: (e) => handleChange(e.target.value, setEmail), 'aria-describedby': 'emailError' }} />
            <Input label={`Name ${errors.name ? '<span id="nameError">(name required)</span>' : '*'}`} hasError={!!errors.name} attributes={{ type: 'text', placeholder: 'Your Name', value: name, onChange: (e) => handleChange(e.target.value, setName), 'aria-describedby': 'nameError' }} />

            <Select label="Subject" selectProps={{ value: subject, onChange: (e) => handleChange(e.target.value, setSubject) }}>
              <option value="Font Licensing">Font Licensing</option>
              <option value="Technical Issues">Technical Issues</option>
              <option value="Themes">Themes</option>
              <option value="Other">Other</option>
            </Select>

            <Textarea label="Message" hasError={!!errors.message} textareaProps={{ rows: 6, placeholder: 'What can I help you with? *', value: message, onChange: (e) => handleChange(e.target.value, setMessage) }} />

            <Button style="primary" onClick={handleSubmit} attributes={{ type: 'submit', disabled: isProcessing, 'data-ga-click': true, 'data-ga-category': 'contact' }}>
              {isProcessing ? <Loader /> : 'Send Message'}
            </Button>
          </form>
        </Well>
      )}
    </Layout>
  );
};


export default Contact;