import React, { useEffect, useState } from "react";
import styles from "../PatientEducation/PatientEducation.module.css";
import TopLayout2 from "../../../../components/TopLayout2/TopLayout2";
import { PatientEducationContent } from "../../../../Service/HomePageService";
import { useDispatch } from "react-redux";
import Skeleton from "react-loading-skeleton";
const PatientGuide = () => {
  const dispatch = useDispatch();
  const [tab, setTab] = useState(0);
  const handleTab = (tab) => {
    setTab(tab);
  };

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    dispatch(PatientEducationContent(setLoading, setData));
  }, []);
  const Nutrition = data?.filter((item) => item?.name === "Nutrition");
  const Sleep = data?.filter((item) => item?.name === "Sleep");
  const Stress = data?.filter((item) => item?.name === "Stress Reduction");
  const Movment = data?.filter((item) => item?.name === "Movement");
  const Heading = data?.[0];
  // console.log(Nutrition, "Nutrition");
  console.log(Heading, "Heading");
  return (
    <>
      <section>
        <TopLayout2
          id={styles.TopLayout}
          Title=""
          Heading={Heading?.name}
          descriptions={Heading?.value}
          image="../images/new/Health planss.webp"
        />
        <div className={`${styles.subContainer} container pt-5`}>
          <div className="row g-0">
            <div className="col-lg-3 offset-lg-1">
              <ul class="list-group list-group-flush">
                <li
                  className={tab === 0 ? styles.active : styles.noneActive}
                  onClick={() => handleTab(0)}
                >
                  Nutrition
                </li>
                <li
                  className={tab === 1 ? styles.active : styles.noneActive}
                  onClick={() => handleTab(1)}
                >
                  Sleep
                </li>
                <li
                  className={tab === 2 ? styles.active : styles.noneActive}
                  onClick={() => handleTab(2)}
                >
                  Stress Reduction
                </li>
                <li
                  className={tab === 3 ? styles.active : styles.noneActive}
                  onClick={() => handleTab(3)}
                >
                  Movement
                </li>
              </ul>
            </div>

            <div className="col-lg-8 " id={styles.paraSection}>
              {tab === 0 && (
                <div className="pb-5">
                  <div>
                    {!loading ? (
                      <>
                        {Nutrition?.map((nut, i) => {
                          return (
                            <>
                              <h1 className={styles.mainHeading}>
                                {nut?.type}
                              </h1>
                              <p className={styles.para}>{nut?.value}</p>
                            </>
                          );
                        })}
                      </>
                    ) : (
                      <Skeleton />
                    )}
                  </div>
                </div>
              )}

              {tab === 1 && (
                <div className="pb-5">
                  <div>
                    {!loading ? (
                      <>
                        {Sleep?.map((nut, i) => {
                          return (
                            <>
                              <h1 className={styles.mainHeading}>
                                {nut?.type}
                              </h1>
                              <p className={styles.para}>{nut?.value}</p>
                            </>
                          );
                        })}
                      </>
                    ) : (
                      <Skeleton />
                    )}
                  </div>
                </div>
              )}

              {tab === 2 && (
                <div className="pb-5">
                  <div>
                    {!loading ? (
                      <>
                        {Stress?.map((nut, i) => {
                          return (
                            <>
                              <h1 className={styles.mainHeading}>
                                {nut?.type}
                              </h1>
                              <p className={styles.para}>{nut?.value}</p>
                            </>
                          );
                        })}
                      </>
                    ) : (
                      <Skeleton />
                    )}
                  </div>
                </div>
              )}

              {tab === 3 && (
                <div className="pb-5">
                  <div>
                    {!loading ? (
                      <>
                        {Movment?.map((nut, i) => {
                          return (
                            <>
                              <h1 className={styles.mainHeading}>
                                {nut?.type}
                              </h1>
                              <p className={styles.para}>{nut?.value}</p>
                            </>
                          );
                        })}
                      </>
                    ) : (
                      <Skeleton />
                    )}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PatientGuide;
