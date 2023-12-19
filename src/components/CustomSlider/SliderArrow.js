import { Image } from "react-bootstrap";
import styles from "../CustomSlider/CustomSlider.module.css";

export const PreviousArrow = ({ onClick }) => {
  return (
    <div className={`${styles.leftArrow}`} onClick={onClick}>
      <Image
        src={"/images/left-arrow.png"}
        alt="vector icon"
        width={22.72}
        height={23}
      />
    </div>
  );
};

export const NextArrow = ({ onClick }) => {
  return (
    <div className={`${styles.rightArrow}`} onClick={onClick}>
      <Image
        src={"/images/right-arrow.png"}
        alt="vector icon"
        width={22.72}
        height={23}
      />
    </div>
  );
};
