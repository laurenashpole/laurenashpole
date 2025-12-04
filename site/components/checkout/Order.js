import Link from 'next/link';
import PropTypes from 'prop-types';

import Summary from '../shared/Summary';
import styles from './Order.styles.js';

const Order = ({ order }) => {
  return (
    <div className="order">
      <div>
        <p>
          Your purchase was processed via PayPal with the order number{' '}
          {order.orderId}.
        </p>
        <p>
          If you want web fonts and additional characters (where applicable),
          don&apos;t forget to download the commercial files before leaving this
          page. They will also be emailed as attachments to{' '}
          {order.payer.email_address}. If you have any questions about your
          purchase, visit the{' '}
          <Link href="/fonts/licensing">
            <a data-ga-click="true" data-ga-category="confirm">
              licensing details
            </a>
          </Link>{' '}
          or the{' '}
          <Link href="/fonts/eula">
            <a data-ga-click="true" data-ga-category="confirm">
              EULA
            </a>
          </Link>{' '}
          or email me at{' '}
          <a
            href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
            title={process.env.NEXT_PUBLIC_EMAIL}
          >
            {process.env.NEXT_PUBLIC_EMAIL}
          </a>
        </p>
      </div>

      <div className="order__summary">
        <Summary
          header="Downloads"
          items={order.fonts.map((font) => {
            return {
              ...font,
              downloadPath: font.downloads.commercial.file.url,
            };
          })}
          name="confirm"
        />
      </div>

      <style jsx global>
        {styles}
      </style>
    </div>
  );
};

Order.propTypes = {
  order: PropTypes.object,
};

export default Order;
