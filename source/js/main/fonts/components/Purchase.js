import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { request } from '../../../utilities/request';
import { sendEvent } from '../../../utilities/analytics';

class Purchase extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isProcessing: false
    };
  }

  handleClick = (e) => {
    e.preventDefault();
    sendEvent(`${this.props.font.name} Page`, 'click', 'Buy Now');

    this.setState({
      isProcessing: true
    });

    request(`/fonts/${this.props.font.slug}/payment`, this.props.font, (response) => {
      if (response.redirectUrl) {
        document.location = response.redirectUrl;
      }
    });
  }

  render () {
    return(
      <button className={`button button--cta-primary text--medium ${this.state.isProcessing ? ' is-processing' : ''}`} type="submit" onClick={this.handleClick}>
        <div className="button__text">
          Purchase
          <div className="text--extra-small">${this.props.font.price} Commercial Use</div>
        </div>
      </button>
    );
  }
}

Purchase.propTypes = {
  font: PropTypes.object
};

export default Purchase;