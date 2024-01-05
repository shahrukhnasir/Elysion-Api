import styles from "../MemberButton/MemberButton.module.css";

const MemberButton = ({ label, style, onClick, className}) => {

  const handleLink = () => {
    const newTab = window.open("https://elysionhealth.md-hq.com/schedule_visit", "_blank");
    if (newTab) {
      newTab.focus(); 
    } else {
    }
  };
  
  return (
 
    <span
      className={`${styles.GeneralButton} ${className}`}
      style={style}
      onClick={onClick}
    >
      <button onClick={onClick}>
        {label}
         </button>
    </span>
  );
};
export default MemberButton;
