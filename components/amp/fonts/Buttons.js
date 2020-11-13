import PropTypes from 'prop-types';
import Link from 'next/link';
import Button from '../../shared/Button';
import styles from '../../fonts/buttons.styles.js';

const Buttons = ({ font }) => {
  return(
    <form method="post" action-xhr="/api/amp/payments/create" target="_top">
      <div className="buttons">
        <Link href={`/uploads/fonts/${font.personal_font_file}`}>
          <a className="btn btn--outline" data-ga-action="download">
            Download <span>Free Personal Use</span>
          </a>
        </Link>

        <Button type="primary" attributes={{ type: 'submit', 'data-ga-action': 'purchase' }}>
          Purchase <span>${font.price} Commercial Use</span>
        </Button>

        <input className="hidden" name="font" defaultValue={JSON.stringify(font)} type="text" tabIndex="-1" aria-hidden="true" />

        <style jsx global>
          {styles}
        </style>
      </div>
    </form>
  );
};

Buttons.propTypes = {
  font: PropTypes.object
};

export default Buttons;