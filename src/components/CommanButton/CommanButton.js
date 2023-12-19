import styles from "../CommanButton/CommanButton.module.css";
const CommanButton = ({ label, style, onClick, className}) => {
  return (
    <span
      className={`${styles.GeneralButton} ${className}`}
      style={style}
      onClick={onClick}
    >
      <button >{label} </button>
    </span>
  );
};
export default CommanButton;
