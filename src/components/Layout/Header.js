import styles from './Header.module.css';
import foodTabelImg from '../../assets/food-table.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>Food Order App</h1>
        <HeaderCartButton />
      </header>
      <div className={styles['main-image']}>
        <img src={foodTabelImg} alt='A table full of food' />
      </div>
    </>
  );
};

export default Header;
