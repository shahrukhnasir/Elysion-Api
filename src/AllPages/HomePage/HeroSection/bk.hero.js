import React, { useState } from "react";
import Image from "next/image";
import styles from "../HeroSection/HeroSection.module.css";
import Link from "next/link";
import CommanButton from "../../../components/CommanButton/CommanButton";
function HeroSection() {
  const btn2 = (
    <>
      <div className={styles?.btnText}>Book an Appointment</div>
      <div className={styles?.extraText}>Appointment</div>
    </>
  );
  return (

    <>
      <section id={styles.mainHeroContainer}>
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-lg-5 offset-lg-1 my-auto"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div className="py-5">
                <h1 className={styles.mainHeading}>
                  <span className={styles.mainHeadingInner}>Elysion</span>
                  <span className={styles.HeadingSm}>-better</span>
                  <br className={styles.br} />
                  <span className={styles.HeadingSm}>Health Begins Here.</span>
                </h1>

                <p className={styles.mainDescription}>
                  Unlocking the secrets to better health holds the key to a
                  vibrant and fulfilling life. <br className={styles.br} /> From
                  nourishing your body with wholesome foods to nurturing your
                  mind and <br className={styles.br} />
                  spirit, the journey towards optimal well-being begins here.
                  Embrace the <br className={styles.br} />
                  transformative power of proactive choices and embark on a{" "}
                  <br className={styles.br} />
                  path that will revolutionize your health and vitality.
                </p>
                <div className={styles.freeCon}>
                  {/* <Link href="/book-on-appointment"> */}
                  <Link target="_blank" href="https://elysionhealth.md-hq.com/schedule_visit">
                    <CommanButton
                      className={styles.heroButton}
                      label="Book an Appointment"
                    />
                  </Link>
                  {/* <Link href="/book-on-appointment">
                      {" "}
                      <CommanButtonLight
                        className={styles?.bookNow}
                        // className={styles.portalBtn}
                        label={btn2}
                      />
                    </Link> */}
                </div>
              </div>
            </div>

            <div className="col-lg-6 p-0">
              <div className={styles.HeroImageContainer}>
                <div className={styles.heroSectionImage}>
                  <span
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    className={styles.rounded}
                  >
                    <Image
                      src="/images/playbtn.png"
                      alt="Picture of the author"
                      width={100}
                      height={100}
                    />
                  </span>

                  <div
                    className={styles.box}
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                  >
                    {/* <div class="card lastest-box mb-3" id={styles.card}>
                      <div class="row g-0">
                        <div class="col-lg-3 col-sm-3 my-auto ps-3">
                          <Image
                            src="/images/profile3.png"
                            alt="Picture of the author"
                            width={62}
                            height={62}
                          />
                        </div>
                        <div class="col-lg-8 col-sm-8">
                          <div className="pt-3">
                            <span className={styles.boxTittle}>
                              Latest News
                            </span>
                            <p className={styles.boxDetails}>
                              Dr. Alpherd Dock has Joined{" "}
                              <br className={styles.br} />
                              Elysion Community
                            </p>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${styles.modal} modal fade`}
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content" id={styles.modal}>
              <div className="modal-header border-0">
                {/* <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1> */}
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <video loop autoPlay muted className={styles.modalVideo}>
                  <source src="./video/health-video.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
