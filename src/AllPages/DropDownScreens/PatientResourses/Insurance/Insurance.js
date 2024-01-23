import React, { useState, useEffect } from "react";
import styles from "../Insurance/Insurance.module.css";
import TopLayout2 from "../../../../components/TopLayout2/TopLayout2";
import { useDispatch } from "react-redux";
import { InsuranceContent } from "../../../../Service/HomePageService";
import Skeleton from "react-loading-skeleton";
const Insurance = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    dispatch(InsuranceContent(setLoading, setData));
  }, []);
  return (
    <>
      <div className="container-fluid p-0">
        <TopLayout2
          Title="Patient Resourses"
          Heading={!loading ? data?.name : <Skeleton/>}
          descriptions={!loading ? data?.type : <Skeleton/>}
          image="./images/Insurance.webp"
        />

        <div className={`${styles.subContainer} container py-5`}>
          <h1 className={styles.subHeading}>{!loading ? data?.name : <Skeleton/>}</h1>
          <div className="">
            <p className={styles.para}>
            {!loading ? data?.value : <Skeleton/>}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Insurance;
