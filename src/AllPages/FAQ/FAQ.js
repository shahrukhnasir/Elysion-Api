import React, { useEffect, useState } from "react";
import styles from "../FAQ/FAQ.module.css";
import TopLayout2 from "../../components/TopLayout2/TopLayout2";
import { FaqContent } from "../../Service/HomePageService";
import { useDispatch } from "react-redux";
import { Skeleton } from "antd";
const FAQ = () => {

  const [faQ, setFaq] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FaqContent(setLoading, setFaq, dispatch));
  }, []);
  return (
    <>
      <div className="container-fluid p-0">
        <div className="text-center">
          <h2 className={styles.mainHeading}>FAQ's</h2>
        </div>


        <div className="container" id={styles.minWidth}>
          <div className="row pb-5">
            <div className="">
              <h1 className={styles.subHeading}>
                What are your hours and how do I set up an appointment?
              </h1>
              {!loading ? (
            <>
       
              {faQ?.map((faq, i) => (
                <div
                  className="accordion accordion-flush"
                  key={i}
                  id={`accordionFlushExample-${i}`}
                >
                  <div className={`${styles.accordionitem} accordion-item`}>
                    <h2 className="accordion-header" id={`flush-heading-${i}`}>
                      <button
                        className={`${styles.accordionBtn} accordion-button collapsed`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#flush-collapse-${i}`}
                        aria-expanded="false"
                        aria-controls={`flush-collapse-${i}`}
                      >
                        {faq?.question}
                      </button>
                    </h2>
                    <div
                      id={`flush-collapse-${i}`}
                      className={`${styles.innerAccodion}accordion-collapse collapse`}
                      aria-labelledby={`flush-heading-${i}`}
                      data-bs-parent={`#accordionFlushExample-${i}`}
                    >
                      <div className={`${styles.AccBody} accordion-body`}>
                        <p className={styles.desc}>{faq?.ans}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
                   </>
            ) : (
              <>
                <Skeleton />
              </>
            )}
        
            </div>

            <div className="col-lg-5"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
