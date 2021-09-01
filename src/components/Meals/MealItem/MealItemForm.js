import { useRef, useState } from 'react';
import styles from './MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = ({ onAddToCart }) => {
  const amountInputRef = useRef(null);
  const [isAmountValid, setIsAmountValid] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = Number(amountInputRef.current.value);

    if (!enteredAmount || enteredAmount < 1 || enteredAmount > 5) {
      setIsAmountValid(false);
      return;
    }
    onAddToCart(enteredAmount);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        inputSettings={{
          id: 'amount',
          type: 'number',
          min: '1',
          max: '5',
          defaultValue: '1',
        }}
        label='Amount'
      />
      <button>Add</button>
      {!isAmountValid && <p>Plese enter valid amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
