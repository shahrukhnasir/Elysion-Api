import styles from "../CommanButtonLight/CommanButtonLight.module.css";
const CommanButtonLight = ({ label, style, onClick}) => {
  return (
    <span
      className={styles.LightButton}
      style={style}
      onClick={onClick}
    >
      <button >{label} </button>
    </span>
  );
};
export default CommanButtonLight;
