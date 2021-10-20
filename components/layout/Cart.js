import { useEffect, useRef, useState } from 'react';
import { addItem, getCart, removeItem } from '../../utils/cart';
import { eeEvent } from '../../utils/tracking';
import Button from '../../shared/components/Button';
import Modal from '../shared/Modal';
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
    eeEvent({ ...item, quantity: 1 }, 0, 'addToCart', 'add');
  };

  const handleRemove = (item, qty) => {
    removeItem(item, qty);
    eeEvent({ ...item, quantity: qty }, 0, 'removeFromCart', 'remove');
  };

  return(
    <div className="cart">
      <Button style="secondary" onClick={() => setShowModal(true)} attributes={{ type: 'button', 'data-ga-click': true, 'data-ga-category': 'cart', 'aria-expanded': showModal, 'aria-controls': 'cartModal' }}><span className="cart__count" aria-label={`View ${cart.count} items in cart`}>{cart.count}</span></Button>

      <Modal name="cart" isActive={showModal} onClose={() => setShowModal(false)}>
        <h3 id="cartModalHeading">Cart</h3>

        <ul>
          {(cart.items || []).map((item, i) => {
            return (
              <li key={i} className="cart__item">
                <div className="cart__item-row">
                  <span>{item.name}</span>
                  <span>${item.price * item.qty}</span>
                </div>

                <div className="cart__item-row cart__item-row--btns">
                  <Button style="link" onClick={() => handleRemove(item, item.qty)} attributes={{ type: 'button', 'data-ga-click': true, 'data-ga-category': 'cart' }}>REMOVE</Button>

                  <div className="cart__qty">
                    <Button style="link" onClick={() => handleRemove(item, 1)} attributes={{ type: 'button', 'data-ga-click': true, 'data-ga-category': 'cart' }}>–</Button>
                    {item.qty} LICENSE{item.qty !== 1 && 'S'}
                    <Button style="link" onClick={() => handleAdd(item)} attributes={{ type: 'button', 'data-ga-click': true, 'data-ga-category': 'cart' }}>+</Button>
                  </div>
                </div>
              </li>
            );
          })}

          <li className="cart__item cart__item--total cart__item-row">
            <span>Total</span>
            <span>${cart.total}</span>
          </li>
        </ul>

        <Button style="secondary" onClick={() => setShowModal(false)} attributes={{ type: 'button', 'data-ga-click': true, 'data-ga-category': 'cart' }}>Keep browsing</Button>
      </Modal>

      <style jsx global>
        {styles}
      </style>
    </div>
  );
};

export default Cart;