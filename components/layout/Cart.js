import { useEffect, useRef, useState } from 'react';
import { addItem, getCart, removeItem } from '../../utils/cart';
import { eeEvent } from '../../utils/tracking';
import Button from '../../shared/components/Button';
import Modal from '../shared/Modal';
import Summary from '../shared/Summary';
import Checkout from './Checkout';
import styles from './Cart.styles.js';

const Cart = () => {
  const count = useRef(0);
  const [cart, setCart] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const cart = getCart();
    setCart(cart);
    count.current = cart.count;

    document.addEventListener('updateCart', handleUpdate);
    return () => document.removeEventListener('updateCart', handleUpdate);
  }, []);

  useEffect(() => {
    if (cart.count && count.current && cart.count !== count.current) {
      setShowModal(true);
    }

    count.current = cart.count;
  }, [cart.count]);

  const handleUpdate = () => {
    setCart(getCart());
  };

  const handleAdd = (item) => {
    addItem(item);
    eeEvent([{ ...item, quantity: 1 }], 0, 'addToCart', 'add');
  };

  const handleRemove = (item, qty) => {
    removeItem(item, qty);
    eeEvent([{ ...item, quantity: qty }], 0, 'removeFromCart', 'remove');
  };

  return(
    <div className="cart">
      <Button style="secondary" onClick={() => setShowModal(true)} attributes={{ type: 'button', 'aria-expanded': showModal, 'aria-controls': 'cartModal', 'data-ga-click': true, 'data-ga-category': 'cart' }}><span className="cart__count" aria-hidden="true">{cart.count}</span><span className="sr-only">View {cart.count} items in cart</span></Button>

      <Modal name="cart" isActive={showModal} onClose={() => setShowModal(false)}>
        <h3 id="cartModalHeading">Cart</h3>

        {cart.total ? <Summary items={cart.items} name="cart" onAdd={handleAdd} onRemove={handleRemove} total={cart.total} /> : (<p>Your cart is empty.</p>)}

        <div>
          {cart.total && <Checkout cart={cart} />}
          <Button style="secondary" onClick={() => setShowModal(false)} attributes={{ type: 'button', 'data-ga-click': true, 'data-ga-category': 'cart' }}>Keep browsing</Button>
        </div>
      </Modal>

      <style jsx global>
        {styles}
      </style>
    </div>
  );
};

export default Cart;