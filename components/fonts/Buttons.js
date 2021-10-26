import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { eeEvent } from '../../utils/tracking';
import { addItem } from '../../utils/cart';
import Mailing from '../../shared/components/Mailing';
import Button from '../../shared/components/Button';
import Modal from '../shared/Modal';
import styles from './Buttons.styles.js';

const Buttons = ({ font }) => {
  const downloadRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

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

  const handleAdd = () => {
    addItem(font);
    eeEvent([{...font, quantity: 1}], null, 'add');
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
        <Button style="primary" onClick={handleAdd} attributes={{ type: 'submit', 'data-ga-click': true, 'data-ga-category': 'font page' }}>
          Add To Cart <span>${font.price} Commercial Use</span>
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