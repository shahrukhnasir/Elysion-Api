import React, { useEffect, useState } from "react";
import styles from "../OfficePolicy/OfficePolicy.module.css";
import Shadow from "../../../components/Shadow/Shadow";
import TopLayout2 from "../../../components/TopLayout2/TopLayout2";
import { useDispatch } from "react-redux";
import { OfficePolicyContent } from "../../../Service/HomePageService";
import Skeleton from "react-loading-skeleton";
const OfficePolicy = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(OfficePolicyContent(setLoading, setData));
  }, []);
  const fiterData = data?.filter((off) => off?.name === "Office Policy");
  const officeContent = data?.filter((off) => off?.name === "office-content");
  const officeImage = officeContent?.filter((off) => off?.type === "office-image");
  return (
    <>
      <div className="container-fluid p-0">
        {!loading ? (
          <>
            {officeContent?.length > 0 ? (
              <>
                <TopLayout2
                  Title=""
                  Heading={officeContent?.[1]?.type}
                  descriptions={officeContent?.[1]?.value}
                  image={officeImage?.[0]?.image_url}
                />
              </>
            ) : (
              <>
                
                <TopLayout2
                  Title=""
                  Heading="No Data Found"
                  descriptions=""
                  image="/images/No-data.svg"
                />
                 
                
              </>
            )}
          </>
        ) : (
          <Skeleton  avatar/>
        )}




        <div className={`${styles.subContainer} container py-5`}>
          <div className="row">
            <div><div>
              {!loading ? (
                <>
                  {fiterData && fiterData?.length > 0 ? (
                    <>
                      {fiterData?.map((item, i) => (
                        <div key={i}>
                          <h1 className={styles.subHeading}>{item.type}</h1>
                          <p className={styles.para}>{item.value}</p>
                        </div>
                      ))}
                    </>
                  ) : (
                    <>
                      <div className={styles.dataNotFound}>
                        <img src="/images/No-data.svg" alt='' />
                      </div>
                    </>
                  )}
                </>
              ) : (
                <Skeleton />
              )}
            </div>


            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OfficePolicy;
