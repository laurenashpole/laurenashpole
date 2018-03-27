import React, { Component } from 'react';
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
    sendEvent(e);

    this.setState({
      isProcessing: true
    });

    request(`/fonts/${this.props.font.slug}/payment`, this.props.font, (response) => {
      if (response.success) {
        document.location = response.redirectUrl;
      }
    });
  }

  render () {
    return(
      <button
        type="submit"
        title="Buy Now"
        className={"button button--cta-primary text--medium" + (this.state.isProcessing ? ' is-processing' : '')}
        onClick={this.handleClick}
        data-ga-category={`${this.props.font.name} Page`}
        data-ga-action="click"
        data-ga-label="Buy Now"
      >
        <div className="button__text">
          Purchase
          <div className="text--extra-small">${this.props.font.price} Commercial Use</div>
        </div>
      </button>
    );
  }
}

export default Purchase;