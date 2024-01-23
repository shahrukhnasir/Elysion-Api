import React, { useEffect, useState } from "react";
import styles from "../OfficePolicy/OfficePolicy.module.css";
import Shadow from "../../../components/Shadow/Shadow";
import TopLayout2 from "../../../components/TopLayout2/TopLayout2";
import { useDispatch } from "react-redux";
import { OfficePolicyContent } from "../../../Service/HomePageService";
import Skeleton from "react-loading-skeleton";
const OfficePolicy = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(OfficePolicyContent(setLoading, setData));
  }, []);

  return (
    <>
      <div className="container-fluid p-0">
        <TopLayout2
          Title="Patient Resourses"
          Heading="Office Policy"
          descriptions="Welcome to Elysion Health & Wellness. We are dedicated to providing personalized, high-quality 
          healthcare services to our patients. To ensure a smooth and efficient experience for both our patients 
          and staff, we have established the following office policies. Please take the time to read and understand 
          these policies"
          image="/images/new/office-policy.webp"
        />

        <div className={`${styles.subContainer} container py-5`}>
          <div className="row">
            <div>
              {!loading ? (
                <>
                  {data?.map((data, i) => {
                    return (
                      <div key={i}>
                        <h1 className={styles.subHeading}>{data?.type}</h1>
                        <p className={styles.para}>{data?.value}</p>
                      </div>
                    );
                  })}
                </>
              ) : (
                <Skeleton />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OfficePolicy;
