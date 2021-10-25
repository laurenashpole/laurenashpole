import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { getOrder } from '../../../utils/payments';
import { eeEvent } from '../../../utils/tracking';
import Well from '../../../shared/components/Well';
import Layout from '../../../components/layout/Layout';
import Summary from '../../../components/shared/Summary';

const Confirm = ({ order }) => {
  const router = useRouter();

  useEffect(() => {
    if (router.query.sendFiles && !order.error) {
      window.history.replaceState(null, null, `?orderId=${order.orderId}`);
      eeEvent([order.fonts], null, null, 'purchase', { id: order.orderId, revenue: order.amount.value });
    }
  }, [router.query]);

  return (
    <Layout title="Thank you for your purchase! - Fonts">
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <Well size="medium">
        <h1>
          {(order.error || !order.fonts) ? 'Oops, something went wrong!' : `Thank you for ordering!`}
        </h1>

        <div>
          {(order.error || !order.fonts) ? (
            <p>The page may have expired. If you previously purchased a font and need another copy of the commercial file, or if you have any other questions about your order, just email me at <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`} title={process.env.NEXT_PUBLIC_EMAIL}>{process.env.NEXT_PUBLIC_EMAIL}</a>.</p>
          ) : (
            <>
              <p>Your purchase was processed via PayPal with the order number {order.orderId} and included the following fonts:</p>
              <Summary items={order.fonts.map((font) => { return { ...font, downloadPath: `/uploads/fonts/${font.commercial_font_file}` }; })} />
              <p>You can download the commercial and web versions of your font{order.fonts.length === 1 ? '' : 's'} above. They will also be emailed as attachments to {order.payee.email_address}. If you have any questions about your purchase, visit the <Link href="/fonts/licensing"><a>licensing details</a></Link> or the <Link href="/fonts/eula"><a>EULA</a></Link> or email me at <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`} title={process.env.NEXT_PUBLIC_EMAIL}>{process.env.NEXT_PUBLIC_EMAIL}</a>.</p>
            </>
          )}
        </div>
      </Well>
    </Layout>
  );
};

export async function getServerSideProps ({ query }) {
  const order = await getOrder(query.orderId, query.sendFiles);

  return {
    props: {
      order: JSON.parse(JSON.stringify(order)),
    }
  };
}

Confirm.propTypes = {
  order: PropTypes.object
};

export default Confirm;