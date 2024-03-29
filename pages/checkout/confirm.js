import { useEffect } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { getOrder } from '../../utils/checkout';
import { request } from '../../shared/utils/request';
import { ga4Event } from '../../utils/ga4';
import Well from '../../shared/components/Well';
import Layout from '../../components/layout/Layout';
import Order from '../../components/checkout/Order';

const Confirm = ({ order }) => {
  const router = useRouter();

  useEffect(() => {
    if (router.query.sendFiles && !order.error) {
      window.history.replaceState(null, null, `?orderId=${order.orderId}`);
      handleMailing(order.payer.email_address);
      ga4Event('purchase', order.items, null, { transaction_id: order.orderId, value: order.amount.value });
    }
  }, [router.query, order]);

  const handleMailing = async (email) => {
    try {
      await request({
        endpoint: '/api/mailing',
        body: JSON.stringify({ email })
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Layout meta={{ title: 'Thank you for ordering! - Fonts' }}>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <Well size="medium">
        <h1>
          {(order.error || !order.fonts) ? 'Oops, something went wrong!' : 'Thank you for ordering!'}
        </h1>

        <div>
          {(order.error || !order.fonts) ? (
            <p>The page may have expired. If you previously purchased a font and need another copy of the commercial file, or if you have any other questions about your order, just email me at <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`} title={process.env.NEXT_PUBLIC_EMAIL}>{process.env.NEXT_PUBLIC_EMAIL}</a>.</p>
          ) : (
            <Order order={order} />
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