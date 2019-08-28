import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { request } from '../../utilities/request';
import { sendEvent } from '../../utilities/analytics';

class Mailing extends Component {
  constructor (props) {
    super(props);

    this.state = {
      email: '',
      hidden: '',
      buttonText: 'Get Updates!',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    sendEvent(e);

    if (this.state.email.length === 0 || !(/\S+@\S+\.\S+/.test(this.state.email))) {
      this.handleError('Invalid email');
      return;
    }

    this.setState({
      buttonText: 'Processing'
    });

    request('/mailing/signup', this.state, (response) => {
      if (response.success) {
        this.setState({
          buttonText: 'Success!'
        });

        if (this.props.onSignup) {
          this.props.onSignup(e);
        }
      } else {
        if (response.err) {
          this.handleError(response.err);
        }
      }
    });
  }

  handleError = (error) => {
    this.setState({
      buttonText: error
    });
  }

  render () {
    return (
      <form className={"form__row--inline " + (this.props.customClasses ? this.props.customClasses : '')}>
        <div className="mailing__input-section">
          <input className="input input--small u--center-mobile" type="email" name="email"  id="email" placeholder="Enter your email address" onChange={this.handleChange} value={this.state.email} />
        </div>

        <div className="form__hidden" aria-hidden="true">
          <input type="text" name="b_5e9c643a20b49926773037101_a878f779fc" tabIndex="-1" onChange={this.handleChange} value={this.state.hidden} />
        </div>

        <div className="mailing__button-section">
          <button
            type="submit"
            name="subscribe"
            className="button button--small"
            onClick={this.handleSubmit}
            data-ga-category="Footer"
            data-ga-action="click"
            data-ga-label="Get Updates!"
          >
            {this.state.buttonText}
          </button>
        </div>
      </form>
    );
  }
}

Mailing.propTypes = {
  customClasses: PropTypes.string,
  onSignup: PropTypes.func
};

export default Mailing;