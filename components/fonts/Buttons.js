import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { request } from '../../shared/utils/request';
import { eeEvent } from '../../utils/tracking';
import Mailing from '../../shared/components/Mailing';
import Button from '../../shared/components/Button';
import Loader from '../shared/Loader';
import Modal from '../shared/Modal';
import styles from './buttons.styles.js';

const Buttons = ({ font }) => {
  const downloadRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleModalOpen = () => {
    if (!window.localStorage.getItem('hasReferrer')) {
      return setShowModal(true);
    }

    window.location = `/uploads/fonts/${font.personal_font_file}`;
  };

  const handleModalClose = (startDownload) => {
    if (startDownload) {
      window.localStorage.setItem('hasReferrer', true);
      window.location = `/uploads/fonts/${font.personal_font_file}`;
    }

    downloadRef.current.focus();
    setShowModal(false);
  };

  const handlePurchase = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      const response = await request({
        endpoint: '/api/payments/create',
        body: JSON.stringify({ font })
      });

      if (response.redirect) {
        eeEvent(font, 0, 'checkout', 'checkout', { step: 1 });
        window.location = response.redirect;
      }
    } catch (err) {
      setIsProcessing(false);
    }
  };

  return(
    <div className="buttons">
      {font.personal_font_file &&
        <>
          <Button style="outline" onClick={handleModalOpen} attributes={{ type: 'button', 'aria-expanded': showModal, 'aria-controls': 'mailingListModal', 'data-ga-click': true, 'data-ga-category': 'font page' }} ref={downloadRef}>
            Download <span>Free Personal Use</span>
          </Button>

          <Modal name="mailingList" isActive={showModal} onClose={handleModalClose}>
            <h3 id="mailingListModalHeading">Can I email you about new fonts?</h3>

            <>
              <p>I promise you&apos;ll only hear from me when I have something you can try.</p>
              <Mailing location="modal" onSignup={() => handleModalClose(true)} />
              <Button style="link" onClick={() => handleModalClose(true)} attributes={{ type: 'button', 'data-ga-click': true, 'data-ga-category': 'modal' }}>Nope, just download the font.</Button>
            </>
          </Modal>
        </>
      }

      {font.commercial_font_file &&
        <Button style="primary" onClick={handlePurchase} attributes={{ type: 'submit', disabled: isProcessing, 'data-ga-click': true, 'data-ga-category': 'font page' }}>
          {isProcessing ? <Loader /> : (
            <>Purchase <span>${font.price} Commercial Use</span></>
          )}
        </Button>
      }

      <style jsx global>
        {styles}
      </style>
    </div>
  );
};

Buttons.propTypes = {
  font: PropTypes.object
};

export default Buttons;