import React, { useEffect, useState } from "react";
import TopLayout2 from "../../../../components/TopLayout2/TopLayout2";
import styles from "../PatientForm/PatientForm.module.css";
import { PatientFormContent } from "../../../../Service/HomePageService";
import { useDispatch } from "react-redux";
import Skeleton from "react-loading-skeleton";
const PatientForm = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(PatientFormContent(setLoading, setData));
  }, []);

  console.log(data,'datadata');
  return (
    <>
      <TopLayout2
        Heading={!loading ? data?.name : <Skeleton  loading={loading} />}
        Title=""
        descriptions={!loading ? data?.type : <Skeleton />}
        image="../images/patientform.webp"
      />

      <div className="container py-lg-5">
        <div className="py-3">
          <h2 className={styles.subHeading}>

            {!loading ? data?.type : <Skeleton />}
          </h2>
        </div>
        <p className={styles.para}>{!loading ? data?.value : <Skeleton />}</p>
      </div>
    </>
  );
};

export default PatientForm;
