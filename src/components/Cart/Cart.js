import Modal from '../UI/Modal';
import styles from './Cart.module.css';
const Cart = ({ onHideCart }) => {
  const cartItemsMock = [
    { id: 'c1', name: 'Sushi', amount: 2, price: 12.99 },
    { id: 'c3', name: 'Steak', amount: 1, price: 18.99 },
  ];

  return (
    <Modal onHideCart={onHideCart}>
      <ul className={styles['cart-items']}>
        {cartItemsMock.map((cartItem) => (
          <li key={cartItem.id}>{cartItem.name}</li>
        ))}
      </ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>45.54</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={() => onHideCart()}>
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
