import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { request } from '../../utilities/request';

class Confirmation extends Component {
  constructor (props) {
    super(props);

    this.state = {
      payment: null,
      font: this.props.fonts.find((font) => font.slug === this.props.match.params.slug),
      errorHeading: 'Processing your order...',
      errorMessage: 'One second.'
    };
  }

  componentDidMount () {
    this.setFont();
  }

  setFont = () => {
    let endpoint = this.props.location.pathname + this.props.location.search;

    if (!this.state.font) {
      this.setState({
        errorHeading: 'Sorry, I can\'t find your font',
        errorMessage: `If you think you previously purchased a font but aren't sure about the URL, email me at <a href="mailto:lauren@laurenashpole.com" title="lauren@laurenashpole.com">lauren@laurenashpole.com</a> and I'll try to sort it out.`
      });

      return;
    }

    request(endpoint, this.state.font, (response) => {
      if (response.success) {
        this.setState({
          payment: response.payment
        });
      } else {
        this.setState({
          errorHeading: 'Sorry, this page is no longer available.',
          errorMessage: `If you previously purchased ${this.state.font.name} and need another copy of the commercial file or have any other questions, just email me at <a href="mailto:lauren@laurenashpole.com" title="lauren@laurenashpole.com">lauren@laurenashpole.com</a>.`
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
            <h2>Thank you for purchasing {this.state.font.name}!</h2>

            <p>Download the commercial version of your font <a href={`/downloads/fonts/${this.state.font.commercial_font_file}`}>here</a>. A copy will also be emailed to {this.state.payment.payer.payer_info.email}.</p>

            <p>If you have any questions about your purchase, view the <Link to="/fonts/licensing" title="Licensing">licensing details</Link> or the <Link to="/fonts/eula" title="EULA">EULA</Link> or email me at <a href="mailto:lauren@laurenashpole.com" title="lauren@laurenashpole.com">lauren@laurenashpole.com</a>.</p>
          </div>
        ) : (
          <div className="well well--extra-padding">
            <h2>{this.state.errorHeading}</h2>
            <p dangerouslySetInnerHTML={{ __html: this.state.errorMessage }}></p>
          </div>
        )}
      </main>
    );
  }
}

export default Confirmation;