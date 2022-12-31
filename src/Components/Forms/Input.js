import React from "react";
import styles from "./Input.module.css";

const Input = ({ label, id, type, value, onChange, error, onBlur }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        className={styles.input}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />
      
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
