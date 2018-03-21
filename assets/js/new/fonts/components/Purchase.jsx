import React, { Component } from 'react';
import { request } from '../../../utilities/request';

class Purchase extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    request(`/fonts/${this.props.font.slug}/payment`, this.props.font, (response) => {
      if (response.success) {
        document.location = response.redirectUrl;
      } else {
        if (response.err) {
          console.log(response);
        }
      }
    });
  }

  render () {
    return(
      <form className="text--medium" method="post" action={`/fonts/${this.props.font.slug}/payment`}>
        {this.props.font.commercial_font_file &&
          <button
            type="submit"
            title="Buy Now"
            className="button button--cta-primary"
            data-ga-category={`${this.props.font.name} Page`}
            data-ga-action="click"
            data-ga-label="Buy Now"
            onClick={this.handleSubmit}
          >
            <div className="button__text">
              Purchase
              <div className="text--extra-small">${this.props.font.price} Commercial Use</div>
            </div>
          </button>
        }
      </form>
    );
  }
};

export default Purchase;