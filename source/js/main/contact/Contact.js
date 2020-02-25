import React, { Fragment, useState } from 'react';
import { Helmet } from 'react-helmet';
import { request } from '../../utilities/request';
import { sendEvent } from '../../utilities/analytics';

const Contact = () => {
  const [senderEmail, setSenderEmail] = useState('');
  const [senderName, setSenderName] = useState('');
  const [subject, setSubject] = useState('Font Licensing');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validate();

    if (isValid) {
      sendEvent('Contact Page', 'click', 'Send');
      setIsProcessing(true);

      request('/contact/send', {
        senderEmail: senderEmail,
        senderName: senderName,
        subject: subject,
        message: message
      }, (response) => {
        if (response.err) {
          const activeErrors = {
            general: response.err
          };

          setErrors(activeErrors);
        } else {
          setIsComplete(true);
        }

        setIsProcessing(false);
      });
    }
  };

  const validate = () => {
    let isValid = true;
    let activeErrors = {};

    if (senderEmail.length === 0 || !(/\S+@\S+\.\S+/.test(senderEmail))) {
      isValid = false;
      activeErrors.senderEmail = true;
    }

    if (senderName.length === 0) {
      isValid = false;
      activeErrors.senderName = true;
    }

    if (message.length === 0) {
      isValid = false;
      activeErrors.message = true;
    }

    setErrors(activeErrors);
    return isValid;
  }

  return(
    <main className="main container">
      <Helmet>
        <title>Contact - Lauren Ashpole</title>
      </Helmet>

      <div className="well">
        <div className="well__row">
          <h2 className="well__heading text--uppercase">Contact</h2>
        </div>

        {errors.general &&
          <div className="well__row">
            {errors.general}
          </div>
        }

        <div className="well__row">
          {isComplete ? (
            <Fragment>
              <h3>Thanks for your message!</h3>
              <div>I&apos;ll get back to you shortly.</div>
            </Fragment>
          ) : (
            <Fragment>
              <p>Email me at <a href="mailto:lauren@laurenashpole.com" title="mailto:lauren@laurenashpole.com">lauren@laurenashpole.com</a> or use the form below.</p>

              <form>
                <div className="form__row">
                  <input type="email" id="senderEmail" name="senderEmail" placeholder="Your Email" onChange={(e) => setSenderEmail(e.target.value)} onFocus={() => setErrors({})} value={senderEmail} className={`input input--label-inset ${errors.senderEmail ? 'input--required' : ''}`} />
                  <label htmlFor="senderEmail">Email <span className="label__required">(valid email required)</span></label>
                </div>

                <div className="form__row">
                  <input type="text" id="senderName" name="senderName" placeholder="Your Name" onChange={(e) => setSenderName(e.target.value)} onFocus={() => setErrors({})} value={senderName} className={`input input--label-inset ${errors.senderName ? 'input--required' : ''}`} />
                  <label htmlFor="senderName">Name <span className="label__required">(name required)</span></label>
                </div>

                <div className="form__row">
                  <div className="select select--label-inset">
                    <select className="select__input" id="subject" name="subject" onChange={(e) => setSubject(e.target.value)} value={subject}>
                      <option value="Font Licensing">Font Licensing</option>
                      <option value="Technical Issues">Technical Issues</option>
                      <option value="Themes">Themes</option>
                      <option value="Other">Other</option>
                    </select>
                    <span className="select__caret"></span>
                  </div>
                  <label htmlFor="subject">Subject</label>
                </div>

                <div className="form__row">
                  <textarea id="message" name="message" rows="5" placeholder="What can I help you with?" onChange={(e) => setMessage(e.target.value)} onFocus={() => setErrors({})} value={message} className={`textarea ${errors.message ? 'textarea--required' : ''}`}></textarea>
                </div>

                <div className="form__row">
                  <button type="submit" className={`button button--cta-primary ${isProcessing ? ' is-processing' : ''}`} onClick={handleSubmit} disabled={isProcessing}>
                    Send Message
                  </button>
                </div>
              </form>
            </Fragment>
          )}
        </div>
      </div>
    </main>
  );
};

export default Contact;