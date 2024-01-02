import React, { useEffect, useState } from "react";
import styles from "../Accordions/Accordion.module.css";
import { useDispatch } from "react-redux";
import { FaqContent } from "../../../Service/HomePageService";
import { Skeleton } from "antd";
const Accordions = () => {
  const [faQ, setFaq] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FaqContent(setLoading, setFaq, dispatch));
  }, []);
  return (
    <>
      <div className="container-fluid" id="faq">
        <div className="container pb-5" id={styles.minWidth}>
          <div
            className="text-center"
            id={styles.mainSection}
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h1 className={styles.mainHeading}>Have a Question? We can help</h1>

            <span
              className={styles.topTitle}
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              {" "}
            </span>
          </div>
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
         

       

          {/* <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className={`${styles.accordionitem} accordion-item`}>
              <h2 className="accordion-header" id="flush-headingEight">
                <button
                  className={`${styles.accordionBtn} accordion-button collapsed`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseEight"
                  aria-expanded="false"
                  aria-controls="flush-collapseEight"
                >
                  What is concierge medicine?
                </button>
              </h2>
              <div
                id="flush-collapseEight"
                className={`${styles.innerAccodion}accordion-collapse collapse`}
                aria-labelledby="flush-headingEight"
                data-bs-parent="#accordionFlushExample"
              >
                <div className={`${styles.AccBody} accordion-body`}>
                  <p className={styles.desc}>
                    Concierge medicine is a medical practice model that provides
                    patients with greater level of access and personalization.
                    At Elysion Health and Wellness, this involves a membership
                    fee which is either paid monthly or yearly. We offer value
                    and accessibility by limiting our patient panel and
                    increasing your visit time with your provider. We are not
                    insurance and we do recommend patients keep a high
                    deductible health insurance plan if able for emergencies.
                  </p>
                </div>
              </div>
            </div>

            <div className={`${styles.accordionitem} accordion-item`}>
              <h2 className="accordion-header" id="flush-headingNin">
                <button
                  className={`${styles.accordionBtn} accordion-button collapsed`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseNin"
                  aria-expanded="false"
                  aria-controls="flush-collapseNin"
                >
                  What is included in my membership?
                </button>
              </h2>
              <div
                id="flush-collapseNin"
                className={`${styles.innerAccodion}accordion-collapse collapse`}
                aria-labelledby="flush-headingNin"
                data-bs-parent="#accordionFlushExample"
              >
                <div className={`${styles.AccBody} accordion-body`}>
                  <p className={styles.desc}>
                    Our packages are designed to provide value in health care.
                    We advise our patients to take full advantage of our model
                    of integrative health care which includes a comprehensive
                    annual visit, diet and lifestyle interventions as well as
                    emotional support and coaching from our office staff.
                    Packages do include office visits with your doctor (no
                    copays), InBody assessments, access to your physician after
                    hours for urgent health concerns with options to upgrade if
                    additional services are desired. Same or next day
                    appointments are made available for urgent matters. Please
                    see our 3 membership plans for additional details and
                    schedule your 15 min free consultation with Dr. Gibson to
                    discuss which plan might be right for you.
                  </p>
                </div>
              </div>
            </div>

            <div className={`${styles.accordionitem} accordion-item`}>
              <h2 className="accordion-header" id="flush-heading10">
                <button
                  className={`${styles.accordionBtn} accordion-button collapsed`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse10"
                  aria-expanded="false"
                  aria-controls="flush-collapse10"
                >
                  Is there a registration fee?
                </button>
              </h2>
              <div
                id="flush-collapse10"
                className={`${styles.innerAccodion}accordion-collapse collapse`}
                aria-labelledby="flush-heading10"
                data-bs-parent="#accordionFlushExample"
              >
                <div className={`${styles.AccBody} accordion-body`}>
                  <p className={styles.desc}>
                    Yes, there is a registration fee of $150. This fee is
                    important for us to do the leg work to obtain and sort
                    medical information from your prior providers, obtain
                    hospital records as well as clarifying medication history
                    from your pharmacy. In certain healthy individuals with
                    limited prior history, this fee might be waived
                  </p>
                </div>
              </div>
            </div>

            <div className={`${styles.accordionitem} accordion-item`}>
              <h2 className="accordion-header" id="flush-heading11">
                <button
                  className={`${styles.accordionBtn} accordion-button collapsed`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse11"
                  aria-expanded="false"
                  aria-controls="flush-collapse11"
                >
                  Do you accept HSA and FSA?
                </button>
              </h2>
              <div
                id="flush-collapse11"
                className={`${styles.innerAccodion}accordion-collapse collapse`}
                aria-labelledby="flush-heading11"
                data-bs-parent="#accordionFlushExample"
              >
                <div className={`${styles.AccBody} accordion-body`}>
                  <p className={styles.desc}>
                    FSA and HSA can likely be used for our services. Please
                    contact your health plan regarding re-imbursement.
                  </p>
                </div>
              </div>
            </div>

            <div className={`${styles.accordionitem} accordion-item`}>
              <h2 className="accordion-header" id="flush-heading12">
                <button
                  className={`${styles.accordionBtn} accordion-button collapsed`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse12"
                  aria-expanded="false"
                  aria-controls="flush-collapse12"
                >
                  If I am experiencing an emergency, should I call my concierge
                  doctor?
                </button>
              </h2>
              <div
                id="flush-collapse12"
                className={`${styles.innerAccodion}accordion-collapse collapse`}
                aria-labelledby="flush-heading12"
                data-bs-parent="#accordionFlushExample"
              >
                <div className={`${styles.AccBody} accordion-body`}>
                  <p className={styles.desc}>
                    True emergencies such as chest pain, stroke-like symptoms,
                    shortness of breath, trauma etc. need to dealt with in an
                    emergent fashion. Please call 911 for life-saving
                    interventions. Once you are stable, you can reach out to us
                    so that we can get necessary medical records, address any
                    concerns and schedule a follow up visit once you are able.
                  </p>
                </div>
              </div>
            </div>

            <div className={`${styles.accordionitem} accordion-item`}>
              <h2 className="accordion-header" id="flush-heading13">
                <button
                  className={`${styles.accordionBtn} accordion-button collapsed`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse13"
                  aria-expanded="false"
                  aria-controls="flush-collapse13"
                >
                  Are house calls available?
                </button>
              </h2>
              <div
                id="flush-collapse13"
                className={`${styles.innerAccodion}accordion-collapse collapse`}
                aria-labelledby="flush-heading13"
                data-bs-parent="#accordionFlushExample"
              >
                <div className={`${styles.AccBody} accordion-body`}>
                  <p className={styles.desc}>
                    Yes, house calls are available specifically for patients who
                    have difficulty leaving their homes. This is a part of our
                    premium plus package or could be discussed with our office
                    if the need should arise at any time. We do recommend face
                    to face visits for a thorough evaluation but telemedicine
                    visits can also be scheduled as needed.
                  </p>
                </div>
              </div>
            </div>

            <div className={`${styles.accordionitem} accordion-item`}>
              <h2 className="accordion-header" id="flush-heading14">
                <button
                  className={`${styles.accordionBtn} accordion-button collapsed`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse14"
                  aria-expanded="false"
                  aria-controls="flush-collapse14"
                >
                  Does Elysion Health and Wellness cater to only women?
                </button>
              </h2>
              <div
                id="flush-collapse14"
                className={`${styles.innerAccodion}accordion-collapse collapse`}
                aria-labelledby="flush-heading14"
                data-bs-parent="#accordionFlushExample"
              >
                <div className={`${styles.AccBody} accordion-body`}>
                  <p className={styles.desc} p>
                    Although our focus is on the more complex gender of the
                    species, we welcome men to our practice who have the same
                    vision for good health, hormonal balance and longevity. We
                    do not see childrenspan &lt; 18 yrs of age.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Accordions;
