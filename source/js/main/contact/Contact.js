import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Growl from '../../components/Growl';
import { request } from '../../utilities/request';
import { sendEvent } from '../../utilities/analytics';

class Contact extends Component {
  constructor (props) {
    super(props);

    this.state = {
      senderEmail: '',
      senderName: '',
      subject: '',
      message: '',
      error: '',
      inputErrors: {
        senderEmail: false,
        senderName: false,
        message: false
      },
      isProcessing: false,
      isComplete: false
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleFocus = () => {
    this.setState({
      inputErrors: {
        senderEmail: false,
        senderName: false,
        message: false
      }
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    sendEvent(e);

    let isValid = this.validate();

    if (isValid) {
      this.setState({
        isProcessing: true
      });

      request('/contact/send', this.state, (response) => {
        if (response.success) {
          this.setState({
            isComplete: true
          });
        } else {
          if (response.err) {
            this.handleError(response.err);
          }
        }

        this.setState({
          isProcessing: false
        });
      });
    }
  }

  handleError = (error) => {
    this.setState({error})
  }

  validate = () => {
    let isValid = true;
    let activeErrors = {...this.state.inputErrors};

    if (this.state.senderEmail.length === 0 || !(/\S+@\S+\.\S+/.test(this.state.senderEmail))) {
      isValid = false;
      activeErrors.senderEmail = true;
    }

    if (this.state.senderName.length === 0) {
      isValid = false;
      activeErrors.senderName = true;
    }

    if (this.state.message.length === 0) {
      isValid = false;
      activeErrors.message = true;
    }

    this.setState({
      inputErrors: activeErrors
    });

    return isValid;
  }

  render () {
    return(
      <main className="main main--bg-fixed container container--medium">
        <Helmet>
          <title>Contact - Lauren Ashpole</title>
        </Helmet>

        <h2 className="text--uppercase">Contact</h2>

        <form>
          {this.state.error && <Growl message={this.state.error}/>}

          <div className="well">
            {this.state.isComplete ? (
              <Fragment>
                <h3>Thanks for your message!</h3>
                <div>I&apos;ll get back to you shortly.</div>
              </Fragment>
            ) : (
              <Fragment>
                <p>Email me at <a href="mailto:lauren@laurenashpole.com" title="mailto:lauren@laurenashpole.com">lauren@laurenashpole.com</a> or use the form below.</p>

                <div className="form__row">
                  <input type="email" id="senderEmail" name="senderEmail" placeholder="Your Email" onChange={this.handleChange} onFocus={this.handleFocus} value={this.state.senderEmail} className={"input input--label-inset" + (this.state.inputErrors.senderEmail ? ' is-required' : '')} />
                  <label htmlFor="senderEmail">Email <span className="label__required">(valid email required)</span></label>
                </div>

                <div className="form__row">
                  <input type="text" id="senderName" name="senderName" placeholder="Your Name" onChange={this.handleChange} onFocus={this.handleFocus} value={this.state.senderName} className={"input input--label-inset" + (this.state.inputErrors.senderName ? ' is-required' : '')} />
                  <label htmlFor="senderName">Name <span className="label__required">(name required)</span></label>
                </div>

                <div className="form__row">
                  <div className="select select--label-inset">
                    <select className="select__input" id="subject" name="subject" onChange={this.handleChange} value={this.state.subject}>
                      <option value="Font Licensing">Font Licensing</option>
                      <option value="Technical Issues">Technical Issues</option>
                      <option value="Themes">Themes</option>
                      <option value="Other">Other</option>
                    </select>
                    <span className="select__caret">
                      <i className="fa fa-angle-down"></i>
                    </span>
                  </div>
                  <label htmlFor="subject">Subject</label>
                </div>

                <div className="form__row">
                  <textarea id="message" name="message" rows="5" placeholder="Message" onChange={this.handleChange} onFocus={this.handleFocus} value={this.state.message} className={"textarea" + (this.state.inputErrors.message ? ' is-required' : '')}></textarea>
                </div>

                <div className="form__row">
                  <button
                    type="submit"
                    className={"button button--cta-primary" + (this.state.isProcessing ? ' is-processing' : '')}
                    onClick={this.handleSubmit}
                    data-ga-category="Contact Page"
                    data-ga-action="click"
                    data-ga-label="Send"
                  >
                    Send Message
                  </button>
                </div>
              </Fragment>
            )}
          </div>
        </form>
      </main>
    );
  }
}

export default Contact;