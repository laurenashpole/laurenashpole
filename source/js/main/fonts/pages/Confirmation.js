import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { request } from '../../../utilities/request';

class Confirmation extends Component {
  constructor (props) {
    super(props);

    this.state = {
      payment: null,
      errorHeading: 'Processing your order...',
      errorMessage: 'One second.'
    };
  }

  componentDidMount () {
    this.setFont();
  }

  setFont = () => {
    const endpoint = this.props.location.pathname + this.props.location.search;

    if (!this.props.font) {
      this.setState({
        errorHeading: 'Sorry, I can\'t find your font',
        errorMessage: `If you think you previously purchased a font but aren't sure about the URL, email me at <a href="mailto:lauren@laurenashpole.com" title="lauren@laurenashpole.com">lauren@laurenashpole.com</a> and I'll try to sort it out.`
      });

      return;
    }

    request(endpoint, this.props.font, (response) => {
      if (response.success) {
        this.setState({
          payment: response.payment
        });
      } else {
        this.setState({
          errorHeading: 'Sorry, this page is no longer available.',
          errorMessage: `If you previously purchased ${this.props.font.name} and need another copy of the commercial file or have any other questions, just email me at <a href="mailto:lauren@laurenashpole.com" title="lauren@laurenashpole.com">lauren@laurenashpole.com</a>.`
        });
      }
    });
  }

  render () {
    return(
      <main className="main main--bg-fixed container container--medium">
        <Helmet>
          <title>Thanks for your purchase! - Fonts - Lauren Ashpole</title>
        </Helmet>

        {this.state.payment ? (
          <div className="well well--extra-padding">
            <h2>Thank you for purchasing {this.props.font.name}!</h2>

            <p>Download the commercial version of your font <a href={`/uploads/fonts/${this.props.font.commercial_font_file}`}>here</a>. A copy will also be emailed to {this.state.payment.payer.payer_info.email}.</p>

            <p>If you have any questions about your purchase, view the <Link to="/fonts/licensing" title="Licensing">licensing details</Link> or the <Link to="/fonts/eula" title="EULA">EULA</Link> or email me at <a href="mailto:lauren@laurenashpole.com" title="lauren@laurenashpole.com">lauren@laurenashpole.com</a>.</p>
          </div>
        ) : (
          <div className="well well--extra-padding">
            <h2>{this.state.errorHeading}</h2>
            <p dangerouslySetInnerHTML={{__html: this.state.errorMessage}}></p>
          </div>
        )}
      </main>
    );
  }
}

Confirmation.propTypes = {
  match: PropTypes.object,
  location: PropTypes.object,
  font: PropTypes.object
};

export default Confirmation;