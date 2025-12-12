import { useRef, useState } from 'react';

import Button from '../../../shared/components/Button';
import Mailing from '../../../shared/components/Mailing';
import { addItem } from '../../utils/cart';
import { ga4Event } from '../../utils/ga4';
import Modal from '../shared/Modal';
import styles from './Buttons.module.css';

const Buttons = ({ font }) => {
  const downloadRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    if (!window.localStorage.getItem('hasReferrer')) {
      return setShowModal(true);
    }

    window.location = `${font.downloads.personal.file.url}?dl=`;
  };

  const handleModalClose = (startDownload) => {
    if (startDownload) {
      window.localStorage.setItem('hasReferrer', true);
      window.location = `${font.downloads.personal.file.url}?dl=`;
    }

    downloadRef.current.focus();
    setShowModal(false);
  };

  const handleAdd = () => {
    addItem(font);
    ga4Event('add_to_cart', [{ ...font, qty: 1 }], null, { value: font.price });
  };

  return (
    <div className={styles.container}>
      {(font.downloads.personal.file || {}).url && (
        <>
          <Button
            style="outline"
            onClick={handleModalOpen}
            attributes={{
              type: 'button',
              'aria-expanded': showModal,
              'aria-controls': 'mailingListModal',
              'data-ga-click': true,
              'data-ga-category': 'font page',
            }}
            ref={downloadRef}
          >
            Download <span>Free Personal Use</span>
          </Button>

          <Modal
            name="mailingList"
            isActive={showModal}
            onClose={handleModalClose}
          >
            <h3 id="mailingListModalHeading">
              Can I email you
              <br />
              about new fonts?
            </h3>

            <div>
              <p>
                I promise you&apos;ll only hear from me when I have something
                you can try.
              </p>
              <Mailing
                location="modal"
                onSignup={() => handleModalClose(true)}
              />
              <Button
                style="link"
                onClick={() => handleModalClose(true)}
                attributes={{
                  type: 'button',
                  'data-ga-click': true,
                  'data-ga-category': 'modal',
                }}
              >
                Nope, just download the font.
              </Button>
            </div>
          </Modal>
        </>
      )}

      {(font.downloads.commercial.file || {}).url && (
        <Button
          style="primary"
          onClick={handleAdd}
          attributes={{
            type: 'submit',
            'data-ga-click': true,
            'data-ga-category': 'font page',
          }}
        >
          Add To Cart{' '}
          <span>
            {font.sale_price && (
              <span className={styles.price}>${font.sale_price}</span>
            )}
            <span className={styles.price}>${font.price}</span> Commercial Use
          </span>
        </Button>
      )}
    </div>
  );
};

export default Buttons;
