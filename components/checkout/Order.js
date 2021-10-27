import PropTypes from 'prop-types';
import Link from 'next/link';
import Summary from '../shared/Summary';
import styles from './Order.styles.js';

const Order = ({ order }) => {
  return (
    <div className="order">
      <div>
        <p>Your purchase was processed via PayPal with the order number {order.orderId}.</p>
        <p>If you want web fonts and additional characters (where applicable), don't leave this page without downloading the commercial files. Those will also be emailed as attachments to {order.payee.email_address}. If you have any questions about your purchase, visit the <Link href="/fonts/licensing"><a>licensing details</a></Link> or the <Link href="/fonts/eula"><a>EULA</a></Link> or email me at <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`} title={process.env.NEXT_PUBLIC_EMAIL}>{process.env.NEXT_PUBLIC_EMAIL}</a></p>
      </div>

      <div className="order__summary">
        <Summary header="Downloads" items={order.fonts.map((font) => { return { ...font, downloadPath: `/uploads/fonts/${font.commercial_font_file}` }; })} />
      </div>

      <style jsx global>
        {styles}
      </style>
    </div>
  );
};

Order.propTypes = {
  order: PropTypes.object
};

export default Order;