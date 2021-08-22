import styles from './Input.module.css';

const Input = ({ inputSettings, label }) => {
  return (
    <div className={styles.input}>
      <label htmlFor={inputSettings.id}>{label}</label>
      <input {...inputSettings} />
    </div>
  );
};

export default Input;
