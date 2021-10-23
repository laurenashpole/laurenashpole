import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { createOrder, approveOrder } from '../../utils/checkout';
import { eeEvent } from '../../utils/tracking';

const Checkout = ({ cart }) => {
  return (
    <PayPalScriptProvider options={{ 'client-id': process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID, currency: 'USD' }}>
      <PayPalButtons createOrder={(data, actions) => createOrder(actions, cart)} onApprove={approveOrder} onClick={() => eeEvent(cart.items, 0, 'checkout', 'checkout', { step: 1 })} />
    </PayPalScriptProvider>
  );
};

Checkout.propTypes = {
  cart: PropTypes.object
};

export default Checkout;