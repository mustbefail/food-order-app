import styles from './Card.module.css';
const Cart = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};

export default Cart;
