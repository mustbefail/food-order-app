import React from 'react';
import styles from './Input.module.css';

const Input = React.forwardRef(({ inputSettings, label }, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={inputSettings.id}>{label}</label>
      <input ref={ref} {...inputSettings} />
    </div>
  );
});

export default Input;
