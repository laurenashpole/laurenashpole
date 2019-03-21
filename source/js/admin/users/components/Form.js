import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'whatwg-fetch';
import Growl from '../../../components/Growl';

class Form extends Component {
  constructor (props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      error: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    window.fetch(this.props.endpoint, {
      credentials: 'include',
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(this.state)
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }

      this.handleError(response.status);
    }).then((response) => {
      if (response.success) {
        location.reload();
      } else {
        if (response.err) {
          this.handleError(response.err);
        }
      }
    });
  }

  handleError = (error) => {
    this.setState({
      error: error
    })
  }

  render () {
    return(
      <form onSubmit={this.handleSubmit}>
        {this.state.error && <Growl message={this.state.error}/>}

        <div className="well">
          <div className="form__row">
            <input type="text" id="username" name="username" onChange={this.handleChange} value={this.state.username} className="input input--label-inset" />
            <label htmlFor="name">Username</label>
          </div>

          <div className="form__row">
            <input type="password" id="password" name="password" onChange={this.handleChange} value={this.state.password} className="input input--label-inset" />
            <label htmlFor="password">Password</label>
          </div>

          <div className="form__row">
            <button type="submit" className="button button--cta-primary">
              {this.props.buttonText}
            </button>
          </div>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  endpoint: PropTypes.string,
  buttonText: PropTypes.string
};

export default Form;