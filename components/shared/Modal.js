import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import Well from '../../shared/components/Well';
import styles from './Modal.styles.js';

const Modal = ({ children, name, isActive, onClose }) => {
  const modalRef = useRef(null);
  const portalRef = useRef(null);
  const firstFocusEl = useRef(null);
  const lastFocusEl = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    portalRef.current = document.createElement('div');
    document.body.appendChild(portalRef.current);
    return () => document.body.removeChild(portalRef.current);
  }, []);

  useEffect(() => {
    if (isActive) {
      document.addEventListener('keydown', handleKeydown);
      document.documentElement.style.overflow = 'hidden';
      [firstFocusEl.current, lastFocusEl.current] = getFocusEls();

      setTimeout(() => {
        setIsVisible(true);
      }, 100);
    }

    return () => {
      document.removeEventListener('keydown', handleKeydown);
      document.documentElement.style.overflow = 'auto';
      setIsVisible(false);
    };
  }, [isActive]);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        firstFocusEl.current.focus();
      }, 100);
    }
  }, [isVisible]);

  const handleKeydown = (e) => {
    if (e.keyCode === 27) {
      e.preventDefault();
      onClose();
    }

    if (e.keyCode === 9) {
      handleTab(e);
    }
  };

  const handleTab = (e) => {
    if (e.shiftKey) {
      if (document.activeElement === firstFocusEl.current) {
        e.preventDefault();
        lastFocusEl.current.focus();
      }
    } else {
      if (document.activeElement === lastFocusEl.current) {
        e.preventDefault();
        firstFocusEl.current.focus();
      }
    }
  };

  const handleClick = (e) => {
    if (!modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  const getFocusEls = () => {
    const els = modalRef.current.querySelectorAll('[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])');
    return [els[0], els[els.length - 1]];
  };

  if (!portalRef || !portalRef.current) {
    return '';
  }

  return createPortal(
    <div className={`modal ${isVisible ? 'modal--visible' : ''}`} onClick={handleClick}>
      <div className="modal__content" id={name ? `${name}Modal` : null} ref={modalRef} aria-hidden={!isVisible} aria-labelledby={name ? `${name}ModalHeading` : null} role="dialog">
        <div className="modal__well">
          <Well size="small">
            {children}
          </Well>
        </div>
      </div>

      <style jsx global>
        {styles}
      </style>
    </div>,
    portalRef.current
  );
};

Modal.propTypes = {
  children: PropTypes.any,
  name: PropTypes.string,
  isActive: PropTypes.bool,
  onClose: PropTypes.func
};

export default Modal;