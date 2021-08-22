import styles from './MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = () => {
  return (
    <form className={styles.form}>
      <Input
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
    </form>
  );
};

export default MealItemForm;
