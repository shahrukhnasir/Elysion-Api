import React, { useEffect, useState } from "react";
import styles from "../TermService/TermService.module.css";
import Shadow from "../../components/Shadow/Shadow";
import TopLayout2 from "../../components/TopLayout2/TopLayout2";
import { useDispatch } from "react-redux";
import Skeleton from "react-loading-skeleton";
import {
  TermCondition,
  TermConditionContent,
} from "../../Service/HomePageService";

const TermService = () => {
  const [data, setData] = useState("");
  const [term, setTermContent] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(TermConditionContent(setLoading, setTermContent));
    dispatch(TermCondition(setLoading, setData));
  }, []);
  return (
    <>
      <div className="container-fluid p-0">
        <TopLayout2
          Heading={!loading ? data?.name : <Skeleton />}
          descriptions={!loading ? data?.content : <Skeleton />}
          image="./images/Terms-service.png"
        />

        <div className={`${styles.subContainer} container`}>
          <h1 className={styles.mainHeading}>Terms and Conditions</h1>

          <div className="pb-5">
            <div className={styles.setShaowRight}>
              <Shadow />
            </div>
            {!loading ? (
              <>
                {term &&
                  term?.map((term, i) => {
                    return (
                      <div key={i}>
                        <h1 className={styles.subHeading}>{term?.type}</h1>
                        <p className={styles.para}>{term?.value}</p>
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
    </>
  );
};

export default TermService;
