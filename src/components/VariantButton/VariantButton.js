import styles from "../VariantButton/VariantButton.module.css";

const VariantButton = ({ variant, onClick, className, onChange }) => {
  return (
    <div className={styles.timeCheckButton}>
      <label className={`${styles.GeneralButton} ${className}`}>
        <input
          type="radio"
          name="timeButton"
          onChange={onChange}
          onClick={onClick}
          hidden
        />
        <span className={styles.current_radio}>{`${variant}`}</span>
      </label>
    </div>
  );
};

export default VariantButton;
