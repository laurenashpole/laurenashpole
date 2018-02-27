import React, { Component } from 'react';

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

    if (this.state.email.length === 0 || !(/\S+@\S+\.\S+/.test(this.state.email))) {
      this.handleError('Invalid email');
      return;
    }

    request('/mailing/signup', this.state, (response) => {
      if (response.success) {
        console.log(response);
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
      <div className="footer__form-section">
        <form method="post" className="footer__form form__row--inline" onSubmit={this.handleSubmit}>
          <div className="footer__input-section">
            <input type="email" name="email" className="input input--small u--center-mobile" id="email" placeholder="Enter your email address" onChange={this.handleChange} value={this.state.email} />
          </div>

          <div className="form__hidden" aria-hidden="true">
            <input type="text" name="b_5e9c643a20b49926773037101_a878f779fc" tabIndex="-1" onChange={this.handleChange} value={this.state.hidden} />
          </div>

          <div className="footer__button-section">
            <button
              type="submit"
              name="subscribe"
              className="button button--small js-ga-trigger"
              data-ga-category="Footer"
              data-ga-action="click"
              data-ga-label="Get Updates!"
            >
              {this.state.buttonText}
            </button>
          </div>
        </form>
      </div>
    )
  }
};

export default Mailing;
