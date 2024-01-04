import styles from "../TimeButton/TimeButton.module.css";

const TimeButton = ({ from, to, day, onClick, className, onChange }) => {
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
        <span className={styles.current_radio}>{`${from} - ${to} ${day}`}</span>
      </label>
    </div>
  );
};

export default TimeButton;
