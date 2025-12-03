import { useEffect, useRef, useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { addItem, getCart, removeItem, createOrder, approveOrder } from '../../utils/cart.js';
import { ga4Event } from '../../utils/ga4.js';
import Button from '../../../shared/components/Button';
import Modal from '../shared/Modal';
import Summary from '../shared/Summary';
import Errors from '../shared/Errors';
import styles from './Cart.styles.js';
import SrOnly from '../../../shared/components/SrOnly.js';

const Cart = () => {
  const isMount = useRef(true);
  const [cart, setCart] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [checkoutState, setCheckoutState] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    setCart(getCart());
    document.addEventListener('updateCart', handleUpdate);
    return () => document.removeEventListener('updateCart', handleUpdate);
  }, []);

  useEffect(() => {
    if (cart.count && !isMount.current && !showModal) {
      setShowModal(true);
      ga4Event('view_cart', cart.items, null, { value: cart.total });
    }
  }, [cart]);

  const handleShow = () => {
    setError('');
    setShowModal(true);
    ga4Event('view_cart', cart.items, null, { value: cart.total });
  };

  const handleUpdate = () => {
    setError('');
    isMount.current = false;
    setCart(getCart());
  };

  const handleAdd = (item) => {
    addItem(item);
    ga4Event('add_to_cart', [{ ...item, qty: 1 }], null, { value: cart.total + (item.sale_price || item.price) });
  };

  const handleRemove = (item, qty) => {
    removeItem(item, qty);
    ga4Event('remove_from_cart', [{ ...item, qty: qty }], null, { value: cart.total - (item.sale_price || item.price) });
  };

  const handleError = () => {
    setError('There was an error processing your order.<br/>Please try again.');
    setCheckoutState('');
  };

  const handleClick = () => {
    ga4Event('begin_checkout', cart.items, null, { value: cart.total });
  };

  const handleCreateOrder = (data, actions) => {
    setError('');
    setCheckoutState('active');
    return createOrder(actions, cart);
  };

  const handleApprove = (data, actions) => {
    return approveOrder(data, actions, (orderData) => {
      setCheckoutState('complete');
      window.location = `/checkout/confirm?orderId=${orderData.id}&sendFiles=true`;
    });
  };

  return(
    <div className="cart">
      <Button onClick={handleShow} attributes={{ type: 'button', 'aria-expanded': showModal, 'aria-controls': 'cartModal', 'data-ga-click': true, 'data-ga-category': 'cart' }}>
        <span className="cart__icon" />
        <span className="cart__count" aria-hidden="true">{cart.count || 0}</span>
        <SrOnly>View {cart.count} items in cart</SrOnly>
      </Button>

      <Modal name="cart" isActive={showModal} onClose={() => setShowModal(false)}>
        <h3 id="cartModalHeading">Cart</h3>
        {cart.total > 0 ? <Summary items={cart.items} name="cart" onAdd={handleAdd} onRemove={handleRemove} total={cart.total} /> : (<p>{checkoutState === 'complete' ? 'Order complete! Redirecting to your confirmation page...' : 'Your cart is empty.'}</p>)}

        {checkoutState !== 'complete' &&
          <div>
            {error && <Errors errors={[error]} />}

            {cart.total > 0 &&
              <PayPalScriptProvider options={{ 'client-id': process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID, currency: 'USD' }}>
                <PayPalButtons createOrder={handleCreateOrder} forceReRender={[cart.count]} onApprove={handleApprove} onCancel={() => setCheckoutState('')} onClick={handleClick} onError={handleError} />
              </PayPalScriptProvider>
            }

            <Button style="secondary" onClick={() => setShowModal(false)} attributes={{ type: 'button', disabled: checkoutState === 'active', 'data-ga-click': true, 'data-ga-category': 'cart' }}>Keep browsing</Button>
          </div>
        }
      </Modal>

      <style jsx global>
        {styles}
      </style>
    </div>
  );
};

export default Cart;