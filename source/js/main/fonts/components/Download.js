import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Mailing from '../../components/Mailing';
import Modal from './Modal';
import { sendEvent } from '../../../utilities/analytics';

class Download extends Component {
  constructor (props) {
    super(props);

    this.state = {
      showModal: false,
      disableModal: window.localStorage.getItem('hideEmailModal') || false
    };
  }

  handleOpenClick = (e) => {
    if (!this.state.disableModal) {
      e.preventDefault();
      sendEvent(`${this.props.font.name} Page`, 'click', 'Download');

      document.documentElement.style.overflow = 'hidden';

      this.setState({
        showModal: true
      });
    }
  }

  handleCloseClick = (e) => {
    e.preventDefault();
    sendEvent(`${this.props.font.name} Page`, 'click', 'Finish Download');

    this.handleClose();
    window.localStorage.setItem('hideEmailModal', true);
    window.location = `/downloads/fonts/${this.props.font.personal_font_file}`;

    this.setState({
      disableModal: true
    });
  }

  handleClose = () => {
    document.documentElement.style.overflow = 'auto';

    this.setState({
      showModal: false
    });
  }

  render () {
    return(
      <Fragment>
        <a href={`/downloads/fonts/${this.props.font.personal_font_file}`} className="button button--outline text--medium" onClick={this.handleOpenClick}>
          <div className="button__text">
            Download
            <div className="text--extra-small">Free Personal Use</div>
          </div>
        </a>

        <Modal rootId="downloadModalRoot" isVisible={this.state.showModal} onCloseEvent={this.handleClose}>
          <h3 className="text--uppercase">Want updates when new fonts are added?</h3>
          <p className="text--medium">I promise you&apos;ll only hear from me when I have something you can try.</p>

          <div className="modal__form">
            <Mailing onSignup={this.handleCloseClick} />
          </div>

          <a href="javascript:void(0);" className="text--medium" onClick={this.handleCloseClick}>
            Nope, just download the font.
          </a>
        </Modal>
      </Fragment>
    );
  }
}

Download.propTypes = {
  font: PropTypes.object
};

export default Download;