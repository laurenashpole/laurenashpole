import React, { Component, Fragment } from 'react';
import Modal from '../../../components/Modal';
import Mailing from '../../components/Mailing';

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

      document.documentElement.style.overflow = 'hidden';

      this.setState({
        showModal: true
      });
    }
  }

  handleCloseClick = (e) => {
    e.preventDefault();

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
        {this.props.font.personal_font_file &&
          <a href={`/downloads/fonts/${this.props.font.personal_font_file}`} className="button button--outline text--medium" onClick={this.handleOpenClick} data-ga-category={`${this.props.font.name} Page`} data-ga-action="click"
          >
            <div className="button__text">
              Download
              <div className="text--extra-small">$0 Personal Use</div>
            </div>
          </a>
        }

        <Modal rootId="downloadModalRoot" isVisible={this.state.showModal} onCloseEvent={this.handleClose}>
          <h3 className="text--uppercase">Want updates when new fonts are added?</h3>
          <p className="text--medium">I promise you'll only hear from me when I have something you can try.</p>

          <div className="modal__form">
            <Mailing onSignup={this.handleCloseClick} />
          </div>

          <a
              href="javascript:void(0);"
              className="text--medium"
              onClick={this.handleCloseClick}
              data-ga-category="{{font.name}} Page"
              data-ga-action="click"
              data-ga-label="Finish Download"
          >
              Nope, just download the font.
          </a>
        </Modal>
      </Fragment>
    );
  }
};

export default Download;