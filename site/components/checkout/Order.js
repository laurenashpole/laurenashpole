import Link from 'next/link';
import PropTypes from 'prop-types';

import Summary from '../shared/Summary';
import styles from './Order.module.css';

const Order = ({ order }) => {
  return (
    <div className={styles.container}>
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
          <Link
            href="/fonts/licensing"
            data-ga-click="true"
            data-ga-category="confirm"
          >
            licensing details
          </Link>{' '}
          or the{' '}
          <Link
            href="/fonts/eula"
            data-ga-click="true"
            data-ga-category="confirm"
          >
            EULA
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

      <div className={styles.summary}>
        <Summary
          header="Downloads"
          items={order.fonts.map((font) => {
            return {
              ...font,
              downloadPath: `${font.downloads.commercial.file.url}?dl=`,
            };
          })}
          name="confirm"
        />
      </div>
    </div>
  );
};

Order.propTypes = {
  order: PropTypes.object,
};

export default Order;
