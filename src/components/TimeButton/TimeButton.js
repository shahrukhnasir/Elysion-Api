import styles from "../TimeButton/TimeButton.module.css";
const TimeButton = ({ from, style, onClick, className, to, day }) => {
  return (
    <span className={`${styles.GeneralButton} ${className}`} onClick={onClick}>
      <button style={style}>
        <span>
          {from} - {to}
        </span>
        <br />
        {day}
      </button>
    </span>
  );
};
export default TimeButton;
