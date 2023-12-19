import React from "react";
import styles from "../ProfileTopHeader/ProfileTopHeader.module.css";
const ProfileTopHeader = ({ Heading }) => {
  return (
    <>
      <div className="container-fluid p-0">
        <div className={styles.ProfileTopSection}>
          <div className={styles.Title}>
            <h2>{Heading}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileTopHeader;
