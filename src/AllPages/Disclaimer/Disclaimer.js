import React, { useEffect } from "react";
import styles from "../Disclaimer/Disclaimer.module.css";
import Shadow from "../../components/Shadow/Shadow";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { DisclaimerContent } from "../../Service/HomePageService";
import Skeleton from "react-loading-skeleton";

const Disclaimer = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(DisclaimerContent(setLoading, setData));
  }, []);
    return (
    <>
      <div className="container-fluid p-0">
        <div className={`${styles.subContainer} container`}>
          <h1 className={styles.mainHeading}>
            {!loading ? data?.type : <Skeleton />}
          </h1>
          <div className="pb-5">
            <div className={styles.setShaowRight}>
              <Shadow />
            </div>
            <p className={styles.para}>
              {!loading ? data?.value : <Skeleton />}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Disclaimer;
