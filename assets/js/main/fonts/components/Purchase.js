import React, { Component, Fragment } from 'react';
import { request } from '../../../utilities/request';
import { sendEvent } from '../../../utilities/analytics';

class Purchase extends Component {
  handleClick = (e) => {
    e.preventDefault();
    sendEvent(e);

    request(`/fonts/${this.props.font.slug}/payment`, this.props.font, (response) => {
      if (response.success) {
        document.location = response.redirectUrl;
      }
    });
  }

  render () {
    return(
      <Fragment>
        {this.props.font.commercial_font_file &&
          <button
            type="submit"
            title="Buy Now"
            className="button button--cta-primary text--medium"
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
        }
      </Fragment>
    );
  }
}

export default Purchase;