import React, { Component } from 'react';
import Growl from '../../../components/Growl';
import { request } from '../../../utilities/request';

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

    request(this.props.action, this.state, (response) => {
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
    this.setState({error})
  }

  render () {
    return(
      <form method="post" action="{this.props.action}" onSubmit={this.handleSubmit}>
        {this.state.error && <Growl message={this.state.error}/>}

        <div className="well">        
          <div className="form__row">
            <input type="text" id="username" name="username" onChange={this.handleChange} value={this.state.username} className="input input--label-inset" />
            <label htmlFor="name" className="text--uppercase text--extra-bold">Username</label>
          </div>

          <div className="form__row">
            <input type="password" id="password" name="password" onChange={this.handleChange} value={this.state.password} className="input input--label-inset" />
            <label htmlFor="password" className="text--uppercase text--extra-bold">Password</label>
          </div>

          <div className="form__row">
            <button type="submit" className="button button--cta-primary button--hover-border text--uppercase text--extra-bold">
              {this.props.buttonText}
            </button>
          </div>
        </div>
      </form>
    )
  }
};

export default Form;