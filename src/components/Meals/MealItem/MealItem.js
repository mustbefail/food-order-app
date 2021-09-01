import { useContext } from 'react';
import MealItemForm from './MealItemForm';
import styles from './MealItem.module.css';
import CartContext from '../../../store/cart-context';
import { identifier } from '@babel/types';

const MealItem = ({ meal }) => {
  const cartCtx = useContext(CartContext);
  const { name, description, price, id} = meal;
  const formatPrice = `$${price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id,
      name,
      price,
      amount
    })
  };
  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{formatPrice}</div>
      </div>
      <MealItemForm onAddToCart={addToCartHandler} />
    </li>
  );
};

export default MealItem;
