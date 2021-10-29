import { useEffect, useRef, useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { addItem, getCart, removeItem, createOrder, approveOrder } from '../../utils/cart';
import { eeEvent } from '../../utils/tracking';
import Button from '../../shared/components/Button';
import Modal from '../shared/Modal';
import Summary from '../shared/Summary';
import Errors from '../shared/Errors';
import styles from './Cart.styles.js';

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
    if (cart.count && !isMount.current) {
      setShowModal(true);
    }
  }, [cart.count]);

  const handleShow = () => {
    setError('');
    setShowModal(true);
  };

  const handleUpdate = () => {
    setError('');
    isMount.current = false;
    setCart(getCart());
  };

  const handleAdd = (item) => {
    addItem(item);
    eeEvent([{ ...item, quantity: 1 }], null, 'add');
  };

  const handleRemove = (item, qty) => {
    removeItem(item, qty);
    eeEvent([{ ...item, quantity: qty }], null, 'remove');
  };

  const handleError = () => {
    setError('There was an error processing your order.<br/>Please try again.');
    setCheckoutState('');
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
      <Button style="secondary" onClick={handleShow} attributes={{ type: 'button', 'aria-expanded': showModal, 'aria-controls': 'cartModal', 'data-ga-click': true, 'data-ga-category': 'cart' }}><span className="cart__count" aria-hidden="true">{cart.count || 0}</span><span className="sr-only">View {cart.count} items in cart</span></Button>

      <Modal name="cart" isActive={showModal} onClose={() => setShowModal(false)}>
        <h3 id="cartModalHeading">Cart</h3>

        {cart.total > 0 ? <Summary items={cart.items} name="cart" onAdd={handleAdd} onRemove={handleRemove} total={cart.total} /> : (<p>{checkoutState === 'complete' ? 'Order complete! Redirecting to your confirmation page...' : 'Your cart is empty.'}</p>)}

        {checkoutState !== 'complete' &&
          <div>
            {error && <Errors errors={[error]} />}

            {cart.total > 0 &&
              <PayPalScriptProvider options={{ 'client-id': process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID, currency: 'USD' }}>
                <PayPalButtons createOrder={handleCreateOrder} forceReRender={[cart.count]} onApprove={handleApprove} onCancel={() => setCheckoutState('')} onClick={() => eeEvent(cart.items, 0, 'checkout', { step: 1 })} onError={handleError} />
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