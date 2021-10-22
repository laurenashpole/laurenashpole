import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createOrder, approveOrder } from '../../utils/checkout';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const Checkout = ({ cart }) => {
  return (
    <PayPalScriptProvider options={{ 'client-id': process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID, currency: 'USD' }}>
      <PayPalButtons createOrder={(data, actions) => createOrder(data, actions, cart)} onApprove={approveOrder} />
    </PayPalScriptProvider>
  );
};

Checkout.propTypes = {
  cart: PropTypes.object
};

export default Checkout;