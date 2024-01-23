import React, { useEffect, useState } from "react";
import styles from "../PrivacyPolicy/PrivacyPolicy.module.css";
import Shadow from "../../components/Shadow/Shadow";
import TopLayout2 from "../../components/TopLayout2/TopLayout2";
import { useDispatch } from "react-redux";
import { PrivacyPolcy, PrivacyPolicyCont, } from "../../Service/HomePageService";
const PrivacyPolicy = () => {
  const [data, setData] = useState([]);
  const [privacy ,setPrivacy] =useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(PrivacyPolicyCont(setLoading, setData));
    dispatch(PrivacyPolcy(setLoading, setPrivacy));
  }, []);
  console.log(privacy, "privacy");
  return (
    <>
      <div className="container-fluid p-0">
        <TopLayout2
          Heading={privacy?.name}
          descriptions={privacy?.content}
          image="./images/Privacy-Policy.png"
        />

        <div className={`${styles.subContainer} container`}>
          <div className="pb-5">
            <div className={styles.setShaowRight}>
              <Shadow />
            </div>
            {data?.map((data, i) => {
              return (
                <>
                  <h1 className={styles.subHeading}>{data?.type}</h1>
                  <p className={styles.para}>{data?.value}</p>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
