import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { request } from '../../../shared/utils/request';
import { eeEvent } from '../../../utils/tracking';
import Well from '../../../shared/components/Well';
import Layout from '../../../components/layout/Layout';

const Confirm = () => {
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(true);
  const [payment, setPayment] = useState({});
  const [font, setFont] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    if (router.query['PayerID'] && router.query.paymentId) {
      handleRender(router.query);
    }
  }, [router.query]);

  const handleRender = async (query) => {
    try {
      const { paymentId, PayerID, fulfilled } = query;

      const response = await request({
        endpoint: '/api/payments/confirm',
        body: JSON.stringify({
          paymentId: paymentId,
          payerId: PayerID,
          fulfilled: fulfilled || false
        })
      });

      window.history.replaceState(null, null, `?paymentId=${paymentId}&PayerID=${PayerID}&fulfilled=true`);
      setPayment(response.payment);
      setFont(response.font);
      setIsProcessing(false);
      eeEvent(response.font, null, null, 'purchase', { id: paymentId, revenue: response.font.price.toString() });
    } catch (err) {
      setError(err.message);
      setIsProcessing(false);
    }
  };

  return (
    <Layout title="Thank you for your purchase! - Fonts">
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <Well size="medium">
        <h1>
          {isProcessing ? (
            'Processing your order...'
          ) : (
            error ? 'Oops, something went wrong!' : `Thank you for purchasing ${font.name}!`
          )}
        </h1>

        <div>
          {isProcessing ? (
            <p>Just one sec! Connecting to PayPal and finding your font.</p>
          ) : (
            error ? (
              <p>The page may have expired. If you previously purchased a font and need another copy of the commercial file, or if you have any other questions, just email me at <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`} title={process.env.NEXT_PUBLIC_EMAIL}>{process.env.NEXT_PUBLIC_EMAIL}</a>.</p>
            ) : (
              <>
                <p>Download the commercial version of your font <a href={`/uploads/fonts/${font.commercial_font_file}`}>here</a>. A copy will also be emailed to {payment.payer.payer_info.email}.</p>

                <p>If you have any questions about your purchase, visit the <Link href="/fonts/licensing"><a>licensing details</a></Link> or the <Link href="/fonts/eula"><a>EULA</a></Link> or email me at <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`} title={process.env.NEXT_PUBLIC_EMAIL}>{process.env.NEXT_PUBLIC_EMAIL}</a>.</p>
              </>
            )
          )}
        </div>
      </Well>
    </Layout>
  );
};

export default Confirm;