import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  constructor (props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount () {
    document.getElementById(this.props.rootId).appendChild(this.el);
    document.addEventListener('keydown', this.handleKeydown, false);
  }

  componentWillUnmount () {
    document.getElementById(this.props.rootId).removeChild(this.el);
    document.removeEventListener('keydown', this.handleKeydown, false);
  }

  handleKeydown = (e) => {
    if (e.keyCode === 27) {
      e.preventDefault();

      if (this.props.onCloseEvent) {
        this.props.onCloseEvent();
      }
    }
  }

  handleBackgroundClick = (e) => {
    if (e.target.classList.contains('modal')) {
      if (this.props.onCloseEvent) {
        this.props.onCloseEvent();
      }
    }
  }

  render() {
    return createPortal(
      <div className={"modal" + (this.props.isVisible ? ' modal--open' : '')} onClick={this.handleBackgroundClick}>
        <div className="modal__well">
          <div className="modal__content">
            {this.props.children}
          </div>
        </div>
      </div>,
      this.el,
    );
  }
}

Modal.propTypes = {
  rootId: PropTypes.string,
  children: PropTypes.element,
  isVisible: PropTypes.bool,
  onCloseEvent: PropTypes.func
};

export default Modal;