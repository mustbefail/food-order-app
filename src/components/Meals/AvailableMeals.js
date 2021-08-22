import Card from '../UI/Card';
import styles from './AvailableMeals.module.css';
import mealsData from './mealsHardcode';
import MealItem from './MealItem';

const AvaillableMeals = () => {
  return (
    <section className={styles.meals}>
      <ul>
        <Card>
          {mealsData.map((meal) => (
            <MealItem
              key={meal.id}
              meal={meal}
            />
          ))}
        </Card>
      </ul>
    </section>
  );
};

export default AvaillableMeals;
